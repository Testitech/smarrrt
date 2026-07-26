import { redirect } from "next/navigation";
import { AlertCircle, Clock, Info } from "lucide-react";

import { auth } from "@/lib/auth";
import { formatNaira, getAllFxRates, getRateAge, isRateFresh } from "@/lib/fx";
import FxRail from "@/components/dashboard/fx-rail";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CURRENCY_META: Record<
  string,
  { flag: string; name: string; planningContext: string }
> = {
  GBP: {
    flag: "🇬🇧",
    name: "British Pound",
    planningContext:
      "Used for UK-denominated costs in supported proof-of-funds calculations.",
  },
  USD: {
    flag: "🇺🇸",
    name: "US Dollar",
    planningContext:
      "Used for US-dollar costs; the actual requirement depends on the institution and application route.",
  },
  CAD: {
    flag: "🇨🇦",
    name: "Canadian Dollar",
    planningContext:
      "Used for Canadian-dollar costs in supported study and immigration planning.",
  },
  EUR: {
    flag: "🇪🇺",
    name: "Euro",
    planningContext:
      "Used for euro-denominated costs across supported European destinations.",
  },
  AUD: {
    flag: "🇦🇺",
    name: "Australian Dollar",
    planningContext:
      "Used for Australian-dollar costs in supported proof-of-funds calculations.",
  },
  SEK: {
    flag: "🇸🇪",
    name: "Swedish Krona",
    planningContext:
      "Used for Swedish-krona costs in supported study-permit planning.",
  },
};

const CURRENCY_PRIORITY = ["GBP", "USD", "CAD", "EUR", "AUD", "SEK"];

function formatSource(source: string) {
  return source.replaceAll(/[-_]/g, " ").replace(/\b\w/g, (letter) =>
    letter.toUpperCase(),
  );
}

function SpreadIndicator({
  cbnRate,
  parallelRate,
}: {
  cbnRate: number;
  parallelRate: number;
}) {
  const spread = parallelRate - cbnRate;
  const spreadPercent = cbnRate > 0 ? (spread / cbnRate) * 100 : 0;
  const direction = spread >= 0 ? "above" : "below";

  return (
    <Badge variant="outline" className="whitespace-normal text-left">
      {formatNaira(Math.abs(spread))} ({Math.abs(spreadPercent).toFixed(1)}%){" "}
      {direction} official reference
    </Badge>
  );
}

function RateState({
  fresh,
  source,
}: {
  fresh: boolean;
  source: string;
}) {
  const isFallback = source === "fallback-reference";

  return (
    <Badge
      variant="outline"
      className={
        fresh && !isFallback
          ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400"
          : "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950/30 dark:text-yellow-400"
      }
    >
      {isFallback ? "Fallback reference" : fresh ? "Recently recorded" : "Needs refresh"}
    </Badge>
  );
}

