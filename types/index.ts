// ─────────────────────────────────────────
// CORE ENTITY TYPES
// ─────────────────────────────────────────

export type Country = {
  id: string;
  name: string;
  isoCode: string;
  currencyCode: string;
  flagEmoji: string;
  isActive: boolean;
};

export type VisaPurpose = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string | null;
  isActive: boolean;
};

export type FxRate = {
  currencyCode: string;
  cbnRate: number;
  parallelRate: number;
  source: string;
  isIndicative: boolean;
  lastUpdated: Date;
};

// ─────────────────────────────────────────
// POF STRATEGY ENGINE TYPES
// ─────────────────────────────────────────

export type PofRule = {
  id: string;
  countryId: string;
  purposeId: string;
  safeBufferMonths: number;
  cautionBufferMonths: number;
  riskyBufferMonths: number;
  minAmountForeign: number;
  requiresHistory: boolean;
  analysisText: string;
  nigerianSpecific: string;
  statementMonths: number | null;
  documentMaxAgeDays: number | null;
  holdingPeriodDays: number | null;
  amountScope:
    | "TOTAL_ESTIMATE"
    | "LIVING_COSTS_ONLY"
    | "VARIABLE_REQUIREMENT";
  isActive: boolean;
  ruleVersion: string;
  sourceUrl: string | null;
  sourceCheckedAt: Date | null;
  effectiveFrom: Date | null;
  effectiveTo: Date | null;
};

export type StudyIntake = {
  id: string;
  countryId: string;
  intakeMonth: number;
  intakeName: string;
  isMainIntake: boolean;
};

// ─────────────────────────────────────────
// CALCULATION ENGINE TYPES
// ─────────────────────────────────────────

export type PofStatus = "safe" | "caution" | "risky";

export type MonthStatus = {
  month: number; // 0-indexed (0 = Jan, 11 = Dec)
  monthName: string;
  year: number;
  status: PofStatus;
  note: string;
  isIntakeMonth: boolean;
  intakeName?: string;
};

export type PofCalculationResult = {
  safeStartDate: Date;
  cautionStartDate: Date;
  riskyStartDate: Date;
  currentStatus: PofStatus;
  monthlyBreakdown: MonthStatus[];
  targetAmountForeign: number;
  targetAmountNairaOfficial: number;
  targetAmountNairaParallel: number;
  recommendedNairaTarget: number; // parallel + 5% buffer
  safeMonthlyDeposit: number; // from Statement Health Analyzer
  lumpSumRisk: boolean;
};

// ─────────────────────────────────────────
// USER TIMELINE TYPES
// ─────────────────────────────────────────

export type UserTimeline = {
  id: string;
  userId: string;
  countryId: string;
  purposeId: string;
  slug: string;
  intakeDate: Date;
  intakeKey: string;
  currentBalance: number;
  targetAmount: number;
  monthlyDeposit: number;
  safeStartDate: Date;
  cautionStartDate: Date;
  riskyStartDate: Date;
  currentStatus: PofStatus;
  calculatedAt: Date;
  ruleVersion: string | null;
  fxRateUsed: number | null;
  createdAt: Date;
  updatedAt: Date;
  country?: Country;
  purpose?: VisaPurpose;
};

// ─────────────────────────────────────────
// API RESPONSE TYPES
// ─────────────────────────────────────────

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type Serialized<T> = T extends Date
  ? string
  : T extends Array<infer Item>
    ? Array<Serialized<Item>>
    : T extends object
      ? { [Key in keyof T]: Serialized<T[Key]> }
      : T;

export type FxRateDto = Serialized<FxRate>;

export type PofApiResponse = ApiResponse<Serialized<{
  rule: PofRule;
  calculation: PofCalculationResult;
  fxRate: FxRate;
}>>;

// ─────────────────────────────────────────
// FORM / UI TYPES
// ─────────────────────────────────────────

export type CalculatorFormValues = {
  countryCode: string;
  purposeSlug: string;
  intakeDate: Date;
  currentBalance: number;
};
