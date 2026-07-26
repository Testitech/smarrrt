import "server-only";

import { timingSafeEqual } from "node:crypto";

export class EnvironmentConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvironmentConfigurationError";
  }
}

function configurationError(message: string): never {
  throw new EnvironmentConfigurationError(message);
}

function required(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    configurationError(
      `Missing required environment variable ${name}. See .env.example for setup instructions.`,
    );
  }

  return value;
}

function extractEmailAddress(value: string): string {
  const namedAddress = value.match(/<([^<>]+)>\s*$/)?.[1];
  return (namedAddress ?? value).trim().toLowerCase();
}

export function getDatabaseUrl(): string {
  const value = required("DATABASE_URL");

  if (!/^postgres(?:ql)?:\/\//i.test(value)) {
    configurationError(
      "DATABASE_URL must be a PostgreSQL connection string beginning with postgresql:// or postgres://.",
    );
  }

  return value;
}

export function getDatabasePoolSize(): number {
  const rawValue = process.env.DATABASE_POOL_SIZE?.trim();
  if (!rawValue) return 5;

  const value = Number(rawValue);
  if (!Number.isInteger(value) || value < 1 || value > 20) {
    configurationError(
      "DATABASE_POOL_SIZE must be an integer between 1 and 20.",
    );
  }

  return value;
}

export function getEmailConfig() {
  const apiKey = required("RESEND_API_KEY");
  const from = required("EMAIL_FROM");
  const fromAddress = extractEmailAddress(from);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromAddress)) {
    configurationError(
      "EMAIL_FROM must be an email address or a value such as 'Smarrrt <hello@example.com>'.",
    );
  }

  if (
    process.env.NODE_ENV === "production" &&
    fromAddress.endsWith("@resend.dev")
  ) {
    configurationError(
      "EMAIL_FROM cannot use Resend's sandbox domain in production. Verify a sending domain in Resend first.",
    );
  }

  return {
    apiKey,
    from,
    replyTo: process.env.EMAIL_REPLY_TO?.trim() || undefined,
  };
}

export function getAppUrl(): string {
  const configured =
    process.env.APP_URL?.trim() || process.env.AUTH_URL?.trim();

  if (!configured) {
    if (process.env.NODE_ENV !== "production") {
      return "http://localhost:3000";
    }

    configurationError(
      "APP_URL (or AUTH_URL) is required in production so email links use the correct origin.",
    );
  }

  try {
    return new URL(configured).origin;
  } catch {
    configurationError("APP_URL must be a valid absolute URL.");
  }
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;

  const normalized = email.trim().toLowerCase();
  const admins = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return admins.includes(normalized);
}

export function hasValidCronAuthorization(
  authorization: string | null,
): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  if (!secret || !authorization?.startsWith("Bearer ")) return false;

  const supplied = authorization.slice("Bearer ".length);
  const expectedBuffer = Buffer.from(secret);
  const suppliedBuffer = Buffer.from(supplied);

  return (
    expectedBuffer.length === suppliedBuffer.length &&
    timingSafeEqual(expectedBuffer, suppliedBuffer)
  );
}
