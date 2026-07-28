import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { calculatePof, interpolateAnalysisText } from "@/lib/pof-engine";
import { formatNaira, formatForeign, getFxRate } from "@/lib/fx";
import PofCalendar from "@/components/dashboard/pof-calendar";
import StatementAnalyzer from "@/components/dashboard/statement-analyzer";
import PofAnalysis from "@/components/dashboard/pof-analysis";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MetricCard } from "@/components/shared/metric-card";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import type { PofStatus } from "@/types";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// ─────────────────────────────────────────
// STATUS CONFIG
// ─────────────────────────────────────────

const STATUS_CONFIG = {
  safe: {
    label: "Planning: safer window",
    className:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
  },
  caution: {
    label: "Planning: caution window",
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800",
  },
  risky: {
    label: "Planning: late window",
    className:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
  },
};

const AMOUNT_SCOPE_LABELS = {
  TOTAL_ESTIMATE: "Configured total estimate",
  LIVING_COSTS_ONLY: "Configured living-cost amount",
  VARIABLE_REQUIREMENT: "Variable requirement; verify inputs",
} as const;

function wholeMonthsBetween(start: Date, end: Date) {
  if (end <= start) return 0;

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    end.getUTCMonth() -
    start.getUTCMonth();

  if (end.getUTCDate() < start.getUTCDate()) {
    months -= 1;
  }

  return Math.max(0, months);
}

