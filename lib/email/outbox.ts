import "server-only";

import { createHash } from "node:crypto";
import { Resend } from "resend";

import {
  EnvironmentConfigurationError,
  getAppUrl,
  getEmailConfig,
} from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { welcomeEmail } from "./templates";

const MAX_ATTEMPTS = 5;
const STALE_LOCK_MINUTES = 10;

type WelcomePayload = {
  name: string | null;
};

function eventKeyForWelcome(userId: string): string {
  return `welcome:v1:${userId}`;
}

function idempotencyKey(eventKey: string): string {
  return `smarrrt-${createHash("sha256").update(eventKey).digest("hex")}`;
}

function safeErrorMessage(error: unknown): string {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "object" &&
          error !== null &&
          "message" in error &&
          typeof error.message === "string"
        ? error.message
        : String(error);
  return message.replace(/[\r\n]+/g, " ").slice(0, 2_000);
}

function statusCodeFrom(error: unknown): number | undefined {
  if (
    typeof error === "object" &&
    error !== null &&
    "statusCode" in error &&
    typeof error.statusCode === "number"
  ) {
    return error.statusCode;
  }

  return undefined;
}

function isRetryable(error: unknown): boolean {
  if (error instanceof EnvironmentConfigurationError) return false;

  const statusCode = statusCodeFrom(error);
  return (
    statusCode === undefined ||
    statusCode === 408 ||
    statusCode === 409 ||
    statusCode === 425 ||
    statusCode === 429 ||
    statusCode >= 500
  );
}

function nextRetry(attempt: number): Date {
  const delayMinutes = Math.min(60, 2 ** Math.max(0, attempt - 1));
  return new Date(Date.now() + delayMinutes * 60_000);
}

function welcomePayload(value: unknown): WelcomePayload {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return { name: null };
  }

  const name = "name" in value && typeof value.name === "string"
    ? value.name
    : null;

  return { name };
}

export async function queueWelcomeEmail({
  userId,
  email,
  name,
}: {
  userId: string;
  email: string;
  name?: string | null;
}) {
  const recipient = email.trim().toLowerCase();

  return prisma.emailDelivery.upsert({
    where: { eventKey: eventKeyForWelcome(userId) },
    update: {},
    create: {
      eventKey: eventKeyForWelcome(userId),
      kind: "WELCOME",
      userId,
      recipient,
      payload: { name: name?.trim() || null },
    },
  });
}

async function deliverWelcomeEmail(delivery: {
  eventKey: string;
  recipient: string;
  payload: unknown;
}): Promise<string> {
  const config = getEmailConfig();
  const template = welcomeEmail({
    ...welcomePayload(delivery.payload),
    dashboardUrl: `${getAppUrl()}/dashboard`,
  });
  const resend = new Resend(config.apiKey);
  const { data, error } = await resend.emails.send(
    {
      from: config.from,
      to: delivery.recipient,
      replyTo: config.replyTo,
      subject: template.subject,
      html: template.html,
      text: template.text,
    },
    { idempotencyKey: idempotencyKey(delivery.eventKey) },
  );

  if (error) {
    const providerError = new Error(`Resend rejected the email: ${error.message}`);
    Object.assign(providerError, { statusCode: error.statusCode });
    throw providerError;
  }
  if (!data?.id) throw new Error("Resend accepted no message and returned no error.");

  return data.id;
}

export async function processEmailOutbox({
  limit = 10,
  eventKey,
}: {
  limit?: number;
  eventKey?: string;
} = {}) {
  const now = new Date();
  const staleBefore = new Date(now.getTime() - STALE_LOCK_MINUTES * 60_000);
  const take = Math.min(50, Math.max(1, Math.trunc(limit)));
  const exhausted = await prisma.emailDelivery.updateMany({
    where: {
      ...(eventKey ? { eventKey } : {}),
      OR: [
        { status: "PENDING", attempts: { gte: MAX_ATTEMPTS } },
        {
          status: "PROCESSING",
          attempts: { gte: MAX_ATTEMPTS },
          OR: [{ lockedAt: null }, { lockedAt: { lte: staleBefore } }],
        },
      ],
    },
    data: {
      status: "FAILED",
      lockedAt: null,
    },
  });
  const dueState = {
    attempts: { lt: MAX_ATTEMPTS },
    OR: [
      { status: "PENDING" as const, nextAttemptAt: { lte: now } },
      {
        status: "PROCESSING" as const,
        OR: [{ lockedAt: null }, { lockedAt: { lte: staleBefore } }],
      },
    ],
  };
  const candidates = await prisma.emailDelivery.findMany({
    where: {
      ...(eventKey ? { eventKey } : {}),
      ...dueState,
    },
    orderBy: [{ nextAttemptAt: "asc" }, { createdAt: "asc" }],
    take,
  });
  const result = {
    scanned: candidates.length + exhausted.count,
    sent: 0,
    retried: 0,
    failed: exhausted.count,
  };

  for (const candidate of candidates) {
    const claimTime = new Date();
    const claimed = await prisma.emailDelivery.updateMany({
      where: { id: candidate.id, ...dueState },
      data: {
        status: "PROCESSING",
        attempts: { increment: 1 },
        lockedAt: claimTime,
        lastAttemptAt: claimTime,
        lastError: null,
      },
    });

    if (claimed.count !== 1) continue;

    const attempt = candidate.attempts + 1;

    try {
      const providerMessageId = await deliverWelcomeEmail(candidate);

      const finalized = await prisma.emailDelivery.updateMany({
        where: {
          id: candidate.id,
          status: "PROCESSING",
          lockedAt: claimTime,
        },
        data: {
          status: "SENT",
          providerMessageId,
          sentAt: new Date(),
          lockedAt: null,
          lastError: null,
        },
      });
      if (finalized.count === 1) {
        result.sent += 1;
      } else {
        console.warn(
          `[email/outbox] Lease lost before finalizing ${candidate.eventKey}`,
        );
      }
    } catch (error) {
      const shouldRetry = attempt < MAX_ATTEMPTS && isRetryable(error);

      const finalized = await prisma.emailDelivery.updateMany({
        where: {
          id: candidate.id,
          status: "PROCESSING",
          lockedAt: claimTime,
        },
        data: {
          status: shouldRetry ? "PENDING" : "FAILED",
          nextAttemptAt: shouldRetry ? nextRetry(attempt) : candidate.nextAttemptAt,
          lockedAt: null,
          lastError: safeErrorMessage(error),
        },
      });

      if (finalized.count === 1) {
        if (shouldRetry) result.retried += 1;
        else result.failed += 1;
      } else {
        console.warn(
          `[email/outbox] Lease lost while handling ${candidate.eventKey}`,
        );
      }

      console.error(
        `[email/outbox] ${candidate.eventKey} failed on attempt ${attempt}`,
        error,
      );
    }
  }

  return result;
}

export function welcomeEmailEventKey(userId: string): string {
  return eventKeyForWelcome(userId);
}
