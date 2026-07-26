import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

// ─────────────────────────────────────────
// DATE HELPERS
// ─────────────────────────────────────────

export const NOW = new Date();
export const CURRENT_MONTH_INDEX = NOW.getMonth();
export const CURRENT_YEAR = NOW.getFullYear();

export const INTAKE_YEARS = [
  CURRENT_YEAR,
  CURRENT_YEAR + 1,
  CURRENT_YEAR + 2,
  CURRENT_YEAR + 3,
];

export function getMonthsUntilIntake(intakeDate: Date) {
  const now = new Date();
  if (intakeDate <= now) return 0;

  let months =
    (intakeDate.getFullYear() - now.getFullYear()) * 12 +
    (intakeDate.getMonth() - now.getMonth());

  if (intakeDate.getDate() < now.getDate()) months -= 1;

  return Math.max(0, months);
}

// Is a given month (0-indexed) in a given year already in the past?
export function isMonthDisabled(
  monthValue: string,
  yearValue: string,
): boolean {
  if (!yearValue) return false;
  const year = parseInt(yearValue, 10);
  const month = parseInt(monthValue, 10);
  if (year > CURRENT_YEAR) return false;
  if (year < CURRENT_YEAR) return true;
  return month < CURRENT_MONTH_INDEX;
}

// ─────────────────────────────────────────
// STATUS HELPERS
// ─────────────────────────────────────────

export type TimelineStatus = "safe" | "caution" | "risky";

export function getTimelineStatus(
  monthsRemaining: number,
  safeMonths: number,
  cautionMonths: number,
): "safe" | "caution" | "risky" {
  if (monthsRemaining >= safeMonths) return "safe";
  if (monthsRemaining >= cautionMonths) return "caution";
  return "risky";
}

// ─────────────────────────────────────────
// FINANCIAL HELPERS
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// STATUS UI CONFIG
// ─────────────────────────────────────────

export const STATUS_CONFIG: Record<
  TimelineStatus,
  {
    label: string;
    icon: React.ElementType;
    className: string;
    barClass: string;
  }
> = {
  safe: {
    label: "Planning window — More runway",
    icon: CheckCircle,
    className:
      "border-green-200 bg-green-50 text-green-700 dark:bg-green-950/20 dark:border-green-800 dark:text-green-400",
    barClass:
      "bg-green-50 border-green-200 text-green-700 dark:bg-green-950/20 dark:border-green-800 dark:text-green-400",
  },
  caution: {
    label: "Shorter window — Review soon",
    icon: Clock,
    className:
      "border-yellow-200 bg-yellow-50 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-800 dark:text-yellow-400",
    barClass:
      "bg-yellow-50 border-yellow-200 text-yellow-700 dark:bg-yellow-950/20 dark:border-yellow-800 dark:text-yellow-400",
  },
  risky: {
    label: "Very short window — Check feasibility",
    icon: AlertTriangle,
    className:
      "border-red-200 bg-red-50 text-red-700 dark:bg-red-950/20 dark:border-red-800 dark:text-red-400",
    barClass:
      "bg-red-50 border-red-200 text-red-700 dark:bg-red-950/20 dark:border-red-800 dark:text-red-400",
  },
};
