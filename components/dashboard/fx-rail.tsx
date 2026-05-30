"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, RefreshCw, AlertCircle } from "lucide-react";
import type { FxRate } from "@/types";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type FxRateWithMeta = FxRate & {
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

// ─────────────────────────────────────────
// SINGLE RATE CARD
// ─────────────────────────────────────────

function RateCard({ rate }: { rate: FxRateWithMeta }) {
  const config = CURRENCY_CONFIG[rate.currencyCode];

  const spread = rate.parallelRate - rate.cbnRate;
  const spreadPercent = ((spread / rate.cbnRate) * 100).toFixed(1);

  const isNegativeSpread = spread < 0;

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
          {rate.isFresh ? (
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          ) : (
            <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500" />
          )}
        </div>
      </div>

      {/* Main rate */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-2">
          Parallel Market
        </p>

        <p className="text-2xl font-bold tracking-tight naira-amount text-foreground">
          ₦{rate.parallelRate.toLocaleString("en-NG")}
        </p>
      </div>

      {/* Secondary */}
      <div className="rounded-xl bg-muted/40 px-4 py-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-1">
          CBN Official
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
      <div className="flex items-center justify-between border-t border-border/60 pt-3">
        <p className="text-[11px] text-muted-foreground">Updated {rate.age}</p>

        <div className="flex items-center gap-1">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              rate.isFresh ? "bg-green-500" : "bg-yellow-500"
            }`}
          />
          <span className="text-[11px] text-muted-foreground">
            {rate.isFresh ? "Live" : "Cached"}
          </span>
        </div>
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
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchRates() {
    try {
      setRefreshing(true);
      setError(null);

      const res = await fetch("/api/fx-rates", {
        next: { revalidate: 300 },
      });

      const json: ApiResponse = await res.json();

      if (!json.success || !json.data) {
        throw new Error(json.error ?? "Failed to fetch rates");
      }

      setRates(json.data);
      setLastFetched(new Date());
    } catch (err) {
      setError("Could not load live rates. Showing cached data.");
      console.error("[FxRail] Fetch failed:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    const loadRates = async () => {
      await fetchRates();
    };

    loadRates();

    const interval = setInterval(
      () => {
        loadRates();
      },
      5 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Live Parallel Market Rates
          </h2>

          {lastFetched && (
            <p className="text-xs text-muted-foreground mt-1">
              Last updated at{" "}
              <span className="font-medium text-foreground">
                {lastFetched.toLocaleTimeString("en-NG")}
              </span>
            </p>
          )}
        </div>
        <button
          onClick={fetchRates}
          disabled={refreshing}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground disabled:opacity-50 transition-colors"
        >
          <RefreshCw
            className={`w-3 h-3 ${refreshing ? "animate-spin" : ""}`}
          />

          {refreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {/* Error notice */}
      {error && (
        <div className="flex items-center gap-2 text-xs text-yellow-600 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg px-3 py-2">
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

      {/* Disclaimer */}
      <div className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          ⚠️ Parallel market rates are indicative and sourced from market data.
          Always confirm rates with your bureau de change before transacting.
        </p>
      </div>
    </div>
  );
}
