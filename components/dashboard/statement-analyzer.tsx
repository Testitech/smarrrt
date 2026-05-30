"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, CheckCircle, TrendingUp, Info } from "lucide-react";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type StatementAnalyzerProps = {
  recommendedNairaTarget: number;
  currentBalanceNaira: number;
  safeMonthlyDeposit: number;
  lumpSumRisk: boolean;
  monthsAvailable: number;
  currencyCode: string;
  minAmountForeign: number;
};

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getLumpSumRiskLevel(
  monthlyDeposit: number,
  currentBalance: number,
): "safe" | "caution" | "risky" {
  if (currentBalance === 0) return "risky";
  const ratio = monthlyDeposit / currentBalance;
  if (ratio <= 0.3) return "safe";
  if (ratio <= 0.6) return "caution";
  return "risky";
}

// ─────────────────────────────────────────
// MONTH ROW
// ─────────────────────────────────────────

function MonthRow({
  month,
  deposit,
  runningBalance,
  target,
  index,
}: {
  month: string;
  deposit: number;
  runningBalance: number;
  target: number;
  index: number;
}) {
  const progress = Math.min((runningBalance / target) * 100, 100);
  const isComplete = runningBalance >= target;

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border last:border-0">
      {/* Month number */}
      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-muted-foreground">
          {index + 1}
        </span>
      </div>

      {/* Month name */}
      <div className="w-10 shrink-0">
        <p className="text-sm font-semibold">{month}</p>
      </div>

      {/* Deposit */}
      <div className="shrink-0 w-32">
        <p className="text-xs text-muted-foreground">Deposit</p>
        <p className="text-sm font-mono font-semibold text-foreground">
          {formatNaira(deposit)}
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex-1 space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatNaira(runningBalance)}</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              isComplete
                ? "bg-green-500"
                : progress > 60
                  ? "bg-yellow-500"
                  : "bg-primary"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Complete indicator */}
      {isComplete && (
        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
      )}
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function StatementAnalyzer({
  recommendedNairaTarget,
  currentBalanceNaira,
  safeMonthlyDeposit,
  lumpSumRisk,
  monthsAvailable,
  currencyCode,
  minAmountForeign,
}: StatementAnalyzerProps) {
  // User can adjust their current balance interactively
  const [adjustedBalance, setAdjustedBalance] = useState(currentBalanceNaira);
  const [adjustedMonths, setAdjustedMonths] = useState(
    Math.max(1, monthsAvailable),
  );

  // Recalculate everything when sliders change
  const analysis = useMemo(() => {
    const deficit = Math.max(0, recommendedNairaTarget - adjustedBalance);
    const monthlyDeposit =
      adjustedMonths > 0 ? Math.ceil(deficit / adjustedMonths) : deficit;
    const riskLevel = getLumpSumRiskLevel(monthlyDeposit, adjustedBalance);

    // Generate month-by-month plan
    const today = new Date();
    const monthPlan = Array.from({ length: adjustedMonths }, (_, i) => {
      const monthDate = new Date(today.getFullYear(), today.getMonth() + i, 1);
      const runningBalance = Math.min(
        adjustedBalance + monthlyDeposit * (i + 1),
        recommendedNairaTarget,
      );
      return {
        month: MONTH_NAMES[monthDate.getMonth()],
        deposit: monthlyDeposit,
        runningBalance,
      };
    });

    return { monthlyDeposit, riskLevel, monthPlan, deficit };
  }, [adjustedBalance, adjustedMonths, recommendedNairaTarget]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Statement Health Analyzer
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed max-w-2xl">
          Adjust your current balance and timeline to find your safe monthly
          deposit — without triggering embassy lump-sum flags.
        </p>
      </div>

      {/* ── TARGET SUMMARY ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Target card */}
        <Card className="relative overflow-hidden border-border/60 bg-background/80 backdrop-blur-sm shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent pointer-events-none" />

          <CardContent className="relative p-5">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  POF Target
                </p>

                <h3 className="text-3xl font-bold tracking-tight mt-2 naira-amount">
                  {formatNaira(recommendedNairaTarget)}
                </h3>
              </div>

              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Required foreign amount
                </span>

                <span className="font-semibold text-foreground">
                  {minAmountForeign.toLocaleString()} {currencyCode}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Safety buffer included
                </span>

                <span className="font-semibold text-green-600">+5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Deposit card */}
        <Card className="relative overflow-hidden border-border/60 bg-background/80 backdrop-blur-sm shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent pointer-events-none" />

          <CardContent className="relative p-5">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Safe Monthly Deposit
                </p>

                <h3 className="text-3xl font-bold tracking-tight mt-2 text-primary naira-amount">
                  {formatNaira(analysis.monthlyDeposit)}
                </h3>
              </div>

              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-muted/40 px-3 py-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Timeline duration
                </span>

                <span className="font-semibold text-foreground">
                  {adjustedMonths} months
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk card */}
        <Card
          className={`relative overflow-hidden border shadow-sm backdrop-blur-sm ${
            analysis.riskLevel === "safe"
              ? "border-green-200/70 bg-green-50/70 dark:bg-green-950/10"
              : analysis.riskLevel === "caution"
                ? "border-yellow-200/70 bg-yellow-50/70 dark:bg-yellow-950/10"
                : "border-red-200/70 bg-red-50/70 dark:bg-red-950/10"
          }`}
        >
          <div
            className={`absolute inset-0 pointer-events-none ${
              analysis.riskLevel === "safe"
                ? "bg-gradient-to-br from-green-500/[0.08] to-transparent"
                : analysis.riskLevel === "caution"
                  ? "bg-gradient-to-br from-yellow-500/[0.08] to-transparent"
                  : "bg-gradient-to-br from-red-500/[0.08] to-transparent"
            }`}
          />

          <CardContent className="relative p-5">
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  Lump Sum Risk
                </p>

                <h3
                  className={`text-3xl font-bold tracking-tight mt-2 ${
                    analysis.riskLevel === "safe"
                      ? "text-green-600"
                      : analysis.riskLevel === "caution"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {analysis.riskLevel === "safe"
                    ? "Low"
                    : analysis.riskLevel === "caution"
                      ? "Moderate"
                      : "High"}
                </h3>
              </div>

              <div
                className={`flex items-center justify-center w-11 h-11 rounded-2xl border ${
                  analysis.riskLevel === "safe"
                    ? "bg-green-500/10 border-green-500/20"
                    : analysis.riskLevel === "caution"
                      ? "bg-yellow-500/10 border-yellow-500/20"
                      : "bg-red-500/10 border-red-500/20"
                }`}
              >
                {analysis.riskLevel === "safe" ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertTriangle
                    className={`w-5 h-5 ${
                      analysis.riskLevel === "caution"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-2 rounded-full overflow-hidden bg-background/70">
                <div
                  className={`h-full rounded-full ${
                    analysis.riskLevel === "safe"
                      ? "w-[28%] bg-green-500"
                      : analysis.riskLevel === "caution"
                        ? "w-[58%] bg-yellow-500"
                        : "w-[90%] bg-red-500"
                  }`}
                />
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {analysis.riskLevel === "safe"
                  ? "Your deposits appear organic and embassy-friendly."
                  : analysis.riskLevel === "caution"
                    ? "Your growth pattern is borderline. Extending the timeline helps."
                    : "Your deposits may resemble account dumping patterns."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lump sum alert */}
      {analysis.riskLevel === "risky" && (
        <Alert className="border-red-200/70 bg-red-50/80 dark:bg-red-950/20 rounded-2xl px-5 py-4 shadow-sm">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <AlertDescription className="text-red-700 dark:text-red-400 leading-7 text-sm">
            <strong>High lump sum risk detected.</strong> Your required monthly
            deposit is more than 60% of your current balance — this will look
            like account dumping to embassy case officers. Either increase your
            starting balance or extend your timeline using the sliders below.
          </AlertDescription>
        </Alert>
      )}

      {analysis.riskLevel === "caution" && (
        <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
          <AlertTriangle className="w-4 h-4 text-yellow-600" />
          <AlertDescription className="text-yellow-700 dark:text-yellow-400 leading-7 text-sm">
            <strong>Moderate risk.</strong> Your deposit ratio is between 30%
            and 60% of your balance. This is borderline — consider adding 1–2
            more months to your timeline to make the growth look more organic.
          </AlertDescription>
        </Alert>
      )}

      {analysis.riskLevel === "safe" && (
        <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <AlertDescription className="text-green-700 dark:text-green-400 leading-7 text-sm">
            <strong>Looking good.</strong> Your monthly deposit is within a safe
            range relative to your current balance. Stick to this plan and your
            account history will look credible to the embassy.
          </AlertDescription>
        </Alert>
      )}

      {/* Interactive sliders */}
      <Card className="border-border/60 bg-background/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Adjust Your Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current balance slider */}
          <div className="space-y-3 rounded-2xl border border-border/60 bg-muted/20 p-4 md:p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <label className="text-sm font-semibold text-foreground">
                  Current Balance
                </label>

                <p className="text-xs text-muted-foreground mt-0.5">
                  Your current available account balance
                </p>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2">
                <span className="text-sm font-bold text-primary naira-amount">
                  {formatNaira(adjustedBalance)}
                </span>
              </div>
            </div>
            <Slider
              min={0}
              max={recommendedNairaTarget}
              step={100000}
              value={[adjustedBalance]}
              onValueChange={(val) => setAdjustedBalance(val[0])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>₦0</span>
              <span>{formatNaira(recommendedNairaTarget)}</span>
            </div>
          </div>

          {/* Months slider */}
          <div className="space-y-3 rounded-2xl border border-border/60 bg-muted/20 p-4 md:p-5">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Months Available</label>
              <span className="text-sm font-mono font-bold text-primary">
                {adjustedMonths} months
              </span>
            </div>
            <Slider
              min={1}
              max={12}
              step={1}
              value={[adjustedMonths]}
              onValueChange={(val) => setAdjustedMonths(val[0])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 month</span>
              <span>12 months</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info note */}
      <div className="flex gap-2 text-xs text-muted-foreground">
        <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
        <p>
          This analyzer calculates the maximum safe deposit per month based on
          your current balance and available time. The 30% threshold is derived
          from common embassy financial manipulation detection patterns. Always
          consult a visa consultant for your specific case.
        </p>
      </div>

      {/* ── MONTH BY MONTH PLAN ── */}
      <Card className="border-border/60 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-border/60 bg-muted/20">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <CardTitle className="text-lg">
                Month-by-Month Deposit Plan
              </CardTitle>

              <p className="text-sm text-muted-foreground mt-1">
                A realistic savings path that keeps your statement healthy.
              </p>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/10 px-3 py-2">
              <p className="text-[11px] uppercase tracking-wide text-primary font-semibold">
                Total Deficit
              </p>

              <p className="text-sm font-bold text-primary naira-amount">
                {formatNaira(analysis.deficit)}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="divide-y divide-border/60">
            {analysis.monthPlan.map((row, i) => (
              <div
                key={i}
                className="px-5 py-4 transition-colors hover:bg-muted/30"
              >
                <MonthRow
                  index={i}
                  month={row.month}
                  deposit={row.deposit}
                  runningBalance={row.runningBalance}
                  target={recommendedNairaTarget}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── EXPORT CTA ── */}
      <div className="rounded-2xl border border-dashed border-border/80 bg-muted/20 px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20">
          <Info className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-lg font-semibold mb-2">
          Exportable Embassy Prep Plans
        </h3>

        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed mb-5">
          Soon you’ll be able to export your full savings timeline, monthly
          deposit strategy, and statement health analysis as a polished PDF
          report.
        </p>

        <Button variant="outline" disabled>
          📄 PDF Export Coming Soon
        </Button>
      </div>
    </div>
  );
}
