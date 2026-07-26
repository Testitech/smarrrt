import "server-only";

import { prisma } from "@/lib/prisma";

const DAY_IN_MS = 24 * 60 * 60 * 1_000;
const FX_FRESHNESS_WINDOW_MS = 3 * 60 * 60 * 1_000;
const EMAIL_LOCK_TIMEOUT_MS = 10 * 60 * 1_000;
const RULE_REVIEW_WINDOW_MS = 90 * DAY_IN_MS;

function countGroups<T extends string>(
  groups: Array<{ status: T; _count: { _all: number } }>,
): Record<T, number> {
  return Object.fromEntries(
    groups.map((group) => [group.status, group._count._all]),
  ) as Record<T, number>;
}

export async function getAdminDashboardData(now = new Date()) {
  const thirtyDaysAgo = new Date(now.getTime() - 30 * DAY_IN_MS);
  const staleLockBefore = new Date(now.getTime() - EMAIL_LOCK_TIMEOUT_MS);
  const ruleReviewCutoff = new Date(now.getTime() - RULE_REVIEW_WINDOW_MS);

  const [
    userGroups,
    newUsers,
    recentUsers,
    totalTimelines,
    timelineGroups,
    emailGroups,
    sentEmailsLastThirtyDays,
    dueEmails,
    stuckEmails,
    emailAttention,
    rules,
    activeCountryCount,
    activePurposeCount,
    fxRates,
  ] = await Promise.all([
    prisma.user.groupBy({
      by: ["role", "isActive"],
      _count: { _all: true },
    }),
    prisma.user.count({
      where: { createdAt: { gte: thirtyDaysAgo } },
    }),
    prisma.user.findMany({
      take: 12,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        lastLoginAt: true,
        _count: { select: { timelines: true } },
      },
    }),
    prisma.userTimeline.count(),
    prisma.userTimeline.groupBy({
      by: ["currentStatus"],
      _count: { _all: true },
    }),
    prisma.emailDelivery.groupBy({
      by: ["status"],
      _count: { _all: true },
    }),
    prisma.emailDelivery.count({
      where: {
        status: "SENT",
        sentAt: { gte: thirtyDaysAgo },
      },
    }),
    prisma.emailDelivery.count({
      where: {
        status: "PENDING",
        nextAttemptAt: { lte: now },
      },
    }),
    prisma.emailDelivery.count({
      where: {
        status: "PROCESSING",
        OR: [{ lockedAt: null }, { lockedAt: { lte: staleLockBefore } }],
      },
    }),
    prisma.emailDelivery.findMany({
      where: {
        OR: [
          { status: "FAILED" },
          { status: "PENDING", nextAttemptAt: { lte: now } },
          {
            status: "PROCESSING",
            OR: [
              { lockedAt: null },
              { lockedAt: { lte: staleLockBefore } },
            ],
          },
        ],
      },
      take: 20,
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        kind: true,
        status: true,
        recipient: true,
        attempts: true,
        nextAttemptAt: true,
        lockedAt: true,
        lastAttemptAt: true,
        lastError: true,
        createdAt: true,
        updatedAt: true,
        user: { select: { name: true, email: true } },
      },
    }),
    prisma.pofRule.findMany({
      orderBy: [{ country: { name: "asc" } }, { purpose: { name: "asc" } }],
      select: {
        id: true,
        isActive: true,
        ruleVersion: true,
        amountScope: true,
        sourceUrl: true,
        sourceCheckedAt: true,
        effectiveFrom: true,
        effectiveTo: true,
        updatedAt: true,
        country: {
          select: { name: true, isoCode: true, isActive: true },
        },
        purpose: {
          select: { name: true, slug: true, isActive: true },
        },
      },
    }),
    prisma.country.count({ where: { isActive: true } }),
    prisma.visaPurpose.count({ where: { isActive: true } }),
    prisma.fxRate.findMany({
      orderBy: { currencyCode: "asc" },
      select: {
        currencyCode: true,
        cbnRate: true,
        parallelRate: true,
        source: true,
        isIndicative: true,
        lastUpdated: true,
      },
    }),
  ]);

  const users = userGroups.reduce(
    (summary, group) => {
      summary.total += group._count._all;
      if (group.isActive) summary.active += group._count._all;
      else summary.disabled += group._count._all;
      if (group.role === "ADMIN") {
        summary.admins += group._count._all;
        if (group.isActive) summary.activeAdmins += group._count._all;
      }
      return summary;
    },
    { total: 0, active: 0, disabled: 0, admins: 0, activeAdmins: 0 },
  );

  const timelineCounts = Object.fromEntries(
    timelineGroups.map((group) => [
      group.currentStatus.toLowerCase(),
      group._count._all,
    ]),
  ) as Record<string, number>;
  const knownTimelineCount =
    (timelineCounts.safe ?? 0) +
    (timelineCounts.caution ?? 0) +
    (timelineCounts.risky ?? 0);
  const emailCounts = countGroups(emailGroups);

  const rulesWithHealth = rules.map((rule) => {
    const isFuture = Boolean(
      rule.effectiveFrom && rule.effectiveFrom.getTime() > now.getTime(),
    );
    const isExpired = Boolean(
      rule.effectiveTo && rule.effectiveTo.getTime() < now.getTime(),
    );
    const parentsActive = rule.country.isActive && rule.purpose.isActive;
    const supportedNow =
      rule.isActive && parentsActive && !isFuture && !isExpired;
    const hasSource = Boolean(rule.sourceUrl?.trim());
    const provenanceComplete = Boolean(
      hasSource && rule.sourceCheckedAt && rule.ruleVersion.trim(),
    );
    const reviewOverdue = Boolean(
      rule.sourceCheckedAt && rule.sourceCheckedAt < ruleReviewCutoff,
    );

    let operationalState:
      | "SUPPORTED"
      | "INACTIVE"
      | "PARENT_INACTIVE"
      | "FUTURE"
      | "EXPIRED" = "SUPPORTED";

    if (!parentsActive) operationalState = "PARENT_INACTIVE";
    else if (!rule.isActive) operationalState = "INACTIVE";
    else if (isFuture) operationalState = "FUTURE";
    else if (isExpired) operationalState = "EXPIRED";

    return {
      ...rule,
      supportedNow,
      provenanceComplete,
      reviewOverdue,
      operationalState,
    };
  });

  const supportedRules = rulesWithHealth.filter((rule) => rule.supportedNow);
  const coverageDenominator = activeCountryCount * activePurposeCount;

  const ratesWithHealth = fxRates.map((rate) => {
    const ageMs = now.getTime() - rate.lastUpdated.getTime();
    const isFresh = ageMs >= 0 && ageMs < FX_FRESHNESS_WINDOW_MS;
    const isVerifiedFresh = isFresh && !rate.isIndicative;

    return {
      ...rate,
      isFresh,
      isVerifiedFresh,
      ageMs: Math.max(0, ageMs),
    };
  });

  return {
    generatedAt: now,
    users: {
      ...users,
      newLastThirtyDays: newUsers,
      recent: recentUsers,
    },
    timelines: {
      total: totalTimelines,
      safe: timelineCounts.safe ?? 0,
      caution: timelineCounts.caution ?? 0,
      risky: timelineCounts.risky ?? 0,
      other: Math.max(0, totalTimelines - knownTimelineCount),
    },
    email: {
      pending: emailCounts.PENDING ?? 0,
      processing: emailCounts.PROCESSING ?? 0,
      sent: emailCounts.SENT ?? 0,
      failed: emailCounts.FAILED ?? 0,
      due: dueEmails,
      stuck: stuckEmails,
      sentLastThirtyDays: sentEmailsLastThirtyDays,
      attention: emailAttention,
    },
    rules: {
      rows: rulesWithHealth,
      total: rulesWithHealth.length,
      supported: supportedRules.length,
      coverageDenominator,
      coveragePercent:
        coverageDenominator === 0
          ? 0
          : Math.round((supportedRules.length / coverageDenominator) * 100),
      missingProvenance: supportedRules.filter(
        (rule) => !rule.provenanceComplete,
      ).length,
      reviewOverdue: supportedRules.filter((rule) => rule.reviewOverdue)
        .length,
    },
    fx: {
      rows: ratesWithHealth,
      total: ratesWithHealth.length,
      fresh: ratesWithHealth.filter((rate) => rate.isFresh).length,
      verifiedFresh: ratesWithHealth.filter((rate) => rate.isVerifiedFresh)
        .length,
      indicative: ratesWithHealth.filter((rate) => rate.isIndicative).length,
    },
  };
}
