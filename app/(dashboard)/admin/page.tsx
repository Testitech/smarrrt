import type { ReactNode } from "react";
import {
  Activity,
  Calendar,
  Database,
  ExternalLink,
  Mail,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";

import { retryFailedEmail, setUserActive, setUserRole } from "./actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAdminDashboardData } from "@/lib/admin-dashboard";
import { requireAdmin } from "@/lib/dal";
import { AdminNoticeToast } from "@/components/admin/admin-notice-toast";
import { SubmitButton } from "@/components/shared/submit-button";

type AdminPageProps = {
  searchParams: Promise<{ status?: string | string[] }>;
};

type Notice = {
  title: string;
  description: string;
  destructive?: boolean;
};

const NOTICES: Record<string, Notice> = {
  "email-sent": {
    title: "Email delivered",
    description: "The failed onboarding email was accepted by the provider.",
  },
  "email-requeued": {
    title: "Email queued",
    description:
      "The delivery is back in the durable queue and will be retried automatically.",
  },
  "email-failed": {
    title: "Retry rejected",
    description:
      "The provider rejected the immediate retry. The failure details remain available below.",
    destructive: true,
  },
  "email-missing": {
    title: "Delivery not found",
    description: "That email delivery no longer exists.",
    destructive: true,
  },
  "email-not-failed": {
    title: "Retry not needed",
    description:
      "Only deliveries currently marked failed can be manually retried.",
  },
  "email-conflict": {
    title: "Delivery changed",
    description:
      "Another worker updated that delivery. Refresh and use its current state.",
  },
  "user-activated": {
    title: "User activated",
    description: "The account can sign in again.",
  },
  "user-deactivated": {
    title: "User deactivated",
    description:
      "The account was disabled and its active sessions were revoked.",
  },

  "user-promoted": {
    title: "Administrator added",
    description:
      "The user is now an administrator. Their existing sessions were revoked, so they must sign in again.",
  },
  "admin-demoted": {
    title: "Administrator removed",
    description:
      "The account now has standard user access. Existing sessions were revoked.",
  },
  "role-unchanged": {
    title: "No role change needed",
    description: "The account already has the requested role.",
  },
  "role-conflict": {
    title: "Role changed",
    description:
      "Another administrator updated this account. Review the latest state before trying again.",
  },
  "cannot-demote-self": {
    title: "Action blocked",
    description: "You cannot remove your own administrator role.",
    destructive: true,
  },
  "cannot-demote-last-admin": {
    title: "Action blocked",
    description: "At least one active administrator must remain.",
    destructive: true,
  },
  "cannot-promote-inactive-user": {
    title: "Action blocked",
    description: "Activate this account before promoting it to administrator.",
    destructive: true,
  },

  "user-unchanged": {
    title: "No change needed",
    description: "The account was already in the requested state.",
  },
  "user-missing": {
    title: "User not found",
    description: "That account no longer exists.",
    destructive: true,
  },
  "user-conflict": {
    title: "Account changed",
    description:
      "Another administrator updated the account. Review the latest state before trying again.",
  },
  "cannot-deactivate-self": {
    title: "Action blocked",
    description: "You cannot deactivate your own administrator account.",
    destructive: true,
  },
  "cannot-deactivate-last-admin": {
    title: "Action blocked",
    description: "At least one active administrator must remain.",
    destructive: true,
  },
  "invalid-request": {
    title: "Invalid request",
    description: "The submitted operation could not be validated.",
    destructive: true,
  },
};

const DATE_TIME_FORMATTER = new Intl.DateTimeFormat("en-NG", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Lagos",
});

function formatDateTime(value: Date | null): string {
  return value ? DATE_TIME_FORMATTER.format(value) : "Never";
}

function formatAge(ageMs: number): string {
  const minutes = Math.floor(ageMs / 60_000);
  if (minutes < 1) return "under a minute ago";
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  return `${Math.floor(hours / 24)}d ago`;
}