function formatSource(source: string) {
  return source.replaceAll(/[-_]/g, " ").replace(/\b\w/g, (letter) =>
    letter.toUpperCase(),
  );
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default async function StrategyPage({ params }: Props) {
  const { slug } = await params;
  const now = new Date();
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  if (!session.user.isActive) {
    redirect("/signin?error=AccountDisabled");
  }

  // Fetch timeline
  const timeline = await prisma.userTimeline.findFirst({
    where: { slug, userId: session.user.id },
    include: {
      country: true,
      purpose: true,
    },
  });

  if (!timeline) {
    notFound();
  }

  // Fetch the latest stored or fallback FX reference.
  const fxRate = await getFxRate(timeline.country.currencyCode);

  // Fetch POF rule
  const rule = await prisma.pofRule.findFirst({
    where: {
      countryId: timeline.countryId,
      purposeId: timeline.purposeId,
      isActive: true,
      AND: [
        { OR: [{ effectiveFrom: null }, { effectiveFrom: { lte: now } }] },
        { OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }] },
      ],
    },
  });

  // Recalculate with latest FX rates
  const calculation = rule
    ? calculatePof({
        rule,
        fxRate,
        intakeDate: timeline.intakeDate,
        currentBalanceNaira: timeline.currentBalance,
        asOfDate: now,
      })
    : null;

  // Interpolate analysis text
  const analysisText =
    rule && calculation
      ? interpolateAnalysisText(rule.analysisText, {
          parallelRate: fxRate.parallelRate,
          cbnRate: fxRate.cbnRate,
          safeDate: calculation.safeStartDate.toLocaleDateString("en-NG", {
            month: "long",
            year: "numeric",
          }),
          cautionDate: calculation.cautionStartDate.toLocaleDateString(
            "en-NG",
            { month: "long", year: "numeric" },
          ),
          nairaTarget: formatNaira(calculation.recommendedNairaTarget),
          monthlyDeposit: formatNaira(calculation.safeMonthlyDeposit),
          currencyCode: timeline.country.currencyCode,
          minAmountForeign: rule.minAmountForeign,
        })
      : "";

  const nigeriaSpecific =
    rule && calculation
      ? interpolateAnalysisText(rule.nigerianSpecific, {
          parallelRate: fxRate.parallelRate,
          cbnRate: fxRate.cbnRate,
          safeDate: calculation.safeStartDate.toLocaleDateString("en-NG", {
            month: "long",
            year: "numeric",
          }),
          cautionDate: calculation.cautionStartDate.toLocaleDateString(
            "en-NG",
            { month: "long", year: "numeric" },
          ),
          nairaTarget: formatNaira(calculation.recommendedNairaTarget),
          monthlyDeposit: formatNaira(calculation.safeMonthlyDeposit),
          currencyCode: timeline.country.currencyCode,
          minAmountForeign: rule.minAmountForeign,
        })
      : "";

  const currentStatus: PofStatus | null = calculation?.currentStatus ?? null;
  const statusConfig = currentStatus
    ? STATUS_CONFIG[currentStatus]
    : {
        label: "Planning rule unavailable",
        className: "bg-muted text-muted-foreground border-border",
      };
  const monthsAvailable = wholeMonthsBetween(now, timeline.intakeDate);

  return (
    <div className="space-y-8">
      {/* ── HEADER ── */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <Button asChild variant="ghost" size="sm" className="w-fit -ml-2">
            <Link href="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight">
                {timeline.country.flagEmoji} {timeline.country.name}
              </h1>

              <Badge
                className={`${statusConfig.className} px-3 py-1 text-xs font-semibold`}
              >
                {statusConfig.label}
              </Badge>
            </div>

            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {timeline.purpose.icon} {timeline.purpose.name} Visa Strategy ·
              Intake{" "}
              {new Date(timeline.intakeDate).toLocaleDateString("en-NG", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

      </div>

      <Card className="rounded-2xl border-border/60 bg-muted/30">
        <CardContent className="p-4 text-xs leading-relaxed text-muted-foreground">
          <p>
            This page recomputes your saved inputs with the current active rule
            and latest stored FX reference. The saved snapshot from{" "}
            {timeline.calculatedAt.toLocaleString("en-NG", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
            {" "}recorded {formatNaira(timeline.targetAmount)} using rule{" "}
            {timeline.ruleVersion ?? "not recorded"}
            {timeline.fxRateUsed
              ? ` and an FX rate of NGN ${timeline.fxRateUsed.toLocaleString("en-NG")}`
              : ""}
            .
          </p>
        </CardContent>
      </Card>

      {/* ── FINANCIAL SUMMARY ── */}
      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Configured Rule Amount",
            value: rule
              ? formatForeign(
                  rule.minAmountForeign,
                  timeline.country.currencyCode,
                )
              : "Unavailable",
            sub: rule
              ? AMOUNT_SCOPE_LABELS[rule.amountScope]
              : "No active planning rule",
          },
          {
            label: "Estimated Naira Target",
            value: formatNaira(
              calculation?.recommendedNairaTarget ?? timeline.targetAmount,
            ),
            sub: "Parallel reference + configured buffer",
          },
          {
            label: "Monthly Contribution",
            value: formatNaira(
              calculation?.safeMonthlyDeposit ?? timeline.monthlyDeposit,
            ),
            sub: "Illustrative planning amount",
          },
          {
            label: "Parallel Reference",
            value: `₦${fxRate.parallelRate.toLocaleString("en-NG")}`,
            sub: `Per ${timeline.country.currencyCode} · ${fxRate.isIndicative ? "indicative" : "stored"}`,
          },
        ].map((item) => (
          <MetricCard
            key={item.label}
            label={item.label}
            value={item.value}
            sub={item.sub}
            className="bg-background/70 backdrop-blur-sm"
          />
        ))}
      </div>

      <Card className="rounded-2xl border-primary/20 bg-primary/5">
        <CardContent className="flex gap-3 p-4">
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-primary"
          />
          <p className="text-xs leading-relaxed text-muted-foreground">
            This estimate uses the {formatSource(fxRate.source)} FX reference,
            recorded{" "}
            {new Date(fxRate.lastUpdated).toLocaleString("en-NG", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
            . It is {fxRate.isIndicative ? "indicative and " : ""}not a
            transaction quote. Confirm the applicable rate before acting.
          </p>
        </CardContent>
      </Card>

      {/* ── CALENDAR ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-4">
            12-Month Preparation Calendar
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            A configured planning timeline—not a finding that funds are embassy
            compliant or that an application will be approved.
          </p>
        </div>
        {calculation ? (
          <PofCalendar
            monthlyBreakdown={calculation.monthlyBreakdown}
          />
        ) : (
          <p className="text-muted-foreground text-sm">
            No POF rule found for this country and visa purpose combination.
          </p>
        )}
      </section>

      {/* ── ANALYSIS ── */}
      {rule && calculation && (
        <PofAnalysis
          analysisText={analysisText}
          nigerianSpecific={nigeriaSpecific}
          currentStatus={calculation.currentStatus}
          requiresHistory={rule.requiresHistory}
          statementMonths={rule.statementMonths}
          countryName={timeline.country.name}
          purposeName={timeline.purpose.name}
          lumpSumRisk={calculation.lumpSumRisk}
        />
      )}

      {/* ── STATEMENT ANALYZER ── */}
      {calculation && (
        <StatementAnalyzer
          recommendedNairaTarget={calculation.recommendedNairaTarget}
          currentBalanceNaira={timeline.currentBalance}
          monthsAvailable={monthsAvailable}
          currencyCode={timeline.country.currencyCode}
          minAmountForeign={rule?.minAmountForeign ?? 0}
        />
      )}
    </div>
  );
}
