"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatNaira } from "@/lib/format";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  Calculator,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  CalendarClock,
} from "lucide-react";

// ── Data & helpers from dedicated modules ──
import {
  COUNTRIES,
  PURPOSES,
  MONTH_NAMES,
  FULL_MONTH_NAMES,
  INTAKE_MONTHS,
} from "@/lib/calculator-data";

import {
  CURRENT_MONTH_INDEX,
  CURRENT_YEAR,
  INTAKE_YEARS,
  getMonthsUntilIntake,
  isMonthDisabled,
  getTimelineStatus,
  STATUS_CONFIG,
} from "@/lib/calculator-helpers";

type Preview = {
  rule: {
    minAmountForeign: number;
    safeBufferMonths: number;
    cautionBufferMonths: number;
    riskyBufferMonths: number;
    requiresHistory: boolean;
    analysisText: string;
    amountScope: "TOTAL_ESTIMATE" | "LIVING_COSTS_ONLY" | "VARIABLE_REQUIREMENT";
    sourceUrl: string | null;
  };
  calculation: {
    currentStatus: "safe" | "caution" | "risky";
    recommendedNairaTarget: number;
  };
  fxRate: {
    parallelRate: number;
    lastUpdated: string;
  };
};

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default function CalculatorPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [intakeMonth, setIntakeMonth] = useState("");
  const [intakeYear, setIntakeYear] = useState("");
  const [showTeaser, setShowTeaser] = useState(false);
  const [preview, setPreview] = useState<Preview | null>(null);
  const [generateState, setGenerateState] = useState<"idle" | "loading" | "error">("idle");
  const [generateError, setGenerateError] = useState("");

  const country = COUNTRIES.find((c) => c.id === selectedCountry);
  const teaser = preview
    ? {
        minAmount: preview.rule.minAmountForeign,
        safeMonthsBeforeIntake: preview.rule.safeBufferMonths,
        cautionMonthsBeforeIntake: preview.rule.cautionBufferMonths,
        riskyMonthsBeforeIntake: preview.rule.riskyBufferMonths,
        requiresHistory: preview.rule.requiresHistory,
        teaserNote: preview.rule.analysisText,
      }
    : null;
  const fx = preview?.fxRate ?? null;

  // Intake date derived from the two pickers
  const intakeDate = useMemo(() => {
    if (!intakeMonth || !intakeYear) return null;
    return new Date(parseInt(intakeYear, 10), parseInt(intakeMonth, 10), 1);
  }, [intakeMonth, intakeYear]);

  const monthsRemaining = intakeDate ? getMonthsUntilIntake(intakeDate) : null;

  const timelineStatus = preview?.calculation.currentStatus ?? null;

  const nairaTarget = preview?.calculation.recommendedNairaTarget ?? 0;

  const canGenerate =
    !!selectedCountry && !!selectedPurpose && !!intakeMonth && !!intakeYear;

  function intakeDateValue() {
    if (!intakeMonth || !intakeYear) return null;
    return `${intakeYear}-${String(Number(intakeMonth) + 1).padStart(2, "0")}-01`;
  }

  async function handleGenerate() {
    if (!canGenerate) return;
    const date = intakeDateValue();
    if (!date) return;

    setGenerateState("loading");
    setGenerateError("");
    setShowTeaser(false);

    try {
      const response = await fetch("/api/calculate-pof", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryCode: selectedCountry,
          purposeSlug: selectedPurpose,
          intakeDate: date,
          currentBalance: 0,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Unable to calculate this plan.");
      }

      setPreview(result.data as Preview);
      setShowTeaser(true);
      setGenerateState("idle");
    } catch (error) {
      setPreview(null);
      setGenerateState("error");
      setGenerateError(
        error instanceof Error ? error.message : "Unable to calculate this plan.",
      );
    }
  }

  function handleMonthChange(val: string) {
    setIntakeMonth(val);
    setPreview(null);
    setGenerateError("");
    setShowTeaser(false);
  }

  function handleYearChange(val: string) {
    setIntakeYear(val);
    setPreview(null);
    setGenerateError("");
    // If the previously selected month is now in the past for this year, clear it
    if (intakeMonth && isMonthDisabled(intakeMonth, val)) {
      setIntakeMonth("");
    }
    setShowTeaser(false);
  }

  type SaveState = "idle" | "saving" | "success" | "error";

  const [currentBalance, setCurrentBalance] = useState("");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [saveError, setSaveError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const redirectTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsAuthenticated(
      document
        .querySelector("[data-authenticated]")
        ?.getAttribute("data-authenticated") === "true",
    );

    return () => {
      if (redirectTimeout.current) {
        clearTimeout(redirectTimeout.current);
      }
    };
  }, []);

  async function handleSave() {
    if (!selectedCountry || !selectedPurpose || !intakeDate) return;
    const date = intakeDateValue();
    if (!date) return;

    const balance = Number(currentBalance.trim());

    if (!Number.isFinite(balance) || balance < 0) {
      setSaveError("Please enter a valid account balance.");
      setSaveState("error");
      return;
    }

    setSaveError("");
    setSaveState("saving");

    try {
      const res = await fetch("/api/save-timeline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          countryCode: selectedCountry,
          purposeSlug: selectedPurpose,
          intakeDate: date,
          currentBalance: balance,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Unable to save strategy.");
      }

      setSaveState("success");

      redirectTimeout.current = setTimeout(() => {
        router.push(`/dashboard/${json.data.slug}`);
      }, 1500);
    } catch (err) {
      console.error(err);

      setSaveState("error");

      setSaveError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                Sm
              </span>
            </div>
            <span className="font-bold text-lg">
              Sma<span className="text-primary">rrr</span>t
            </span>
          </div>
          <Button asChild variant="outline" size="sm">
            <a href="/signin">Sign in to save</a>
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Hero */}
        <div className="text-center space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Free POF Calculator
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">
            Calculate Your Visa Proof of Funds
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your destination, visa purpose, and intake date to see your
            indicative Naira target and planning timeline using the latest
            stored rate and a source-checked base requirement.
          </p>
        </div>

        {/* Selectors */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Calculator className="w-4 h-4 text-primary" />
              Select Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Country */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">
                  Destination Country
                </label>
                <Select
                  value={selectedCountry}
                  onValueChange={(val) => {
                    setSelectedCountry(val);
                    setPreview(null);
                    setGenerateError("");
                    setShowTeaser(false);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country..." />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.flag} {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Purpose */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Visa Purpose</label>
                <Select
                  value={selectedPurpose}
                  onValueChange={(val) => {
                    setSelectedPurpose(val);
                    setPreview(null);
                    setGenerateError("");
                    setShowTeaser(false);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select purpose..." />
                  </SelectTrigger>
                  <SelectContent>
                    {PURPOSES.map((p) => (
                      <SelectItem key={p.id} value={p.id}>
                        {p.icon} {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Intake Month */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Intake Month</label>
                <Select
                  value={intakeMonth}
                  onValueChange={handleMonthChange}
                  disabled={!intakeYear}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        intakeYear ? "Select month..." : "Select year first"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {INTAKE_MONTHS.map((m) => {
                      const disabled = isMonthDisabled(m.value, intakeYear);
                      return (
                        <SelectItem
                          key={m.value}
                          value={m.value}
                          disabled={disabled}
                        >
                          {m.label}
                          {disabled ? " — past" : ""}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Intake Year */}
              <div className="space-y-2">
                <label className="text-sm font-semibold">Intake Year</label>
                <Select value={intakeYear} onValueChange={handleYearChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year..." />
                  </SelectTrigger>
                  <SelectContent>
                    {INTAKE_YEARS.map((y) => (
                      <SelectItem key={y} value={String(y)}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!canGenerate || generateState === "loading"}
              className="w-full"
              size="lg"
            >
              {generateState === "loading" ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Checking current rule...
                </>
              ) : (
                <>
                  Generate My POF Timeline
                  <ArrowRight className="ml-2 size-4" />
                </>
              )}
            </Button>
            {generateError ? (
              <p role="alert" className="text-sm text-destructive">
                {generateError}
              </p>
            ) : null}
          </CardContent>
        </Card>

        {/* Teaser Results */}
        {showTeaser &&
          preview &&
          teaser &&
          country &&
          fx &&
          intakeDate &&
          monthsRemaining !== null &&
          timelineStatus && (
            <div className="space-y-6">
              {/* Months remaining — hero card */}
              <Card
                className={`border ${STATUS_CONFIG[timelineStatus].className}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-background/60 border border-current/20 flex items-center justify-center shrink-0">
                        <CalendarClock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide font-semibold opacity-70">
                          Time until your intake
                        </p>
                        <p className="text-2xl font-bold">
                          {monthsRemaining <= 0
                            ? "This is your intake month"
                            : monthsRemaining === 1
                              ? "1 month remaining"
                              : `${monthsRemaining} months remaining`}
                        </p>
                        <p className="text-sm opacity-70 mt-0.5">
                          Target intake:{" "}
                          <span className="font-semibold">
                            {FULL_MONTH_NAMES[intakeDate.getMonth()]}{" "}
                            {intakeDate.getFullYear()}
                          </span>
                        </p>
                      </div>
                    </div>
                    <Badge className={STATUS_CONFIG[timelineStatus].className}>
                      {(() => {
                        const Icon = STATUS_CONFIG[timelineStatus].icon;
                        return <Icon className="w-3.5 h-3.5 mr-1" />;
                      })()}
                      {STATUS_CONFIG[timelineStatus].label}
                    </Badge>
                  </div>

                  {/* Contextual note based on status */}
                  <p className="text-sm mt-4 leading-relaxed opacity-80">
                    {timelineStatus === "safe" &&
                      `Your selected date leaves a wider planning window. Smarrrt's preparation heuristic begins ${teaser.safeMonthsBeforeIntake} months before intake, giving you more time to confirm the official requirements and organise your evidence.`}
                    {timelineStatus === "caution" &&
                      `Your selected date leaves a shorter planning window: ${monthsRemaining} month${monthsRemaining === 1 ? "" : "s"}. Confirm the official requirements and deadlines now, then decide whether the remaining preparation time works for you.`}
                    {timelineStatus === "risky" &&
                      `This is a very short planning window, with ${monthsRemaining <= 0 ? "less than one full month" : `only ${monthsRemaining} month${monthsRemaining === 1 ? "" : "s"}`} left. Recheck the official deadline and evidence requirements; a later intake may offer more preparation time. This signal does not predict an application outcome.`}
                  </p>
                </CardContent>
              </Card>

              {/* FX snapshot */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Base living funds
                    </p>
                    <p className="text-lg font-bold naira-amount">
                      {country.currency} {teaser.minAmount.toLocaleString()}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Indicative rate
                    </p>
                    <p className="text-lg font-bold naira-amount">
                      ₦{fx.parallelRate.toLocaleString()}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Stored {new Date(fx.lastUpdated).toLocaleDateString("en-NG")}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20">
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                      Estimated base target
                    </p>
                    <p className="text-lg font-bold naira-amount text-yellow-700 dark:text-yellow-400">
                      {formatNaira(nairaTarget)}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Teaser note */}
              <Card className="border-border">
                <CardContent className="p-4 flex flex-wrap gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      {country.flag} {country.name} —{" "}
                      {PURPOSES.find((p) => p.id === selectedPurpose)?.name}{" "}
                      Visa:
                    </strong>{" "}
                    {teaser.teaserNote}
                  </p>
                  {preview.rule.sourceUrl ? (
                    <a
                      href={preview.rule.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-8 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Review the official requirement source
                    </a>
                  ) : null}
                </CardContent>
              </Card>

              {/* Mini calendar — teaser */}
              <div>
                <h2 className="text-lg font-bold mb-3">
                  Preparation Timeline Preview
                </h2>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => {
                    // i = months from now (0 = current month)
                    const cellDate = new Date(
                      CURRENT_YEAR,
                      CURRENT_MONTH_INDEX + i,
                      1,
                    );
                    const monthsToIntakeFromHere = monthsRemaining - i;
                    const status = getTimelineStatus(
                      monthsToIntakeFromHere,
                      teaser.safeMonthsBeforeIntake,
                      teaser.cautionMonthsBeforeIntake,
                    );
                    const isCurrentMonth = i === 0;
                    const isIntakeMonth =
                      cellDate.getMonth() === intakeDate.getMonth() &&
                      cellDate.getFullYear() === intakeDate.getFullYear();

                    return (
                      <div
                        key={i}
                        className={`
                        relative rounded-lg p-2 text-center border text-xs font-semibold
                        ${isCurrentMonth ? "ring-2 ring-primary" : ""}
                        ${STATUS_CONFIG[status].barClass}
                      `}
                      >
                        {isIntakeMonth && (
                          <span className="absolute -top-2 -right-1 bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                            Intake
                          </span>
                        )}
                        <p>{MONTH_NAMES[cellDate.getMonth()]}</p>
                        <p className="text-[10px] opacity-60">
                          {cellDate.getFullYear()}
                        </p>
                        <p className="text-xs mt-0.5 opacity-70">
                          {status === "safe"
                            ? "✓"
                            : status === "caution"
                              ? "!"
                              : "✕"}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-4 mt-3 flex-wrap">
                  {[
                    {
                      status: "safe" as const,
                      icon: CheckCircle,
                      label: "More runway",
                    },
                    {
                      status: "caution" as const,
                      icon: Clock,
                      label: "Shorter window",
                    },
                    {
                      status: "risky" as const,
                      icon: AlertTriangle,
                      label: "Very short window",
                    },
                  ].map((item) => (
                    <div
                      key={item.status}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <item.icon
                        className={`w-3.5 h-3.5 ${
                          item.status === "safe"
                            ? "text-green-600"
                            : item.status === "caution"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lump sum warning */}
              {teaser.requiresHistory && (
                <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
                  <CardContent className="p-4 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-1">
                        Funding history needs supporting evidence
                      </p>
                      <p className="text-sm text-red-600 dark:text-red-500">
                        Keep documents that explain material deposits and the
                        source of funds. The preparation months shown here are
                        Smarrrt planning guidance, not an official holding rule.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Gate — Sign up CTA or Save button */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-background to-background shadow-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="flex justify-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <Shield className="w-6 h-6 text-primary" />
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>

                  {isAuthenticated ? (
                    // ── LOGGED IN — Show save button ──
                    <>
                      <h3 className="text-xl font-bold text-background">
                        Save this strategy
                      </h3>

                      <p className="text-background/60 text-sm max-w-md mx-auto">
                        Continue where you left off. Your dashboard includes
                        your preparation timeline, Funding Pace Planner, and
                        source-linked rule references.
                      </p>

                      <div className="max-w-sm mx-auto space-y-2 text-left">
                        <div className="rounded-xl border bg-background/60 p-4 text-left space-y-2">
                          <p className="text-sm font-semibold">
                            Strategy Summary
                          </p>

                          <div className="grid gap-1 text-sm text-muted-foreground">
                            <p>
                              🌍 {country?.flag} {country?.name}
                            </p>

                            <p>
                              🎯{" "}
                              {
                                PURPOSES.find((p) => p.id === selectedPurpose)
                                  ?.name
                              }
                            </p>

                            <p>
                              📅 {FULL_MONTH_NAMES[intakeDate.getMonth()]}{" "}
                              {intakeDate.getFullYear()}
                            </p>

                            <p>💰 Target: {formatNaira(nairaTarget)}</p>
                          </div>
                        </div>

                        <label className="text-sm font-medium text-background/80">
                          Current Account Balance (₦)
                        </label>

                        <input
                          type="number"
                          min={0}
                          value={currentBalance}
                          placeholder="5000000"
                          onChange={(e) => {
                            setCurrentBalance(e.target.value);

                            if (saveState === "error") {
                              setSaveState("idle");
                              setSaveError("");
                            }
                          }}
                          className="w-full rounded-lg border border-background/20 bg-background/10 px-4 py-3 text-background placeholder:text-background/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />

                        {saveError && (
                          <p className="text-sm text-red-400">{saveError}</p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <Button
                          size="lg"
                          onClick={handleSave}
                          disabled={
                            saveState === "saving" ||
                            currentBalance.trim() === ""
                          }
                        >
                          {saveState === "saving" ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Saving Strategy...
                            </>
                          ) : saveState === "success" ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Strategy Saved
                            </>
                          ) : (
                            <>
                              Save Strategy
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>

                        {saveState === "success" && (
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => router.push("/dashboard")}
                          >
                            Open Dashboard
                          </Button>
                        )}
                      </div>
                    </>
                  ) : (
                    // ── NOT LOGGED IN — Show signup gate ──
                    <>
                      <h3 className="text-xl font-bold text-background">
                        Your full POF strategy is ready
                      </h3>
                      <p className="text-background/60 text-sm max-w-md mx-auto">
                        Create a free account to unlock your complete 12-month
                        calendar, Funding Pace Planner, monthly funding
                        estimate, and source-linked rule references.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          onClick={() => router.push("/signin")}
                          size="lg"
                          className="text-base"
                        >
                          Unlock Full Strategy — Free
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                      <p className="text-xs text-background/40">
                        No credit card. No spam. Sign in to save your strategy.
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
      </div>
    </div>
  );
}