function EmptyState() {
  return (
    <Card className="rounded-2xl border-dashed">
      <CardContent className="space-y-3 px-5 py-14 text-center sm:py-16">
        <AlertCircle
          aria-hidden="true"
          className="mx-auto size-10 text-muted-foreground"
        />
        <div>
          <h2 className="text-lg font-semibold">No FX references available</h2>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            Smarrrt could not retrieve a stored or fallback rate set. Try again
            later before creating a calculation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default async function FxRatesPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  if (!session.user.isActive) {
    redirect("/signin?error=AccountDisabled");
  }

  const rates = await getAllFxRates();
  const sortedRates = [...rates].sort((left, right) => {
    const leftIndex = CURRENCY_PRIORITY.indexOf(left.currencyCode);
    const rightIndex = CURRENCY_PRIORITY.indexOf(right.currencyCode);

    return (
      (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex) -
      (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex)
    );
  });

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold text-primary">Planning data</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          FX reference rates
        </h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Stored CBN and parallel-market references used to estimate Naira
          targets. Check the source and recorded time before relying on a rate.
        </p>
      </header>

      <Card className="rounded-2xl border-primary/20 bg-primary/5">
        <CardContent className="flex gap-3 p-5">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Why show two references?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The official reference provides a comparison point. Smarrrt uses
              the stored parallel-market reference, plus its configured planning
              buffer, when estimating a Naira target. Neither value is a
              transaction quote.
            </p>
          </div>
        </CardContent>
      </Card>

      {rates.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <section aria-labelledby="rate-cards-heading" className="space-y-4">
            <div>
              <h2 id="rate-cards-heading" className="text-lg font-semibold">
                Latest stored references
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Refreshing checks the API again; it does not create a new market
                observation.
              </p>
            </div>
            <FxRail />
          </section>

          <section aria-labelledby="rate-breakdown-heading" className="space-y-4">
            <div>
              <h2 id="rate-breakdown-heading" className="text-lg font-semibold">
                Rate breakdown
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Values are shown per unit of foreign currency.
              </p>
            </div>

            <div className="grid gap-4">
              {sortedRates.map((rate) => {
                const meta = CURRENCY_META[rate.currencyCode] ?? {
                  flag: "🌐",
                  name: rate.currencyCode,
                  planningContext:
                    "Used as a currency reference in supported calculations.",
                };
                const fresh = isRateFresh(rate.lastUpdated);
                const age = getRateAge(rate.lastUpdated);
                const difference = rate.parallelRate - rate.cbnRate;
                const percentageDifference =
                  rate.cbnRate > 0 ? (difference / rate.cbnRate) * 100 : 0;

                return (
                  <Card key={rate.currencyCode} className="rounded-2xl">
                    <CardHeader className="pb-3">
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div className="flex min-w-0 items-center gap-3">
                          <span aria-hidden="true" className="text-3xl">
                            {meta.flag}
                          </span>
                          <div className="min-w-0">
                            <CardTitle className="text-base">
                              {meta.name} ({rate.currencyCode})
                            </CardTitle>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              Source: {formatSource(rate.source)}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <RateState fresh={fresh} source={rate.source} />
                          {rate.isIndicative ? (
                            <Badge variant="secondary">Indicative</Badge>
                          ) : null}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-muted/50 p-4">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">
                            Official reference
                          </p>
                          <p className="mt-1 break-words text-2xl font-bold tabular-nums text-muted-foreground">
                            {formatNaira(rate.cbnRate)}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Per {rate.currencyCode} · comparison value
                          </p>
                        </div>

                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Parallel-market reference
                          </p>
                          <p className="mt-1 break-words text-2xl font-bold tabular-nums">
                            {formatNaira(rate.parallelRate)}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Per {rate.currencyCode} · calculator input
                          </p>
                          <p className="mt-2 text-xs font-medium text-primary">
                            {Math.abs(percentageDifference).toFixed(1)}%{" "}
                            {difference >= 0 ? "above" : "below"} official
                            reference
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <SpreadIndicator
                          cbnRate={rate.cbnRate}
                          parallelRate={rate.parallelRate}
                        />
                      </div>

                      <div className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                        <AlertCircle
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-primary"
                        />
                        <p>{meta.planningContext}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
                        <Clock aria-hidden="true" className="size-3" />
                        <span>
                          Recorded {age} ·{" "}
                          {new Date(rate.lastUpdated).toLocaleString("en-NG", {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        </>
      )}

      <Card className="rounded-2xl border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
        <CardContent className="flex gap-3 p-5">
          <AlertCircle
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-yellow-600"
          />
          <div>
            <h2 className="text-sm font-semibold text-yellow-800 dark:text-yellow-400">
              Rate disclaimer
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-yellow-700 dark:text-yellow-500">
              Rates may be delayed or come from a dated fallback reference. They
              are estimates, not offers to buy or sell currency. Confirm the
              applicable rate with your bank or authorised provider before
              transacting. Smarrrt does not facilitate currency exchange.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
