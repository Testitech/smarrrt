import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";


import {
  ArrowRight,
  Plus,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import type { PofStatus } from "@/types";

// ─────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────

function StatusBadge({ status }: { status: PofStatus }) {
  const config = {
    safe: {
      label: "Safe",
      className:
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
      icon: CheckCircle,
    },
    caution: {
      label: "Caution",
      className:
        "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400 dark:border-yellow-800",
      icon: Clock,
    },
    risky: {
      label: "Risky",
      className:
        "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
      icon: AlertTriangle,
    },
  };

  const { label, className, icon: Icon } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${className}`}
    >
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
}

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-NG", {
    month: "short",
    year: "numeric",
  });
}

// ─────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  // Fetch user timelines
  const timelines = await prisma.userTimeline.findMany({
    where: { userId: session.user.id },
    include: {
      country: true,
      purpose: true,
    },
    orderBy: { updatedAt: "desc" },
  });

  const firstName = session.user.name?.split(" ")[0] ?? "there";



  return (
    <div className="relative space-y-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_30%)]" />
      {/* ── PAGE HEADER ── */}
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background to-muted/30 p-8 md:p-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-3">
              Your financial readiness dashboard
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Welcome back, {firstName} 👋
            </h1>

            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Track your Proof of Funds progress, monitor your statement health,
              and prepare your visa application with confidence.
            </p>
          </div>

          <Button asChild size="lg" className="h-12 px-6 text-base rounded-xl">
            <Link href="/calculator">
              <Plus className="w-5 h-5 mr-2" />
              New Strategy
            </Link>
          </Button>
        </div>
      </div>
      {/* ── SUMMARY STATS ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            label: "Active Strategies",
            value: timelines.length,
            icon: Calendar,
            description: "Saved POF timelines",
          },
          {
            label: "Safe Strategies",
            value: timelines.filter((t) => t.currentStatus === "safe").length,
            icon: CheckCircle,
            description: "On track for preparation",
          },
          {
            label: "Need Attention",
            value: timelines.filter(
              (t) =>
                t.currentStatus === "caution" || t.currentStatus === "risky",
            ).length,
            icon: AlertTriangle,
            description: "Caution or risky status",
          },
        ].map((stat) => (
          <Card
            key={stat.label}
            className="border-dashed border-2 border-border/50 rounded-3xl bg-gradient-to-br from-background to-muted/20"
          >
            <CardContent className="py-20 px-6 text-cente">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>

                <span className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </span>
              </div>

              <p className="text-4xl font-bold tracking-tight">{stat.value}</p>

              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── TIMELINES ── */}
      {timelines.length === 0 ? (
        // Empty state
        <Card className="group border-50/70 bg-background/70 backdrop:blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 rounded-2xl overflow-hidden">
          <CardContent className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Start building your first visa strategy
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              Create your first POF strategy to see your personalised timeline,
              Naira targets, and monthly deposit plan.
            </p>
            <Button asChild>
              <Link href="/calculator">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Strategy
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        // Timeline cards
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Your Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timelines.map((timeline) => (
              <Card
                key={timeline.id}
                className="border-border hover:border-primary/30 transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold tracking-tight">
                        {timeline.country.flagEmoji} {timeline.country.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {timeline.purpose.icon} {timeline.purpose.name} Visa
                      </p>
                    </div>
                    <StatusBadge status={timeline.currentStatus as PofStatus} />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Key figures */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-border/50 bg-muted/30 p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        Naira Target
                      </p>
                      <p className="text-lg font-bold naira-amount tracking-tight">
                        {formatNaira(timeline.targetAmount)}
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">
                        Monthly Deposit
                      </p>
                      <p className="text-sm font-bold naira-amount">
                        {formatNaira(timeline.monthlyDeposit)}
                      </p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      Safe from{" "}
                      <span className="text-green-600 font-semibold">
                        {formatDate(timeline.safeStartDate)}
                      </span>
                    </span>
                    <span>
                      Intake:{" "}
                      <span className="font-semibold text-foreground">
                        {formatDate(timeline.intakeDate)}
                      </span>
                    </span>
                  </div>

                  {/* View button */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link href={`/dashboard/${timeline.slug}`}>
                      View Full Strategy
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