function formatRate(value: number): string {
  return new Intl.NumberFormat("en-NG", {
    maximumFractionDigits: 2,
  }).format(value);
}

function truncate(value: string, maximumLength = 160): string {
  if (value.length <= maximumLength) return value;
  return `${value.slice(0, maximumLength - 1)}…`;
}

function safeHttpUrl(value: string | null): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

function HealthBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "good" | "warning" | "danger" | "neutral";
}) {
  const tones = {
    good: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300",
    warning:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300",
    danger:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300",
    neutral: "border-border bg-muted/40 text-muted-foreground",
  };

  return (
    <Badge variant="outline" className={tones[tone]}>
      {children}
    </Badge>
  );
}

function SummaryCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-3">
        <div>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="mt-1 text-3xl font-semibold tabular-nums">
            {value}
          </CardTitle>
        </div>
        <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="text-xs leading-5 text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}

function RuleStateBadge({ state }: { state: string }) {
  const labels: Record<string, string> = {
    SUPPORTED: "Supported now",
    INACTIVE: "Inactive",
    PARENT_INACTIVE: "Destination/purpose inactive",
    FUTURE: "Future",
    EXPIRED: "Expired",
  };

  return (
    <HealthBadge tone={state === "SUPPORTED" ? "good" : "neutral"}>
      {labels[state] ?? state}
    </HealthBadge>
  );
}

