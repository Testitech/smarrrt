import assert from "node:assert/strict";
import test from "node:test";

import {
  calculatePof,
  interpolateAnalysisText,
  timelineFinancialSnapshot,
} from "../lib/pof-engine";
import type { FxRate, PofRule } from "../types";

const rule: PofRule = {
  id: "rule-test",
  countryId: "country-test",
  purposeId: "purpose-test",
  safeBufferMonths: 6,
  cautionBufferMonths: 3,
  riskyBufferMonths: 1,
  minAmountForeign: 1_000,
  requiresHistory: true,
  analysisText: "Test analysis",
  nigerianSpecific: "Test Nigeria guidance",
  statementMonths: 3,
  documentMaxAgeDays: null,
  holdingPeriodDays: 28,
  amountScope: "LIVING_COSTS_ONLY",
  isActive: true,
  ruleVersion: "test-v1",
  sourceUrl: "https://example.com/official-rule",
  sourceCheckedAt: new Date("2026-01-01T00:00:00.000Z"),
  effectiveFrom: null,
  effectiveTo: null,
};

const fxRate: FxRate = {
  currencyCode: "TST",
  cbnRate: 1_400,
  parallelRate: 1_500,
  source: "unit-test",
  isIndicative: true,
  lastUpdated: new Date("2026-01-01T00:00:00.000Z"),
};

const asOfDate = new Date("2026-07-23T12:00:00.000Z");

test("calculatePof applies rule buffers and the five-percent FX buffer", () => {
  const intakeDate = new Date("2028-07-01T12:00:00.000Z");
  const result = calculatePof({
    rule,
    fxRate,
    intakeDate,
    currentBalanceNaira: 2_000_000,
    asOfDate,
  });

  assert.equal(result.targetAmountForeign, 1_000);
  assert.equal(result.targetAmountNairaOfficial, 1_400_000);
  assert.equal(result.targetAmountNairaParallel, 1_500_000);
  assert.equal(result.recommendedNairaTarget, 1_575_000);
  assert.equal(result.safeMonthlyDeposit, 0);
  assert.equal(result.lumpSumRisk, false);
  assert.deepEqual(
    result.safeStartDate,
    new Date(
      Date.UTC(
        intakeDate.getUTCFullYear(),
        intakeDate.getUTCMonth() - rule.safeBufferMonths,
        1,
        12,
      ),
    ),
  );
  assert.equal(result.monthlyBreakdown.length, 12);
  assert.equal(result.monthlyBreakdown[0]?.year, 2026);
  assert.equal(result.monthlyBreakdown[0]?.month, 6);
});

test("calculatePof flags a zero-balance plan and returns a finite monthly target", () => {
  const intakeDate = new Date("2027-07-01T12:00:00.000Z");
  const result = calculatePof({
    rule,
    fxRate,
    intakeDate,
    currentBalanceNaira: 0,
    asOfDate,
  });

  assert.equal(result.lumpSumRisk, true);
  assert.ok(Number.isFinite(result.safeMonthlyDeposit));
  assert.ok(result.safeMonthlyDeposit > 0);
});

test("calculatePof marks only the selected intake month", () => {
  const intakeDate = new Date("2027-01-01T12:00:00.000Z");
  const result = calculatePof({
    rule,
    fxRate,
    intakeDate,
    currentBalanceNaira: 0,
    asOfDate,
  });
  const intakeMonths = result.monthlyBreakdown.filter(
    (month) => month.isIntakeMonth,
  );

  assert.equal(intakeMonths.length, 1);
  assert.equal(intakeMonths[0]?.year, 2027);
  assert.equal(intakeMonths[0]?.month, 0);
});

test("interpolateAnalysisText replaces every supported placeholder", () => {
  const values = {
    parallelRate: 1_500,
    cbnRate: 1_400,
    safeDate: "January 2027",
    cautionDate: "April 2027",
    nairaTarget: "NGN 1,575,000",
    monthlyDeposit: "NGN 131,250",
    currencyCode: "TST",
    minAmountForeign: 1_000,
  };
  const rendered = interpolateAnalysisText(
    "{{parallelRate}}|{{parallelRate}}|{{cbnRate}}|{{safeDate}}|{{cautionDate}}|{{nairaTarget}}|{{monthlyDeposit}}|{{currencyCode}}|{{minAmountForeign}}",
    values,
  );

  assert.equal(
    rendered,
    `${values.parallelRate.toLocaleString("en-NG")}|${values.parallelRate.toLocaleString("en-NG")}|${values.cbnRate.toLocaleString("en-NG")}|January 2027|April 2027|NGN 1,575,000|NGN 131,250|TST|${values.minAmountForeign.toLocaleString()}`,
  );
});

test("timeline snapshot preserves fixed targets", () => {
  const snapshot = timelineFinancialSnapshot("LIVING_COSTS_ONLY", {
    recommendedNairaTarget: 12_500_000,
    safeMonthlyDeposit: 625_000,
  });

  assert.deepEqual(snapshot, {
    targetAmount: 12_500_000,
    monthlyDeposit: 625_000,
  });
});

test("timeline snapshot never fabricates a variable target", () => {
  const snapshot = timelineFinancialSnapshot("VARIABLE_REQUIREMENT", {
    recommendedNairaTarget: 0,
    safeMonthlyDeposit: 0,
  });

  assert.deepEqual(snapshot, {
    targetAmount: null,
    monthlyDeposit: null,
  });
});