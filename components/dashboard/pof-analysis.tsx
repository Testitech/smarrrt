import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, ShieldCheck, FileText } from "lucide-react";
import type { PofStatus } from "@/types";

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type PofAnalysisProps = {
  analysisText: string;
  nigerianSpecific: string;
  currentStatus: PofStatus;
  requiresHistory: boolean;
  statementMonths: number;
  countryName: string;
  purposeName: string;
  lumpSumRisk: boolean;
};

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

const STATUS_CONFIG = {
  safe: {
    label: "Safe Period",
    className:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
  },
  caution: {
    label: "Caution Period",
    className:
      "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800",
  },
  risky: {
    label: "Risky Period",
    className:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
  },
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────

export default function PofAnalysis({
  analysisText,
  nigerianSpecific,
  currentStatus,
  requiresHistory,
  statementMonths,
  countryName,
  purposeName,
  lumpSumRisk,
}: PofAnalysisProps) {
  const statusConfig = STATUS_CONFIG[currentStatus];

  return (
    <div className="space-y-5">
      {/* ── HEADER ── */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Strategy Analysis
          </h2>

          <p className="text-sm text-muted-foreground mt-1">
            Embassy-focused breakdown of your Proof of Funds readiness.
          </p>
        </div>

        <Badge
          className={`px-4 py-2 text-xs font-semibold tracking-wide border ${statusConfig.className}`}
        >
          {statusConfig.label}
        </Badge>
      </div>

      {/* ── MAIN ANALYSIS ── */}
      <Card className="overflow-hidden border-border/60 shadow-sm">
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/70 to-primary/20" />

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <CardTitle className="text-xl">
                {countryName} — {purposeName} Visa
              </CardTitle>

              <p className="text-sm text-muted-foreground mt-1">
                Financial credibility and statement health overview
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3">
              <p className="text-[11px] uppercase tracking-wide text-primary font-semibold">
                Embassy Status
              </p>

              <p className="text-sm font-bold text-primary mt-1">
                {statusConfig.label}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* analysis */}
          <div className="rounded-2xl border border-border/60 bg-muted/20 p-5">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-primary" />

              <p className="text-sm font-semibold">Core Financial Analysis</p>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              {analysisText}
            </p>
          </div>

          {/* facts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border/60 bg-background p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">
                Statement History Required
              </p>

              <h3 className="text-3xl font-bold tracking-tight">
                {statementMonths} months
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                Recommended banking history duration
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">
                History Requirement
              </p>

              <h3 className="text-lg font-bold tracking-tight">
                {requiresHistory
                  ? "Organic Transaction History"
                  : "Balance Snapshot"}
              </h3>

              <p className="text-sm text-muted-foreground mt-1">
                {requiresHistory
                  ? "Embassy reviews transaction patterns closely"
                  : "Focus is primarily on available balance"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── NIGERIAN INTELLIGENCE ── */}
      <Card className="relative overflow-hidden border-primary/20 bg-primary/[0.03] shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] to-transparent pointer-events-none" />

        <CardHeader className="relative pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>

            <div>
              <span>🇳🇬 Nigerian Applicant Intelligence</span>

              <p className="text-sm font-normal text-muted-foreground mt-1">
                Country-specific financial scrutiny patterns
              </p>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-sm leading-7 text-muted-foreground">
            {nigerianSpecific}
          </p>
        </CardContent>
      </Card>

      {/* ── WARNINGS ── */}
      <div className="space-y-4">
        {lumpSumRisk && (
          <div className="rounded-2xl border border-red-200/70 bg-red-50/80 dark:bg-red-950/10 p-5">
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>

              <div>
                <h3 className="text-base font-bold text-red-700 dark:text-red-400 mb-2">
                  Lump Sum Risk Detected
                </h3>

                <p className="text-sm leading-7 text-red-700/90 dark:text-red-400/90">
                  Your projected monthly deposits may resemble account dumping
                  patterns commonly flagged by embassy case officers. Extend
                  your preparation timeline or increase your existing balance
                  gradually.
                </p>
              </div>
            </div>
          </div>
        )}

        {requiresHistory && (
          <div className="rounded-2xl border border-yellow-200/70 bg-yellow-50/80 dark:bg-yellow-950/10 p-5">
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 shrink-0">
                <Info className="w-5 h-5 text-yellow-600" />
              </div>

              <div>
                <h3 className="text-base font-bold text-yellow-700 dark:text-yellow-400 mb-2">
                  Organic Account History Required
                </h3>

                <p className="text-sm leading-7 text-yellow-700/90 dark:text-yellow-400/90">
                  {countryName} case officers assess transaction consistency,
                  salary flow, spending behaviour, and account age — not just
                  the final available balance.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
