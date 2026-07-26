"use client";

import { useMemo, type ElementType } from "react";
import { CheckCircle, AlertTriangle, XCircle, Star } from "lucide-react";
import type { MonthStatus, PofStatus } from "@/types";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type PofCalendarProps = {
  monthlyBreakdown: MonthStatus[];
};

// ─────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────

const STATUS_CONFIG: Record<
  PofStatus,
  {
    label: string;
    icon: ElementType;
    barColor: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    badgeClass: string;
  }
> = {
  safe: {
    label: "Earlier",
    icon: CheckCircle,
    barColor: "bg-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-400",
    badgeClass:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
  },
  caution: {
    label: "Tightening",
    icon: AlertTriangle,
    barColor: "bg-yellow-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    textColor: "text-yellow-700 dark:text-yellow-400",
    badgeClass:
      "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800",
  },
  risky: {
    label: "Late",
    icon: XCircle,
    barColor: "bg-red-500",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800",
    textColor: "text-red-700 dark:text-red-400",
    badgeClass:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
  },
};

// ─────────────────────────────────────────
// MONTH CARD
// ─────────────────────────────────────────

function MonthCard({
  month,
  isCurrentMonth,
}: {
  month: MonthStatus;
  isCurrentMonth: boolean;
}) {
  const config = STATUS_CONFIG[month.status];
  const Icon = config.icon;

  const progressWidth =
    month.status === "safe"
      ? "100%"
      : month.status === "caution"
        ? "60%"
        : "25%";

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30
        ${config.bgColor}
        ${config.borderColor}
        ${isCurrentMonth ? "ring-2 ring-primary/70 ring-offset-2" : ""}
      `}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

      {/* current month */}
      {isCurrentMonth && (
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
            Current
          </span>
        </div>
      )}

      {/* top */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            {month.monthName.slice(0, 3)}
          </p>

          <h3 className="text-xl font-bold tracking-tight text-foreground mt-1">
            {month.monthName} {month.year}
          </h3>
        </div>

        <div
          className={`
            flex items-center justify-center
            w-9 h-9 rounded-xl
            border
            ${config.borderColor}
            bg-background/70 backdrop-blur-sm
          `}
        >
          <Icon className={`w-4 h-4 ${config.textColor}`} />
        </div>
      </div>

      {/* progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
            Planning window
          </span>

          <span className={`text-xs font-semibold ${config.textColor}`}>
            {config.label}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full transition-all duration-500 ${config.barColor}`}
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {/* intake */}
      {month.isIntakeMonth && (
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1">
          <Star className="w-3 h-3 text-primary" />

          <span className="text-xs font-semibold text-primary">
            {month.intakeName ?? "Intake Month"}
          </span>
        </div>
      )}

      {/* note */}
      <p className="text-sm leading-6 text-muted-foreground">{month.note}</p>
    </div>
  );
}

// ─────────────────────────────────────────
// LEGEND
// ─────────────────────────────────────────

function CalendarLegend() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      {(["safe", "caution", "risky"] as PofStatus[]).map((status) => {
        const config = STATUS_CONFIG[status];
        const Icon = config.icon;
        return (
          <div key={status} className="flex items-center gap-1.5">
            <Icon className={`w-3.5 h-3.5 ${config.textColor}`} />
            <span className="text-xs text-muted-foreground font-medium">
              {config.label}
            </span>
          </div>
        );
      })}
      <div className="flex items-center gap-1.5">
        <Star className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs text-muted-foreground font-medium">
          Intake month
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────

export default function PofCalendar({ monthlyBreakdown }: PofCalendarProps) {
  const safeCount = useMemo(
    () => monthlyBreakdown.filter((m) => m.status === "safe").length,
    [monthlyBreakdown],
  );
  const cautionCount = useMemo(
    () => monthlyBreakdown.filter((m) => m.status === "caution").length,
    [monthlyBreakdown],
  );
  const riskyCount = useMemo(
    () => monthlyBreakdown.filter((m) => m.status === "risky").length,
    [monthlyBreakdown],
  );

  return (
    <div className="space-y-4">
      {/* Summary bar */}
      <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm p-5 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-green-500/10 px-5 py-4 border border-green-500/20">
              <p className="text-4xl font-bold tracking-tight text-green-600">
                {safeCount}
              </p>
              <p className="text-xs font-medium text-green-700 dark:text-green-400 mt-1">
                Earlier
              </p>
            </div>

            <div className="rounded-xl bg-yellow-500/10 px-5 py-4 border border-yellow-500/20">
              <p className="text-3xl font-bold text-yellow-600">
                {cautionCount}
              </p>
              <p className="text-xs font-medium text-yellow-700 dark:text-yellow-400 mt-1">
                Tightening
              </p>
            </div>

            <div className="rounded-xl bg-red-500/10 px-5 py-4 border border-red-500/20">
              <p className="text-3xl font-bold text-red-600">{riskyCount}</p>
              <p className="text-xs font-medium text-red-700 dark:text-red-400 mt-1">
                Late
              </p>
            </div>
          </div>

          {/* legend */}
          <div className="lg:pl-6 lg:border-l border-border/60">
            <CalendarLegend />
          </div>
        </div>
      </div>
      {/* Calendar grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {monthlyBreakdown.map((month, index) => (
          <MonthCard
            key={`${month.year}-${month.month}`}
            month={month}
            isCurrentMonth={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
