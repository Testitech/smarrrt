import type {
  PofRule,
  FxRate,
  PofStatus,
  MonthStatus,
  PofCalculationResult,
} from "@/types";

// ─────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FX_BUFFER_PERCENT = 0.05; // Product planning buffer, not an official rule.
const CONTRIBUTION_CONCENTRATION_THRESHOLD = 0.4;

// ─────────────────────────────────────────
// CORE DATE CALCULATION
// ─────────────────────────────────────────

function subtractMonths(date: Date, months: number): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() - months, 1, 12),
  );
}

function monthValue(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1);
}

function wholeMonthsBetween(start: Date, end: Date): number {
  if (end <= start) return 0;

  let months =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    end.getUTCMonth() -
    start.getUTCMonth();

  if (end.getUTCDate() < start.getUTCDate()) months -= 1;

  return Math.max(0, months);
}

// ─────────────────────────────────────────
// STATUS RESOLVER
// ─────────────────────────────────────────

function resolveMonthStatus(
  monthDate: Date,
  safeStartDate: Date,
  cautionStartDate: Date,
  riskyStartDate: Date,
  intakeDate: Date,
): PofStatus {
  const m = monthValue(monthDate);
  const safe = monthValue(safeStartDate);
  const caution = monthValue(cautionStartDate);
  const risky = monthValue(riskyStartDate);
  const intake = monthValue(intakeDate);

  if (m >= intake) return "risky"; // past intake date
  if (m <= safe) return "safe"; // before or at safe start
  if (m <= caution) return "caution"; // between safe and caution
  if (m <= risky) return "risky"; // between caution and intake
  return "risky";
}

// ─────────────────────────────────────────
// MONTH NOTE GENERATOR
// ─────────────────────────────────────────

function generateMonthNote(
  status: PofStatus,
  monthName: string,
  rule: PofRule,
  isTargetIntakeMonth: boolean,
): string {
  if (isTargetIntakeMonth) {
    return `${monthName} is your selected intake month. Review the official funding and evidence requirements well before this point.`;
  }

  switch (status) {
    case "safe":
      return `${monthName} is within the earlier planning window. Starting now leaves more time to build the target and prepare any required evidence.`;
    case "caution":
      return rule.requiresHistory
        ? `${monthName} leaves less time to assemble the requested funding evidence. Keep a clear record of the source and availability of funds.`
        : `${monthName} leaves less planning buffer. Confirm the required amount and evidence with the official source.`;
    case "risky":
      return `${monthName} leaves limited preparation time. Check the official evidence requirements and consider whether a later intake is more realistic.`;
  }
}

// ─────────────────────────────────────────
// NAIRA CALCULATIONS
// ─────────────────────────────────────────

function calculateNairaTargets(
  amountForeign: number,
  fxRate: FxRate,
): {
  officialNairaTarget: number;
  parallelNairaTarget: number;
  recommendedNairaTarget: number;
} {
  const officialNairaTarget = Math.ceil(amountForeign * fxRate.cbnRate);
  const parallelNairaTarget = Math.ceil(amountForeign * fxRate.parallelRate);
  const recommendedNairaTarget = Math.ceil(
    parallelNairaTarget * (1 + FX_BUFFER_PERCENT),
  );

  return {
    officialNairaTarget,
    parallelNairaTarget,
    recommendedNairaTarget,
  };
}

// ─────────────────────────────────────────
// STATEMENT HEALTH ANALYZER
// ─────────────────────────────────────────

function analyzeStatementHealth(
  currentBalanceNaira: number,
  recommendedNairaTarget: number,
  monthsAvailable: number,
): {
  safeMonthlyDeposit: number;
  lumpSumRisk: boolean;
} {
  const deficit = Math.max(0, recommendedNairaTarget - currentBalanceNaira);
  const safeMonthlyDeposit =
    monthsAvailable > 0 ? Math.ceil(deficit / monthsAvailable) : deficit;

  // This ratio drives a clearly labelled product planning heuristic. It does
  // not predict how an authority will assess the account or application.
  const lumpSumRisk =
    currentBalanceNaira > 0
      ? safeMonthlyDeposit / currentBalanceNaira >
        CONTRIBUTION_CONCENTRATION_THRESHOLD
      : true;

  return { safeMonthlyDeposit, lumpSumRisk };
}

// ─────────────────────────────────────────
// 12-MONTH CALENDAR BREAKDOWN
// ─────────────────────────────────────────

