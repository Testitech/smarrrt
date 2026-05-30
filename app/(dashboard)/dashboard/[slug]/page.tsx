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
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import type { PofStatus } from "@/types";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type Props = {
  params: {
    slug: string;
  };
};

// ─────────────────────────────────────────
// STATUS CONFIG
// ─────────────────────────────────────────

const STATUS_CONFIG = {
  safe: {
    label: "Safe Period",
    className:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
  },
  caution: {
    label: "Caution Period",
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800",
  },
  risky: {
    label: "Risky Period",
    className:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
  },
};

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default async function StrategyPage({ params }: Props) {
  const { slug } = params;
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  // Fetch timeline
  const timeline = await prisma.userTimeline.findUnique({
    where: { slug },
    include: {
      country: true,
      purpose: true,
    },
  });

  // Not found or doesn't belong to this user
  if (!timeline || timeline.userId !== session.user.id) {
    notFound();
  }

  // Fetch live FX rate
  const fxRate = await getFxRate(timeline.country.currencyCode);

  // Fetch POF rule
  const rule = await prisma.pofRule.findUnique({
    where: {
      countryId_purposeId: {
        countryId: timeline.countryId,
        purposeId: timeline.purposeId,
      },
    },
  });

  // Fetch study intakes if applicable
  let studyIntakes: number[] = [];
  if (timeline.purpose.slug === "study") {
    const intakes = await prisma.studyIntake.findMany({
      where: { countryId: timeline.countryId },
    });
    studyIntakes = intakes.map((i) => i.intakeMonth);
  }

  // Recalculate with latest FX rates
  const calculation = rule
    ? calculatePof({
        rule,
        fxRate,
        intakeDate: timeline.intakeDate,
        currentBalanceNaira: timeline.currentBalance,
        intakeMonths: studyIntakes,
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

  const currentMonth = new Date().getMonth();
  const currentStatus: PofStatus = calculation?.currentStatus ?? "risky";
  const statusConfig = STATUS_CONFIG[currentStatus];

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

        <Button variant="outline" size="sm" disabled className="rounded-xl">
          <RefreshCw className="w-4 h-4 mr-2" />
          Recalculate
        </Button>
      </div>

      {/* ── FINANCIAL SUMMARY ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "POF Required",
            value: formatForeign(
              rule?.minAmountForeign ?? 0,
              timeline.country.currencyCode,
            ),
            sub: timeline.country.currencyCode,
          },
          {
            label: "Naira Target",
            value: formatNaira(
              calculation?.recommendedNairaTarget ?? timeline.targetAmount,
            ),
            sub: "Parallel + 5% buffer",
          },
          {
            label: "Monthly Deposit",
            value: formatNaira(
              calculation?.safeMonthlyDeposit ?? timeline.monthlyDeposit,
            ),
            sub: "Safe amount",
          },
          {
            label: "Parallel Rate",
            value: `₦${fxRate.parallelRate.toLocaleString("en-NG")}`,
            sub: `Per ${timeline.country.currencyCode}`,
          },
        ].map((item) => (
          <Card
            key={item.label}
            className="border-border/60 bg-background/70 backdrop-blur-sm shadow-sm rounded-2xl"
          >
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                {item.label}
              </p>
              <p className="text-2xl tracking-tight font-bold naira-amount">
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── CALENDAR ── */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-4">
            12-Month Preparation Calendar
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Your safest timeline for building embassy compliant proof of funds.
          </p>
        </div>
        {calculation ? (
          <PofCalendar
            monthlyBreakdown={calculation.monthlyBreakdown}
            currentMonth={currentMonth}
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
          currentStatus={currentStatus as PofStatus}
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
          safeMonthlyDeposit={calculation.safeMonthlyDeposit}
          lumpSumRisk={calculation.lumpSumRisk}
          monthsAvailable={calculation.monthlyBreakdown.length}
          currencyCode={timeline.country.currencyCode}
          minAmountForeign={rule?.minAmountForeign ?? 0}
        />
      )}
    </div>
  );
}
