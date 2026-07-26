import { prisma } from "@/lib/prisma";
import type { FxRate } from "@/types";
import { unstable_cache } from "next/cache";

export {
  formatForeign,
  formatMonth as formatDate,
  formatNaira,
  formatRate,
} from "@/lib/format";

// ─────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────

// Fallback rates if DB fetch fails or cron hasn't run yet
// TODO: Update these periodically as a safety net
const FALLBACK_RATES: Record<
  string,
  { cbnRate: number; parallelRate: number }
> = {
  GBP: { cbnRate: 1980, parallelRate: 2050 },
  USD: { cbnRate: 1580, parallelRate: 1650 },
  CAD: { cbnRate: 1160, parallelRate: 1220 },
  EUR: { cbnRate: 1720, parallelRate: 1790 },
  AUD: { cbnRate: 1020, parallelRate: 1075 },
  SEK: { cbnRate: 152, parallelRate: 160 },
};
const FALLBACK_AS_OF = new Date("2026-05-11T00:00:00.000Z");

// ─────────────────────────────────────────
// FETCH RATE FROM DATABASE
// ─────────────────────────────────────────

export async function getFxRate(currencyCode: string): Promise<FxRate> {
  try {
    const rate = await prisma.fxRate.findUnique({
      where: { currencyCode },
    });

    if (rate) return rate;

    // No rate in DB yet — use fallback and log warning
    console.warn(
      `[fx] No rate found for ${currencyCode} in DB. Using fallback.`,
    );
    return buildFallbackRate(currencyCode);
  } catch (error) {
    console.error(`[fx] DB fetch failed for ${currencyCode}:`, error);
    return buildFallbackRate(currencyCode);
  }
}

// ─────────────────────────────────────────
// FETCH CACHED RATES
// ─────────────────────────────────────────

const getCachedFxRates = unstable_cache(
  async (): Promise<FxRate[]> => {
    try {
      const rates = await prisma.fxRate.findMany();

      if (rates.length > 0) {
        return rates;
      }

      console.warn("[fx] No rates in DB. Using all fallbacks.");

      return Object.keys(FALLBACK_RATES).map(buildFallbackRate);
    } catch (error) {
      console.error("[fx] Failed to fetch all rates:", error);

      return Object.keys(FALLBACK_RATES).map(buildFallbackRate);
    }
  },
  ["all-fx-rates"],
  {
    revalidate: 60 * 30, // 30 minutes
  },
);

export async function getAllFxRates(): Promise<FxRate[]> {
  return getCachedFxRates();
}

// ─────────────────────────────────────────
// UPSERT RATE (used by cron job)
// ─────────────────────────────────────────

export async function upsertFxRate(
  currencyCode: string,
  cbnRate: number,
  parallelRate: number,
  options: { source: string; isIndicative: boolean },
): Promise<FxRate> {
  const normalizedCode = currencyCode.trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(normalizedCode)) {
    throw new Error("currencyCode must be a three-letter ISO currency code.");
  }

  if (
    !Number.isFinite(cbnRate) ||
    cbnRate <= 0 ||
    !Number.isFinite(parallelRate) ||
    parallelRate <= 0
  ) {
    throw new Error("FX rates must be finite positive numbers.");
  }

  const source = options.source.trim();
  if (!source) throw new Error("An FX source label is required.");

  return prisma.fxRate.upsert({
    where: { currencyCode: normalizedCode },
    update: {
      cbnRate,
      parallelRate,
      source,
      isIndicative: options.isIndicative,
    },
    create: {
      currencyCode: normalizedCode,
      cbnRate,
      parallelRate,
      source,
      isIndicative: options.isIndicative,
    },
  });
}

// ─────────────────────────────────────────
// FORMATTING UTILITIES
// ─────────────────────────────────────────

// ─────────────────────────────────────────
// RATE AGE CHECKER
// ─────────────────────────────────────────

// Returns true if rate was updated within the last 3 hours
export function isRateFresh(lastUpdated: Date): boolean {
  const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);
  return lastUpdated <= new Date() && lastUpdated > threeHoursAgo;
}

export function getRateAge(lastUpdated: Date): string {
  const diffMs = Math.max(0, Date.now() - lastUpdated.getTime());
  const diffMins = Math.floor(diffMs / 60000);

  if (diffMins < 60) return `${diffMins} minutes ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} hours ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} days ago`;
}

// ─────────────────────────────────────────
// PRIVATE HELPERS
// ─────────────────────────────────────────

function buildFallbackRate(currencyCode: string): FxRate {
  const fallback = FALLBACK_RATES[currencyCode];
  if (!fallback) {
    throw new Error(`No stored or reference FX rate exists for ${currencyCode}.`);
  }

  return {
    currencyCode,
    cbnRate: fallback.cbnRate,
    parallelRate: fallback.parallelRate,
    source: "fallback-reference",
    isIndicative: true,
    lastUpdated: FALLBACK_AS_OF,
  };
}
