"use client";

import { useCallback, useEffect, useState } from "react";
import { TrendingUp, TrendingDown, RefreshCw, AlertCircle } from "lucide-react";
import type { FxRateDto } from "@/types";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type FxRateWithMeta = FxRateDto & {
  isFresh: boolean;
  age: string;
};

type ApiResponse = {
  success: boolean;
  data?: FxRateWithMeta[];
  error?: string;
};

// ─────────────────────────────────────────
// CURRENCY CONFIG
// ─────────────────────────────────────────

const CURRENCY_CONFIG: Record<string, { flag: string; name: string }> = {
  GBP: { flag: "🇬🇧", name: "British Pound" },
  USD: { flag: "🇺🇸", name: "US Dollar" },
  CAD: { flag: "🇨🇦", name: "Canadian Dollar" },
  EUR: { flag: "🇪🇺", name: "Euro" },
  AUD: { flag: "🇦🇺", name: "Australian Dollar" },
  SEK: { flag: "🇸🇪", name: "Swedish Krona" },
};

function formatSource(source: string) {
  return source.replaceAll(/[-_]/g, " ").replace(/\b\w/g, (letter) =>
    letter.toUpperCase(),
  );
}

// ─────────────────────────────────────────
// SINGLE RATE CARD
// ─────────────────────────────────────────

function RateCard({ rate }: { rate: FxRateWithMeta }) {
  const config = CURRENCY_CONFIG[rate.currencyCode];

  const spread = rate.parallelRate - rate.cbnRate;
  const spreadPercent =
    rate.cbnRate > 0 ? Math.abs((spread / rate.cbnRate) * 100).toFixed(1) : "0.0";

  const isNegativeSpread = spread < 0;
  const isFallback = rate.source === "fallback-reference";
  const freshnessLabel = isFallback
    ? "Fallback"
    : rate.isFresh
      ? "Recent"
      : "Needs refresh";

  return (
    <div
      className="
        snap-start shrink-0 w-56 rounded-2xl border border-border/60 bg-background/80 backdrop-blur-sm p-4 space-y-4 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted/60 text-xl">
            {config?.flag ?? "🌐"}
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-foreground">
              {rate.currencyCode}/NGN
            </p>

            <p className="text-xs text-muted-foreground">
              {config?.name ?? rate.currencyCode}
            </p>
          </div>
        </div>

        <div className="pt-1">
          <span
            aria-label={freshnessLabel}
            className={`flex h-2.5 w-2.5 rounded-full ${
              rate.isFresh && !isFallback ? "bg-green-500" : "bg-yellow-500"
            }`}
          />
        </div>
      </div>

      {/* Main rate */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-2">
          Parallel Reference
        </p>

        <p className="text-2xl font-bold tracking-tight naira-amount text-foreground">
          ₦{rate.parallelRate.toLocaleString("en-NG")}
        </p>
      </div>

      {/* Secondary */}
      <div className="rounded-xl bg-muted/40 px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
          Official Reference
        </p>

        <p className="text-sm font-semibold naira-amount text-muted-foreground">
          ₦{rate.cbnRate.toLocaleString("en-NG")}
        </p>
      </div>

      {/* Spread */}
      <div className="flex items-center justify-between pt-1">
        <div
          className={`
            inline-flex items-center gap-1.5
            rounded-full px-2.5 py-1
            text-xs font-semibold
            ${
              isNegativeSpread
                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                : "bg-red-500/10 text-red-600 dark:text-red-400"
            }
          `}
        >
          {isNegativeSpread ? (
            <TrendingDown className="w-3 h-3" />
          ) : (
            <TrendingUp className="w-3 h-3" />
          )}
          ₦{Math.abs(spread).toLocaleString("en-NG")}
        </div>

        <p className="text-xs text-muted-foreground">{spreadPercent}%</p>
      </div>

      {/* Footer meta */}
      <div className="space-y-1 border-t border-border/60 pt-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[11px] text-muted-foreground">
            Recorded {rate.age}
          </p>
          <span className="text-[11px] text-muted-foreground">
            {freshnessLabel}
          </span>
        </div>
        <p className="truncate text-[11px] text-muted-foreground">
          Source: {formatSource(rate.source)}
        </p>
        {rate.isIndicative ? (
          <p className="text-[11px] text-muted-foreground">
            Indicative · not a quote
          </p>
        ) : null}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// SKELETON LOADER
// ─────────────────────────────────────────

function RateCardSkeleton() {
  return (
    <div className="shrink-0 w-52 bg-card border border-border rounded-xl p-4 space-y-3 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-muted rounded-full" />
        <div className="space-y-1">
          <div className="w-16 h-3 bg-muted rounded" />
          <div className="w-24 h-2 bg-muted rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-14 bg-muted rounded-lg" />
        <div className="h-10 bg-muted rounded-lg" />
      </div>
      <div className="h-3 bg-muted rounded" />
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────

export default function FxRail() {
  const [rates, setRates] = useState<FxRateWithMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchRates = useCallback(async () => {
    try {
      setRefreshing(true);
      setError(null);

      const res = await fetch("/api/fx-rates", { cache: "no-store" });

      const json: ApiResponse = await res.json();

      if (!res.ok || !json.success || !json.data) {
        throw new Error(json.error ?? "Failed to fetch FX references");
      }

      setRates(json.data);
      setLastChecked(new Date());
    } catch (err) {
      setError(
        "Could not refresh the FX references. Any cards below are from the last successful check.",
      );
      console.error("[FxRail] Fetch failed:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void fetchRates();

    const interval = setInterval(
      () => {
        void fetchRates();
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, [fetchRates]);

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Stored FX References
          </h2>

          {lastChecked && (
            <p className="text-xs text-muted-foreground mt-1">
              API checked at{" "}
              <span className="font-medium text-foreground">
                {lastChecked.toLocaleTimeString("en-NG")}
              </span>
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => void fetchRates()}
          disabled={refreshing}
          className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-border/60 bg-background px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RefreshCw
            className={`w-3 h-3 ${refreshing ? "animate-spin" : ""}`}
          />

          {refreshing ? "Checking..." : "Check again"}
        </button>
      </div>

      {/* Error notice */}
      {error && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-2 text-xs text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg px-3 py-2"
        >
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </div>
      )}

      {/* Scrollable rate cards */}
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <RateCardSkeleton key={i} />
            ))
          : rates.map((rate) => (
              <RateCard key={rate.currencyCode} rate={rate} />
            ))}
      </div>

      {!loading && rates.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border px-4 py-6 text-center text-sm text-muted-foreground">
          No FX references were returned. Try checking again later.
        </div>
      ) : null}

      {/* Disclaimer */}
      <div className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          These references may be delayed or come from fallback data. They are
          estimates, not transaction quotes. Confirm the applicable rate with
          your bank or authorised provider before transacting.
        </p>
      </div>
    </div>
  );
}
