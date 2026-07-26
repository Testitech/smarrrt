import Link from "next/link";
import { redirect } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Info,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatAccountDate(date: Date | null) {
  if (!date) return "Not recorded";

  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function SettingsPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/signin");
  }

  if (!session.user.isActive) {
    redirect("/signin?error=AccountDisabled");
  }

  const [user, strategies] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        name: true,
        email: true,
        emailVerified: true,
        image: true,
        role: true,
        createdAt: true,
        lastLoginAt: true,
      },
    }),
    prisma.userTimeline.findMany({
      where: { userId: session.user.id },
      select: {
        currentStatus: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: "desc" },
    }),
  ]);

  if (!user) {
    redirect("/signin");
  }

  const displayName = user.name?.trim() || "Smarrrt user";
  const initial =
    displayName.charAt(0).toUpperCase() ||
    user.email?.charAt(0).toUpperCase() ||
    "U";
  const savedSafeCount = strategies.filter(
    (strategy) => strategy.currentStatus === "safe",
  ).length;
  const savedAttentionCount = strategies.filter(
    (strategy) =>
      strategy.currentStatus === "caution" ||
      strategy.currentStatus === "risky",
  ).length;
  const latestStrategyUpdate = strategies[0]?.updatedAt ?? null;

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold text-primary">Account</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Account and strategy overview
        </h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          A read-only snapshot of the identity connected to Smarrrt and the
          calculations saved under it.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <UserRound aria-hidden="true" className="size-5 text-primary" />
              Account details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
              {user.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.image}
                  alt=""
                  className="size-14 shrink-0 rounded-2xl object-cover"
                />
              ) : (
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">
                  {initial}
                </div>
              )}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate font-semibold">{displayName}</p>
                  <Badge variant="outline">
                    {user.role === "ADMIN" ? "Administrator" : "User"}
                  </Badge>
                </div>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {user.email ?? "No email address recorded"}
                </p>
              </div>
            </div>

            <dl className="divide-y divide-border rounded-2xl border border-border/60">
              <div className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <dt className="flex items-center gap-2 text-sm font-medium">
                  <Mail aria-hidden="true" className="size-4 text-primary" />
                  Email verification
                </dt>
                <dd className="text-sm text-muted-foreground sm:text-right">
                  {user.emailVerified
                    ? `Verified ${formatAccountDate(user.emailVerified)}`
                    : "No verification timestamp recorded"}
                </dd>
              </div>
              <div className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <dt className="flex items-center gap-2 text-sm font-medium">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-4 text-primary"
                  />
                  Account created
                </dt>
                <dd className="text-sm text-muted-foreground sm:text-right">
                  {formatAccountDate(user.createdAt)}
                </dd>
              </div>
              <div className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <dt className="flex items-center gap-2 text-sm font-medium">
                  <Clock3 aria-hidden="true" className="size-4 text-primary" />
                  Last sign-in
                </dt>
                <dd className="text-sm text-muted-foreground sm:text-right">
                  {formatAccountDate(user.lastLoginAt)}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="h-fit rounded-2xl border-primary/20 bg-primary/5">
          <CardContent className="p-5 sm:p-6">
            <div className="flex gap-3">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold">About account changes</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Profile editing and notification preferences are not available
                  yet. Your name, email, and image come from the sign-in method
                  connected to this account.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section aria-labelledby="strategy-overview-heading" className="space-y-4">
        <div>
          <h2 id="strategy-overview-heading" className="text-xl font-semibold">
            Saved strategy overview
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            These statuses were captured at calculation time and may need to be
            recalculated as dates, balances, requirements, or FX rates change.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Total saved",
              value: strategies.length,
              detail: latestStrategyUpdate
                ? `Latest update ${formatAccountDate(latestStrategyUpdate)}`
                : "No strategies saved yet",
              icon: ShieldCheck,
            },
            {
              label: "Saved as safe",
              value: savedSafeCount,
              detail: "At the last calculation",
              icon: CheckCircle2,
            },
            {
              label: "Need review",
              value: savedAttentionCount,
              detail: "Saved as caution or risky",
              icon: AlertTriangle,
            },
          ].map((item) => (
            <Card key={item.label} className="rounded-2xl">
              <CardContent className="p-5">
                <item.icon aria-hidden="true" className="size-5 text-primary" />
                <p className="mt-4 text-3xl font-bold tabular-nums">{item.value}</p>
                <p className="mt-1 text-sm font-semibold">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="rounded-xl">
            <Link href="/dashboard">
              Review saved strategies
              <ArrowRight aria-hidden="true" className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/calculator">Create a new calculation</Link>
          </Button>
          {user.role === "ADMIN" ? (
            <Button asChild variant="ghost" className="rounded-xl">
              <Link href="/admin">Open admin dashboard</Link>
            </Button>
          ) : null}
        </div>
      </section>
    </div>
  );
}
