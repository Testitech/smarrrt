import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNaira, formatDate } from "@/lib/fx";

import {
  ArrowRight,
  Plus,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import type { PofStatus } from "@/types";

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

function StatusBadge({ status }: { status: PofStatus }) {
  const config = {
    safe: {
      label: "Safe",
      className:
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
      icon: CheckCircle,
    },
    caution: {
      label: "Caution",
      className:
        "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800",
      icon: Clock,
    },
    risky: {
      label: "Risky",
      className:
        "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
      icon: AlertTriangle,
    },
  };

  const { label, className, icon: Icon } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${className}`}
    >
      <Icon aria-hidden="true" className="size-3" />
      {label}
    </span>
  );
}

function normalizeStatus(status: string): PofStatus {
  if (status === "safe" || status === "caution" || status === "risky") {
    return status;
  }

  return "caution";
}

function formatCalculatedAt(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
  }).format(date);
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  if (!session.user.isActive) {
    redirect("/signin?error=AccountDisabled");
  }

  const timelines = await prisma.userTimeline.findMany({
    where: { userId: session.user.id },
    select: {
      id: true,
      slug: true,
      currentStatus: true,
      targetAmount: true,
      amountScope: true,
      monthlyDeposit: true,
      safeStartDate: true,
      intakeDate: true,
      calculatedAt: true,
      country: {
        select: {
          flagEmoji: true,
          name: true,
        },
      },
      purpose: {
        select: {
          icon: true,
          name: true,
        },
      },
    },
    orderBy: { updatedAt: "desc" },
  });

  const firstName = session.user.name?.split(" ")[0] ?? "there";
  const savedSafeCount = timelines.filter(
    (timeline) => timeline.currentStatus === "safe",
  ).length;
  const savedAttentionCount = timelines.filter(
    (timeline) =>
      timeline.currentStatus === "caution" ||
      timeline.currentStatus === "risky",
  ).length;

  return (
    <div className="motion-reveal motion-reveal-immediate relative space-y-8 md:space-y-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_30%)]" />
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-background to-muted/30 p-6 sm:p-8 md:p-10">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 size-64 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium text-primary">
              Your financial readiness dashboard
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Welcome back, {firstName} 👋
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Revisit your saved proof-of-funds calculations and see which
              plans may need another review before you apply.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-xl px-6 text-base sm:w-fit"
          >
            <Link href="/calculator">
              <Plus aria-hidden="true" className="mr-2 size-5" />
              New Strategy
            </Link>
          </Button>
        </div>
      </section>

      <section aria-labelledby="strategy-summary-heading">
        <h2 id="strategy-summary-heading" className="sr-only">
          Strategy summary
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            label: "Saved strategies",
            value: timelines.length,
            icon: Calendar,
            description: "Calculations in your account",
          },
          {
            label: "Saved as safe",
            value: savedSafeCount,
            icon: CheckCircle,
            description: "At the last calculation",
          },
          {
            label: "Need review",
            value: savedAttentionCount,
            icon: AlertTriangle,
            description: "Saved as caution or risky",
          },
        ].map((stat) => (
          <Card
            key={stat.label}
            className="rounded-2xl border-border/60 bg-linear-to-br from-background to-muted/20"
          >
            <CardContent className="px-5 py-6 sm:px-6">
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10">
                  <stat.icon
                    aria-hidden="true"
                    className="size-5 text-primary"
                  />
                </div>

                <span className="text-right text-xs font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>

              <p className="text-4xl font-bold tracking-tight">{stat.value}</p>

              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
        </div>
      </section>

      {/* ── TIMELINES ── */}
      {timelines.length === 0 ? (
        // Empty state
        <Card className="overflow-hidden rounded-2xl border-dashed border-border/70 bg-background/70 backdrop-blur-sm">
          <CardContent className="px-5 py-14 text-center sm:py-16">
            <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp aria-hidden="true" className="size-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Start building your first visa strategy
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              Create your first POF strategy to see your personalised timeline,
              Naira targets, and monthly deposit plan.
            </p>
            <Button asChild>
              <Link href="/calculator">
                <Plus aria-hidden="true" className="mr-2 size-4" />
                Create Your First Strategy
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        // Timeline cards
        <section id="saved-strategies" aria-labelledby="saved-strategies-heading" className="scroll-mt-24 space-y-4">
          <div>
            <h2 id="saved-strategies-heading" className="text-lg font-semibold">
              Your saved strategies
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Statuses reflect the most recent calculation, not a live account
              balance or application decision.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {timelines.map((timeline) => (
              <Card
                key={timeline.id}
                className="rounded-2xl border-border transition-colors hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <CardTitle className="text-xl font-bold tracking-tight">
                        {timeline.country.flagEmoji} {timeline.country.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {timeline.purpose.icon} {timeline.purpose.name} Visa
                      </p>
                    </div>
                    <StatusBadge status={normalizeStatus(timeline.currentStatus)} />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key figures */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-2xl border border-border/50 bg-muted/30 p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        Naira Target
                      </p>
                      <p className="break-words text-lg font-bold tracking-tight tabular-nums">
                        {timeline.amountScope === "VARIABLE_REQUIREMENT" || timeline.targetAmount === null
                          ? "Applicant-specific"
                          : formatNaira(timeline.targetAmount)}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/50 bg-muted/30 p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        Suggested Monthly Deposit
                      </p>
                      <p className="break-words text-base font-bold tabular-nums">
                        {timeline.amountScope === "VARIABLE_REQUIREMENT" || timeline.monthlyDeposit === null
                          ? "Not fixed"
                          : formatNaira(timeline.monthlyDeposit)}
                      </p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span>
                      Safe from{" "}
                      <span className="text-green-600 font-semibold">
                        {formatDate(timeline.safeStartDate)}
                      </span>
                    </span>
                    <span>
                      Intake:{" "}
                      <span className="font-semibold text-foreground">
                        {formatDate(timeline.intakeDate)}
                      </span>
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Calculated {formatCalculatedAt(timeline.calculatedAt)}
                  </p>

                  {/* View button */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl"
                  >
                    <Link href={`/dashboard/${timeline.slug}`}>
                      View Full Strategy
                      <ArrowRight aria-hidden="true" className="ml-2 size-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