function generateMonthlyBreakdown(
  intakeDate: Date,
  safeStartDate: Date,
  cautionStartDate: Date,
  riskyStartDate: Date,
  rule: PofRule,
  asOfDate: Date,
): MonthStatus[] {
  const breakdown: MonthStatus[] = [];

  // Generate 12 months starting from the calculation's as-of month.
  for (let i = 0; i < 12; i++) {
    const monthDate = new Date(
      Date.UTC(asOfDate.getUTCFullYear(), asOfDate.getUTCMonth() + i, 1, 12),
    );
    const isTargetIntakeMonth =
      monthValue(monthDate) === monthValue(intakeDate);

    const status = resolveMonthStatus(
      monthDate,
      safeStartDate,
      cautionStartDate,
      riskyStartDate,
      intakeDate,
    );

    const monthName = MONTH_NAMES[monthDate.getUTCMonth()];

    breakdown.push({
      month: monthDate.getUTCMonth(), // 0-indexed for frontend
      monthName,
      year: monthDate.getUTCFullYear(),
      status,
      note: generateMonthNote(
        status,
        monthName,
        rule,
        isTargetIntakeMonth,
      ),
      isIntakeMonth: isTargetIntakeMonth,
    });
  }

  return breakdown;
}

// ─────────────────────────────────────────
export function timelineFinancialSnapshot(
  amountScope: PofRule["amountScope"],
  calculation: Pick<PofCalculationResult, "recommendedNairaTarget" | "safeMonthlyDeposit">,
): { targetAmount: number | null; monthlyDeposit: number | null } {
  if (amountScope === "VARIABLE_REQUIREMENT") {
    return { targetAmount: null, monthlyDeposit: null };
  }

  return {
    targetAmount: calculation.recommendedNairaTarget,
    monthlyDeposit: calculation.safeMonthlyDeposit,
  };
}
// MAIN ENGINE FUNCTION
// ─────────────────────────────────────────

export function calculatePof(params: {
  rule: PofRule;
  fxRate: FxRate;
  intakeDate: Date;
  currentBalanceNaira: number;
  asOfDate?: Date;
}): PofCalculationResult {
  const {
    rule,
    fxRate,
    intakeDate,
    currentBalanceNaira,
    asOfDate = new Date(),
  } = params;

  // Step 1 — Calculate buffer dates backward from intake
  const safeStartDate = subtractMonths(intakeDate, rule.safeBufferMonths);
  const cautionStartDate = subtractMonths(intakeDate, rule.cautionBufferMonths);
  const riskyStartDate = subtractMonths(intakeDate, rule.riskyBufferMonths);

  // Step 2 — Resolve current month status
  const currentStatus = resolveMonthStatus(
    asOfDate,
    safeStartDate,
    cautionStartDate,
    riskyStartDate,
    intakeDate,
  );

  // Step 3 — Naira calculations
  const { officialNairaTarget, parallelNairaTarget, recommendedNairaTarget } =
    calculateNairaTargets(rule.minAmountForeign, fxRate);

  // Step 4 — Months available from today to intake
  const monthsAvailable = wholeMonthsBetween(asOfDate, intakeDate);

  // Step 5 — Statement health analysis
  const { safeMonthlyDeposit, lumpSumRisk } = analyzeStatementHealth(
    currentBalanceNaira,
    recommendedNairaTarget,
    monthsAvailable,
  );

  // Step 6 — 12-month calendar breakdown
  const monthlyBreakdown = generateMonthlyBreakdown(
    intakeDate,
    safeStartDate,
    cautionStartDate,
    riskyStartDate,
    rule,
    asOfDate,
  );

  return {
    safeStartDate,
    cautionStartDate,
    riskyStartDate,
    currentStatus,
    monthlyBreakdown,
    targetAmountForeign: rule.minAmountForeign,
    targetAmountNairaOfficial: officialNairaTarget,
    targetAmountNairaParallel: parallelNairaTarget,
    recommendedNairaTarget,
    safeMonthlyDeposit,
    lumpSumRisk,
  };
}

// ─────────────────────────────────────────
// TEMPLATE VARIABLE REPLACER
// ─────────────────────────────────────────

// Replaces {{variables}} in analysisText and nigeriaSpecific
// from the PofRule with real calculated values
export function interpolateAnalysisText(
  template: string,
  values: {
    parallelRate: number;
    cbnRate: number;
    safeDate: string;
    cautionDate: string;
    nairaTarget: string;
    monthlyDeposit: string;
    currencyCode: string;
    minAmountForeign: number;
  },
): string {
  return template
    .replace(/{{parallelRate}}/g, values.parallelRate.toLocaleString("en-NG"))
    .replace(/{{cbnRate}}/g, values.cbnRate.toLocaleString("en-NG"))
    .replace(/{{safeDate}}/g, values.safeDate)
    .replace(/{{cautionDate}}/g, values.cautionDate)
    .replace(/{{nairaTarget}}/g, values.nairaTarget)
    .replace(/{{monthlyDeposit}}/g, values.monthlyDeposit)
    .replace(/{{currencyCode}}/g, values.currencyCode)
    .replace(/{{minAmountForeign}}/g, values.minAmountForeign.toLocaleString());
}
