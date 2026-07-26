import "server-only";

import { prisma } from "@/lib/prisma";
import { getFxRate } from "@/lib/fx";
import { calculatePof } from "@/lib/pof-engine";

const MAX_REQUEST_BYTES = 16_384;
const MAX_CURRENT_BALANCE = 1_000_000_000_000_000;
const MAX_INTAKE_YEARS_AHEAD = 10;
const REQUEST_FIELDS = new Set([
  "countryCode",
  "purposeSlug",
  "intakeDate",
  "currentBalance",
]);

export type PofRequestInput = {
  countryCode: string;
  purposeSlug: string;
  intakeDate: Date;
  intakeKey: string;
  currentBalance: number;
};

export class PofRequestError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "PofRequestError";
  }
}

function isJsonMediaType(contentType: string | null): boolean {
  if (!contentType) return false;

  const mediaType = contentType.split(";", 1)[0]?.trim().toLowerCase() ?? "";
  return (
    mediaType === "application/json" ||
    (mediaType.startsWith("application/") && mediaType.endsWith("+json"))
  );
}

function requireString(
  value: unknown,
  fieldName: string,
  maximumLength: number,
): string {
  if (typeof value !== "string") {
    throw new PofRequestError(fieldName + " must be a string.", 400);
  }

  const normalized = value.trim();

  if (!normalized || normalized.length > maximumLength) {
    throw new PofRequestError(
      fieldName + " must contain between 1 and " + maximumLength + " characters.",
      400,
    );
  }

  return normalized;
}

function parseIntakeDate(value: unknown): {
  intakeDate: Date;
  intakeKey: string;
} {
  const rawDate = requireString(value, "intakeDate", 10);
  const match = /^(\d{4})-(0[1-9]|1[0-2])-01$/.exec(rawDate);

  if (!match) {
    throw new PofRequestError(
      "intakeDate must identify an intake month using YYYY-MM-01.",
      400,
    );
  }

  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  const now = new Date();
  const requestedMonth = Date.UTC(year, monthIndex, 1);
  const currentMonth = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1);
  const latestMonth = Date.UTC(
    now.getUTCFullYear() + MAX_INTAKE_YEARS_AHEAD,
    now.getUTCMonth(),
    1,
  );

  if (requestedMonth < currentMonth) {
    throw new PofRequestError(
      "intakeDate cannot be earlier than the current month.",
      400,
    );
  }

  if (requestedMonth > latestMonth) {
    throw new PofRequestError(
      "intakeDate cannot be more than 10 years in the future.",
      400,
    );
  }

  return {
    // Noon UTC keeps the selected calendar month stable across server time zones.
    intakeDate: new Date(Date.UTC(year, monthIndex, 1, 12)),
    intakeKey: rawDate.slice(0, 7),
  };
}

function parseBody(value: unknown): PofRequestInput {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new PofRequestError("The request body must be a JSON object.", 400);
  }

  const body = value as Record<string, unknown>;
  const unexpectedField = Object.keys(body).find(
    (field) => !REQUEST_FIELDS.has(field),
  );

  if (unexpectedField) {
    throw new PofRequestError(
      "Unexpected request field: " + unexpectedField + ".",
      400,
    );
  }

  const countryCode = requireString(body.countryCode, "countryCode", 2)
    .toUpperCase();

  if (!/^[A-Z]{2}$/.test(countryCode)) {
    throw new PofRequestError(
      "countryCode must be a two-letter ISO country code.",
      400,
    );
  }

  const purposeSlug = requireString(body.purposeSlug, "purposeSlug", 64)
    .toLowerCase();

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(purposeSlug)) {
    throw new PofRequestError("purposeSlug is not valid.", 400);
  }

  if (
    typeof body.currentBalance !== "number" ||
    !Number.isFinite(body.currentBalance) ||
    body.currentBalance < 0 ||
    body.currentBalance > MAX_CURRENT_BALANCE
  ) {
    throw new PofRequestError(
      "currentBalance must be a finite, non-negative number.",
      400,
    );
  }

  const { intakeDate, intakeKey } = parseIntakeDate(body.intakeDate);

  return {
    countryCode,
    purposeSlug,
    intakeDate,
    intakeKey,
    currentBalance: body.currentBalance,
  };
}

export async function readPofRequest(request: Request): Promise<PofRequestInput> {
  if (!isJsonMediaType(request.headers.get("content-type"))) {
    throw new PofRequestError(
      "Content-Type must be application/json.",
      415,
    );
  }

  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    throw new PofRequestError("Request body is too large.", 413);
  }

  const rawBody = await request.text();
  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    throw new PofRequestError("Request body is too large.", 413);
  }

  let body: unknown;

  try {
    body = JSON.parse(rawBody);
  } catch {
    throw new PofRequestError("Request body contains invalid JSON.", 400);
  }

  return parseBody(body);
}

export async function calculatePofRequest(input: PofRequestInput) {
  const now = new Date();
  const [country, purpose] = await Promise.all([
    prisma.country.findFirst({
      where: {
        isoCode: input.countryCode,
        isActive: true,
      },
    }),
    prisma.visaPurpose.findFirst({
      where: {
        slug: input.purposeSlug,
        isActive: true,
      },
    }),
  ]);

  if (!country) {
    throw new PofRequestError(
      "This destination country is not currently supported.",
      404,
    );
  }

  if (!purpose) {
    throw new PofRequestError(
      "This visa purpose is not currently supported.",
      404,
    );
  }

  const [rule, fxRate] = await Promise.all([
    prisma.pofRule.findFirst({
      where: {
        countryId: country.id,
        purposeId: purpose.id,
        isActive: true,
        AND: [
          { OR: [{ effectiveFrom: null }, { effectiveFrom: { lte: now } }] },
          { OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }] },
        ],
      },
    }),
    getFxRate(country.currencyCode),
  ]);

  if (!rule) {
    throw new PofRequestError(
      "No POF rule is available for this country and visa purpose.",
      404,
    );
  }

  const calculation = calculatePof({
    rule,
    fxRate,
    intakeDate: input.intakeDate,
    currentBalanceNaira: input.currentBalance,
    asOfDate: now,
  });

  return {
    country,
    purpose,
    rule,
    fxRate,
    calculation,
  };
}