function EmailStateBadge({ status }: { status: string }) {
  const tone =
    status === "FAILED"
      ? "danger"
      : status === "PROCESSING"
        ? "warning"
        : "neutral";

  return <HealthBadge tone={tone}>{status.toLowerCase()}</HealthBadge>;
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const admin = await requireAdmin();
  const [data, rawSearchParams] = await Promise.all([
    getAdminDashboardData(),
    searchParams,
  ]);
  const statusValue = rawSearchParams.status;
  const status = Array.isArray(statusValue) ? statusValue[0] : statusValue;
  const notice = status ? NOTICES[status] : undefined;

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-linear-to-br from-background to-muted/30 p-6 md:flex-row md:items-end md:justify-between md:p-8">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
            <ShieldCheck aria-hidden="true" className="size-4" />
            Restricted operations
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Admin dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
            User access, onboarding delivery, rule provenance, and FX data
            health. Operational labels report what the database proves—not what
            a timestamp merely suggests.
          </p>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          <p className="font-medium text-foreground">
            {admin.name ?? admin.email ?? "Administrator"}
          </p>
          <p>Snapshot {formatDateTime(data.generatedAt)}</p>
        </div>
      </header>

      {notice ? (
        <AdminNoticeToast
          title={notice.title}
          description={notice.description}
          type={notice.destructive ? "error" : "success"}
        />
      ) : null}

      <section aria-labelledby="overview-heading" className="space-y-4">
        <div>
          <h2 id="overview-heading" className="text-xl font-semibold">
            Operational overview
          </h2>
          <p className="text-sm text-muted-foreground">
            Counts are read directly from the primary database.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            title="Users"
            value={data.users.total}
            description={`${data.users.active} active · ${data.users.disabled} disabled · ${data.users.newLastThirtyDays} new in 30 days`}
            icon={<Users aria-hidden="true" className="size-5" />}
          />
          <SummaryCard
            title="Saved strategies"
            value={data.timelines.total}
            description={`${data.timelines.safe} safe · ${data.timelines.caution} caution · ${data.timelines.risky} risky${data.timelines.other ? ` · ${data.timelines.other} other` : ""}`}
            icon={<Calendar aria-hidden="true" className="size-5" />}
          />
          <SummaryCard
            title="Email failures"
            value={data.email.failed}
            description={`${data.email.due} due · ${data.email.stuck} stuck · ${data.email.sentLastThirtyDays} sent in 30 days`}
            icon={<Mail aria-hidden="true" className="size-5" />}
          />
          <SummaryCard
            title="POF coverage"
            value={`${data.rules.coveragePercent}%`}
            description={`${data.rules.supported} of ${data.rules.coverageDenominator} active country-purpose combinations`}
            icon={<Database aria-hidden="true" className="size-5" />}
          />
        </div>
      </section>

      <section aria-labelledby="users-heading">
        <Card>
          <CardHeader>
            <CardTitle id="users-heading">Recent users</CardTitle>
            <CardDescription>
              Account state changes are audited. Deactivation also revokes
              database sessions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full min-w-225 text-left text-sm">
                <thead className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-3 font-medium">User</th>
                    <th className="px-3 py-3 font-medium">Access</th>
                    <th className="px-3 py-3 font-medium">Strategies</th>
                    <th className="px-3 py-3 font-medium">Joined</th>
                    <th className="px-3 py-3 font-medium">Last login</th>
                    <th className="px-3 py-3 text-right font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data.users.recent.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-12 text-center">
                        <p className="font-semibold text-foreground">No users yet</p>
                        <p className="mt-1 text-sm text-muted-foreground">New accounts will appear here after their first sign-in.</p>
                      </td>
                    </tr>
                  ) : null}{data.users.recent.map((user) => {
                    const isCurrentAdmin = user.id === admin.id;
                    const isProtectedLastAdmin =
                      user.isActive &&
                      user.role === "ADMIN" &&
                      data.users.activeAdmins <= 1;
                    const actionDisabled =
                      user.isActive && (isCurrentAdmin || isProtectedLastAdmin);

                    return (
                      <tr key={user.id} className="align-top">
                        <td className="px-3 py-4">
                          <p className="font-medium">
                            {user.name ?? "Unnamed user"}
                          </p>
                          <p className="max-w-60 truncate text-xs text-muted-foreground">
                            {user.email ?? "No email address"}
                          </p>
                        </td>
                        <td className="px-3 py-4">
                          <div className="flex flex-wrap gap-1.5">
                            <HealthBadge
                              tone={user.isActive ? "good" : "danger"}
                            >
                              {user.isActive ? "Active" : "Disabled"}
                            </HealthBadge>
                            {user.role === "ADMIN" ? (
                              <HealthBadge>Admin</HealthBadge>
                            ) : null}
                          </div>
                        </td>
                        <td className="px-3 py-4 tabular-nums">
                          {user._count.timelines}
                        </td>
                        <td className="px-3 py-4 text-muted-foreground">
                          {formatDateTime(user.createdAt)}
                        </td>
                        <td className="px-3 py-4 text-muted-foreground">
                          {formatDateTime(user.lastLoginAt)}
                        </td>
                        <td className="px-3 py-4">
                          <div className="flex flex-wrap items-center justify-end gap-2">
                            <form action={setUserRole}>
                              <input
                                type="hidden"
                                name="userId"
                                value={user.id}
                              />

                              <input
                                type="hidden"
                                name="role"
                                value={user.role === "ADMIN" ? "USER" : "ADMIN"}
                              />

                              <SubmitButton pendingLabel="Updating role…"
                                type="submit"
                                size="sm"
                                variant="outline"
                                disabled={
                                  !user.isActive ||
                                  (isCurrentAdmin && user.role === "ADMIN") ||
                                  isProtectedLastAdmin
                                }
                                title={
                                  !user.isActive
                                    ? "Activate this user before changing their role"
                                    : isCurrentAdmin && user.role === "ADMIN"
                                      ? "You cannot remove your own administrator role"
                                      : isProtectedLastAdmin
                                        ? "At least one active administrator must remain"
                                        : user.role === "ADMIN"
                                          ? "Remove administrator access"
                                          : "Grant administrator access"
                                }
                              >
                                {user.role === "ADMIN"
                                  ? "Demote"
                                  : "Make Admin"}
                              </SubmitButton>
                            </form>

                            <form action={setUserActive}>
                              <input
                                type="hidden"
                                name="userId"
                                value={user.id}
                              />

                              <input
                                type="hidden"
                                name="isActive"
                                value={String(!user.isActive)}
                              />

                              <SubmitButton pendingLabel="Updating account…"
                                type="submit"
                                size="sm"
                                variant={
                                  user.isActive ? "destructive" : "outline"
                                }
                                disabled={actionDisabled}
                                title={
                                  isCurrentAdmin
                                    ? "You cannot deactivate your own account"
                                    : isProtectedLastAdmin
                                      ? "At least one active administrator must remain"
                                      : undefined
                                }
                              >
                                {user.isActive ? "Deactivate" : "Activate"}
                              </SubmitButton>
                            </form>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="email-heading">
        <Card>
          <CardHeader>
            <CardTitle id="email-heading">Email delivery health</CardTitle>
            <CardDescription>
              {data.email.pending} pending · {data.email.processing} processing
              · {data.email.sent} sent · {data.email.failed} failed. Manual
              retry is available only for terminal failures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data.email.attention.length === 0 ? (
              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
                <Activity aria-hidden="true" className="size-5" />
                No failed, overdue, or stale-locked deliveries need attention.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-250 text-left text-sm">
                  <thead className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-3 py-3 font-medium">Recipient</th>
                      <th className="px-3 py-3 font-medium">State</th>
                      <th className="px-3 py-3 font-medium">Attempts</th>
                      <th className="px-3 py-3 font-medium">Last attempt</th>
                      <th className="px-3 py-3 font-medium">Next attempt</th>
                      <th className="px-3 py-3 font-medium">Failure</th>
                      <th className="px-3 py-3 text-right font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {data.email.attention.map((delivery) => (
                      <tr key={delivery.id} className="align-top">
                        <td className="px-3 py-4">
                          <p className="max-w-60 truncate font-medium">
                            {delivery.recipient}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {delivery.kind.toLowerCase()} · queued{" "}
                            {formatDateTime(delivery.createdAt)}
                          </p>
                        </td>
                        <td className="px-3 py-4">
                          <EmailStateBadge status={delivery.status} />
                        </td>
                        <td className="px-3 py-4 tabular-nums">
                          {delivery.attempts}
                        </td>
                        <td className="px-3 py-4 text-muted-foreground">
                          {formatDateTime(delivery.lastAttemptAt)}
                        </td>
                        <td className="px-3 py-4 text-muted-foreground">
                          {delivery.status === "FAILED"
                            ? "Manual retry"
                            : formatDateTime(delivery.nextAttemptAt)}
                        </td>
                        <td className="max-w-80 px-3 py-4 text-xs leading-5 text-muted-foreground">
                          {delivery.lastError
                            ? truncate(delivery.lastError)
                            : delivery.status === "PROCESSING"
                              ? "Worker lock is stale. The scheduled worker can reclaim it."
                              : delivery.status === "FAILED"
                                ? "No provider error was recorded."
                                : "Delivery is due and awaiting a worker."}
                        </td>
                        <td className="px-3 py-4 text-right">
                          {delivery.status === "FAILED" ? (
                            <form action={retryFailedEmail}>
                              <input
                                type="hidden"
                                name="deliveryId"
                                value={delivery.id}
                              />
                              <SubmitButton pendingLabel="Retrying…" type="submit" size="sm" variant="outline">
                                <RefreshCw aria-hidden="true" />
                                Retry
                              </SubmitButton>
                            </form>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              Automatic
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="rules-heading">
        <Card>
          <CardHeader>
            <CardTitle id="rules-heading">
              POF rule coverage and provenance
            </CardTitle>
            <CardDescription>
              {data.rules.supported} supported now ·{" "}
              {data.rules.missingProvenance} missing current provenance ·{" "}
              {data.rules.reviewOverdue} source reviews older than 90 days.
              Coverage uses all active destinations × active purposes as its
              denominator.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full min-w-250 text-left text-sm">
                <thead className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-3 font-medium">Rule</th>
                    <th className="px-3 py-3 font-medium">State</th>
                    <th className="px-3 py-3 font-medium">Version</th>
                    <th className="px-3 py-3 font-medium">Amount scope</th>
                    <th className="px-3 py-3 font-medium">Effective window</th>
                    <th className="px-3 py-3 font-medium">Source review</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data.rules.rows.map((rule) => {
                    const sourceUrl = safeHttpUrl(rule.sourceUrl);

                    return (
                      <tr key={rule.id} className="align-top">
                        <td className="px-3 py-4">
                          <p className="font-medium">
                            {rule.country.name} · {rule.purpose.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {rule.country.isoCode} / {rule.purpose.slug}
                          </p>
                        </td>
                        <td className="px-3 py-4">
                          <RuleStateBadge state={rule.operationalState} />
                        </td>
                        <td className="px-3 py-4 font-mono text-xs">
                          {rule.ruleVersion}
                        </td>
                        <td className="px-3 py-4 text-xs text-muted-foreground">
                          {rule.amountScope.toLowerCase().replaceAll("_", " ")}
                        </td>
                        <td className="px-3 py-4 text-xs text-muted-foreground">
                          <p>From: {formatDateTime(rule.effectiveFrom)}</p>
                          <p>To: {formatDateTime(rule.effectiveTo)}</p>
                        </td>
                        <td className="px-3 py-4">
                          <div className="flex flex-wrap items-center gap-2">
                            <HealthBadge
                              tone={
                                !rule.provenanceComplete
                                  ? "danger"
                                  : rule.reviewOverdue
                                    ? "warning"
                                    : "good"
                              }
                            >
                              {!rule.provenanceComplete
                                ? "Incomplete"
                                : rule.reviewOverdue
                                  ? "Review overdue"
                                  : "Reviewed"}
                            </HealthBadge>
                            {sourceUrl ? (
                              <a
                                href={sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                              >
                                Source
                                <ExternalLink
                                  aria-hidden="true"
                                  className="size-3"
                                />
                              </a>
                            ) : null}
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {rule.sourceCheckedAt
                              ? formatDateTime(rule.sourceCheckedAt)
                              : "Never checked"}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="fx-heading">
        <Card>
          <CardHeader>
            <CardTitle id="fx-heading">FX freshness and trust</CardTitle>
            <CardDescription>
              {data.fx.fresh} of {data.fx.total} rows were written in the last 3
              hours, but only {data.fx.verifiedFresh} are both fresh and
              non-indicative. {data.fx.indicative} rows are explicitly reference
              data.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full min-w-180 text-left text-sm">
                <thead className="border-b text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-3 py-3 font-medium">Currency</th>
                    <th className="px-3 py-3 font-medium">CBN</th>
                    <th className="px-3 py-3 font-medium">Parallel</th>
                    <th className="px-3 py-3 font-medium">Source</th>
                    <th className="px-3 py-3 font-medium">Health</th>
                    <th className="px-3 py-3 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data.fx.rows.map((rate) => (
                    <tr key={rate.currencyCode}>
                      <td className="px-3 py-4 font-semibold">
                        {rate.currencyCode}/NGN
                      </td>
                      <td className="px-3 py-4 font-mono tabular-nums">
                        NGN {formatRate(rate.cbnRate)}
                      </td>
                      <td className="px-3 py-4 font-mono tabular-nums">
                        NGN {formatRate(rate.parallelRate)}
                      </td>
                      <td className="px-3 py-4 text-muted-foreground">
                        {rate.source}
                      </td>
                      <td className="px-3 py-4">
                        <HealthBadge
                          tone={
                            rate.isVerifiedFresh
                              ? "good"
                              : rate.isFresh
                                ? "warning"
                                : "danger"
                          }
                        >
                          {rate.isVerifiedFresh
                            ? "Verified + fresh"
                            : rate.isFresh
                              ? "Fresh reference"
                              : rate.isIndicative
                                ? "Stale reference"
                                : "Stale"}
                        </HealthBadge>
                      </td>
                      <td className="px-3 py-4 text-muted-foreground">
                        <p>{formatAge(rate.ageMs)}</p>
                        <p className="text-xs">
                          {formatDateTime(rate.lastUpdated)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
