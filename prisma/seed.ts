import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { createId } from "@paralleldrive/cuid2";
import "dotenv/config";

const CONNECTION_TIMEOUT_MS = 20_000;
const CONNECTION_ATTEMPTS = 3;
const CONNECTION_RETRY_DELAY_MS = 1_000;

function getDirectDatabaseUrl() {
  const value =
    process.env.DIRECT_URL?.trim() || process.env.DATABASE_URL?.trim();

  if (!value) {
    throw new Error(
      "DIRECT_URL or DATABASE_URL is required to seed the database. Add a direct PostgreSQL connection URL to your environment.",
    );
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(value);
  } catch {
    throw new Error(
      "DATABASE_URL is invalid. PrismaPg requires a valid direct PostgreSQL URL.",
    );
  }

  if (!["postgres:", "postgresql:"].includes(parsedUrl.protocol)) {
    throw new Error(
      `DATABASE_URL must use postgres:// or postgresql:// for PrismaPg; received ${parsedUrl.protocol || "an unknown protocol"}.`,
    );
  }

  if (!parsedUrl.hostname) {
    throw new Error("DATABASE_URL must include a PostgreSQL host.");
  }

  return value;
}

const databaseUrl = getDirectDatabaseUrl();

const pool = new Pool({
  connectionString: databaseUrl,
  connectionTimeoutMillis: CONNECTION_TIMEOUT_MS,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

type PofRuleSeed = {
  where: {
    countryId_purposeId: {
      countryId: string;
      purposeId: string;
    };
  };
  create: {
    id: string;
    countryId: string;
    purposeId: string;
    safeBufferMonths: number;
    cautionBufferMonths: number;
    riskyBufferMonths: number;
    minAmountForeign: number;
    requiresHistory: boolean;
    statementMonths: number | null;
    analysisText: string;
    nigerianSpecific: string;
  };
  metadata: {
    isActive: boolean;
    ruleVersion: string;
    holdingPeriodDays: number | null;
    documentMaxAgeDays: number | null;
    amountScope:
      | "TOTAL_ESTIMATE"
      | "LIVING_COSTS_ONLY"
      | "VARIABLE_REQUIREMENT";
    sourceUrl: string;
    sourceCheckedAt: Date;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
  };
};

async function upsertPofRule({ where, create, metadata }: PofRuleSeed) {
  return prisma.pofRule.upsert({
    where,
    update: {
      safeBufferMonths: create.safeBufferMonths,
      cautionBufferMonths: create.cautionBufferMonths,
      riskyBufferMonths: create.riskyBufferMonths,
      minAmountForeign: create.minAmountForeign,
      requiresHistory: create.requiresHistory,
      statementMonths: create.statementMonths,
      analysisText: create.analysisText,
      nigerianSpecific: create.nigerianSpecific,
      ...metadata,
    },
    create: { ...create, ...metadata },
  });
}

const SOURCE_CHECKED_AT = new Date("2026-07-22T00:00:00.000Z");
const ADDITIONAL_SOURCE_CHECKED_AT = new Date("2026-07-27T00:00:00.000Z");

const RULE_METADATA = {
  GB_STUDY: {
    isActive: false,
    ruleVersion: "2026-07-gb-study-variable",
    holdingPeriodDays: 28,
    documentMaxAgeDays: 31,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl: "https://www.gov.uk/student-visa/money",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  GB_VISIT: {
    isActive: true,
    ruleVersion: "2026-07-gb-visit-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-v-visitor",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  GB_BUSINESS: {
    isActive: true,
    ruleVersion: "2026-07-gb-business-visitor-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-v-visitor",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  GB_WORK: {
    isActive: true,
    ruleVersion: "2026-07-gb-skilled-worker-maintenance",
    holdingPeriodDays: 28,
    documentMaxAgeDays: 31,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-skilled-worker",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  US_STUDY: {
    isActive: false,
    ruleVersion: "2026-07-us-study-i20",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  US_VISIT: {
    isActive: true,
    ruleVersion: "2026-07-us-b2-visitor-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  US_BUSINESS: {
    isActive: true,
    ruleVersion: "2026-07-us-b1-business-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl: "https://travel.state.gov/content/travel/en/us-visas/business.html",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  CA_STUDY: {
    isActive: true,
    ruleVersion: "2026-07-ca-study-base",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: new Date("2025-09-01T00:00:00.000Z"),
    effectiveTo: null,
  },
  CA_WORK: {
    isActive: true,
    ruleVersion: "2026-07-ca-work-permit-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/permit-outside/eligibility.html",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  CA_VISIT: {
    isActive: true,
    ruleVersion: "2026-07-ca-visitor-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eligibility.html",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  AU_STUDY: {
    isActive: true,
    ruleVersion: "2026-07-au-study-base",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl:
      "https://immi.homeaffairs.gov.au/Visa-subsite/Pages/student/500-student.aspx",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  AU_VISIT: {
    isActive: true,
    ruleVersion: "2026-07-au-visitor-600-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/tourist-stream-overseas",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  AU_BUSINESS: {
    isActive: true,
    ruleVersion: "2026-07-au-business-visitor-600-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600/business-visitor-stream",
    sourceCheckedAt: ADDITIONAL_SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  NL_STUDY: {
    isActive: true,
    ruleVersion: "2026-nl-study-base",
    holdingPeriodDays: null,
    documentMaxAgeDays: 92,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl: "https://ind.nl/en/required-amounts-income-requirements",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: new Date("2026-01-01T00:00:00.000Z"),
    effectiveTo: new Date("2026-12-31T23:59:59.999Z"),
  },
  FI_STUDY: {
    isActive: true,
    ruleVersion: "2026-07-fi-study-base",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl: "https://migri.fi/en/income-requirement-for-students",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  FR_STUDY: {
    isActive: false,
    ruleVersion: "2026-08-fr-study-base",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl: "https://france-visas.gouv.fr/en/web/france-visas",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: new Date("2026-08-01T00:00:00.000Z"),
    effectiveTo: null,
  },
  SE_STUDY: {
    isActive: true,
    ruleVersion: "2026-se-study-base",
    holdingPeriodDays: null,
    documentMaxAgeDays: 123,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl:
      "https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: new Date("2026-01-01T00:00:00.000Z"),
    effectiveTo: new Date("2026-12-31T23:59:59.999Z"),
  },
  MT_STUDY: {
    isActive: false,
    ruleVersion: "2026-07-mt-study-variable",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "VARIABLE_REQUIREMENT",
    sourceUrl:
      "https://identita.gov.mt/frequently-asked-questions/expatriates/non-eu-non-employment/general-queries/",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: null,
    effectiveTo: null,
  },
  ES_STUDY: {
    isActive: false,
    ruleVersion: "2026-es-study-duration",
    holdingPeriodDays: null,
    documentMaxAgeDays: null,
    amountScope: "LIVING_COSTS_ONLY",
    sourceUrl: "https://inclusion.gob.es/en/web/migraciones/w/estancia-por-estudios",
    sourceCheckedAt: SOURCE_CHECKED_AT,
    effectiveFrom: new Date("2026-01-01T00:00:00.000Z"),
    effectiveTo: new Date("2026-12-31T23:59:59.999Z"),
  },
} as const;

async function verifyDatabaseConnection() {
  let lastError: unknown;

  for (let attempt = 1; attempt <= CONNECTION_ATTEMPTS; attempt += 1) {
    try {
      const result = await pool.query<{ connected: number }>(
        "SELECT 1 AS connected",
      );

      if (result.rows[0]?.connected !== 1) {
        throw new Error(
          "The database returned an unexpected health-check result.",
        );
      }

      console.log("✅ Database connection verified");
      return;
    } catch (error) {
      lastError = error;

      if (attempt < CONNECTION_ATTEMPTS) {
        console.warn(
          `Database connection attempt ${attempt} failed; retrying...`,
        );
        await new Promise((resolve) =>
          setTimeout(resolve, CONNECTION_RETRY_DELAY_MS * attempt),
        );
      }
    }
  }

  const detail = lastError instanceof Error ? ` ${lastError.message}` : "";

  throw new Error(
    `Database connection check failed after ${CONNECTION_ATTEMPTS} attempts (timeout: ${CONNECTION_TIMEOUT_MS}ms each). Verify that DIRECT_URL or DATABASE_URL is a reachable direct PostgreSQL URL.${detail}`,
    { cause: lastError },
  );
}

async function main() {
  console.log("🌱 Seeding Smarrrt database...");
  await verifyDatabaseConnection();

  // ─────────────────────────────────────────
  // VISA PURPOSES
  // ─────────────────────────────────────────

  console.log("Seeding visa purposes...");

  const studyPurpose = await prisma.visaPurpose.upsert({
    where: { slug: "study" },
    update: {
      name: "Study",
      icon: "🎓",
      description:
        "Student visa for undergraduate, postgraduate or language courses",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Study",
      slug: "study",
      icon: "🎓",
      description:
        "Student visa for undergraduate, postgraduate or language courses",
      isActive: true,
    },
  });

  const workPurpose = await prisma.visaPurpose.upsert({
    where: { slug: "work" },
    update: {
      name: "Work",
      icon: "💼",
      description: "Work permit or skilled worker visa",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Work",
      slug: "work",
      icon: "💼",
      description: "Work permit or skilled worker visa",
      isActive: true,
    },
  });

  const visitPurpose = await prisma.visaPurpose.upsert({
    where: { slug: "visit" },
    update: {
      name: "Visit",
      icon: "✈️",
      description: "Short stay visit visa for family or friends",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Visit",
      slug: "visit",
      icon: "✈️",
      description: "Short stay visit visa for family or friends",
      isActive: true,
    },
  });

  const tourismPurpose = await prisma.visaPurpose.upsert({
    where: { slug: "tourism" },
    update: {
      name: "Tourism",
      icon: "🏖️",
      description: "Tourist visa for leisure travel",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Tourism",
      slug: "tourism",
      icon: "🏖️",
      description: "Tourist visa for leisure travel",
      isActive: true,
    },
  });

  const businessPurpose = await prisma.visaPurpose.upsert({
    where: { slug: "business" },
    update: {
      name: "Business",
      icon: "🤝",
      description: "Business visa for conferences, meetings or trade",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Business",
      slug: "business",
      icon: "🤝",
      description: "Business visa for conferences, meetings or trade",
      isActive: true,
    },
  });

  const prPurpose = await prisma.visaPurpose.upsert({
    where: { slug: "permanent-residency" },
    update: {
      name: "Permanent Residency",
      icon: "🏡",
      description: "Permanent residency or settlement application",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Permanent Residency",
      slug: "permanent-residency",
      icon: "🏡",
      description: "Permanent residency or settlement application",
      isActive: true,
    },
  });

  const purposes = [
    studyPurpose,
    workPurpose,
    visitPurpose,
    tourismPurpose,
    businessPurpose,
    prPurpose,
  ];
  console.log(`✅ ${purposes.length} visa purposes seeded`);

  // ─────────────────────────────────────────
  // FX RATES
  // Countries reference these rows, so they must exist first.
  // ─────────────────────────────────────────

  console.log("Seeding FX rates...");

  const fxRates = [
    { currencyCode: "GBP", cbnRate: 1980, parallelRate: 2050, source: "seed-reference", isIndicative: true },
    { currencyCode: "USD", cbnRate: 1580, parallelRate: 1650, source: "seed-reference", isIndicative: true },
    { currencyCode: "CAD", cbnRate: 1160, parallelRate: 1220, source: "seed-reference", isIndicative: true },
    { currencyCode: "EUR", cbnRate: 1720, parallelRate: 1790, source: "seed-reference", isIndicative: true },
    { currencyCode: "AUD", cbnRate: 1020, parallelRate: 1075, source: "seed-reference", isIndicative: true },
    { currencyCode: "SEK", cbnRate: 152, parallelRate: 160, source: "seed-reference", isIndicative: true },
  ] as const;

  // Never overwrite operational quotes or refresh their timestamps during a
  // seed. These rows are only a clearly-labelled first-run reference set.
  await prisma.fxRate.createMany({ data: [...fxRates], skipDuplicates: true });

  console.log(`✅ ${fxRates.length} FX rates seeded`);

  // ─────────────────────────────────────────
  // COUNTRIES
  // ─────────────────────────────────────────

  console.log("Seeding countries...");

  const gbCountry = await prisma.country.upsert({
    where: { isoCode: "GB" },
    update: {
      name: "United Kingdom",
      currencyCode: "GBP",
      flagEmoji: "🇬🇧",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "United Kingdom",
      isoCode: "GB",
      currencyCode: "GBP",
      flagEmoji: "🇬🇧",
      isActive: true,
    },
  });

  const usCountry = await prisma.country.upsert({
    where: { isoCode: "US" },
    update: {
      name: "United States",
      currencyCode: "USD",
      flagEmoji: "🇺🇸",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "United States",
      isoCode: "US",
      currencyCode: "USD",
      flagEmoji: "🇺🇸",
      isActive: true,
    },
  });

  const caCountry = await prisma.country.upsert({
    where: { isoCode: "CA" },
    update: {
      name: "Canada",
      currencyCode: "CAD",
      flagEmoji: "🇨🇦",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Canada",
      isoCode: "CA",
      currencyCode: "CAD",
      flagEmoji: "🇨🇦",
      isActive: true,
    },
  });

  const nlCountry = await prisma.country.upsert({
    where: { isoCode: "NL" },
    update: {
      name: "Netherlands",
      currencyCode: "EUR",
      flagEmoji: "🇳🇱",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Netherlands",
      isoCode: "NL",
      currencyCode: "EUR",
      flagEmoji: "🇳🇱",
      isActive: true,
    },
  });

  const fiCountry = await prisma.country.upsert({
    where: { isoCode: "FI" },
    update: {
      name: "Finland",
      currencyCode: "EUR",
      flagEmoji: "🇫🇮",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Finland",
      isoCode: "FI",
      currencyCode: "EUR",
      flagEmoji: "🇫🇮",
      isActive: true,
    },
  });

  const auCountry = await prisma.country.upsert({
    where: { isoCode: "AU" },
    update: {
      name: "Australia",
      currencyCode: "AUD",
      flagEmoji: "🇦🇺",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Australia",
      isoCode: "AU",
      currencyCode: "AUD",
      flagEmoji: "🇦🇺",
      isActive: true,
    },
  });

  const frCountry = await prisma.country.upsert({
    where: { isoCode: "FR" },
    update: {
      name: "France",
      currencyCode: "EUR",
      flagEmoji: "🇫🇷",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "France",
      isoCode: "FR",
      currencyCode: "EUR",
      flagEmoji: "🇫🇷",
      isActive: true,
    },
  });

  const seCountry = await prisma.country.upsert({
    where: { isoCode: "SE" },
    update: {
      name: "Sweden",
      currencyCode: "SEK",
      flagEmoji: "🇸🇪",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Sweden",
      isoCode: "SE",
      currencyCode: "SEK",
      flagEmoji: "🇸🇪",
      isActive: true,
    },
  });

  const mtCountry = await prisma.country.upsert({
    where: { isoCode: "MT" },
    update: {
      name: "Malta",
      currencyCode: "EUR",
      flagEmoji: "🇲🇹",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Malta",
      isoCode: "MT",
      currencyCode: "EUR",
      flagEmoji: "🇲🇹",
      isActive: true,
    },
  });

  const esCountry = await prisma.country.upsert({
    where: { isoCode: "ES" },
    update: {
      name: "Spain",
      currencyCode: "EUR",
      flagEmoji: "🇪🇸",
      isActive: true,
    },
    create: {
      id: createId(),
      name: "Spain",
      isoCode: "ES",
      currencyCode: "EUR",
      flagEmoji: "🇪🇸",
      isActive: true,
    },
  });

  const countries = [
    gbCountry,
    usCountry,
    caCountry,
    nlCountry,
    fiCountry,
    auCountry,
    frCountry,
    seCountry,
    mtCountry,
    esCountry,
  ];
  console.log(`✅ ${countries.length} countries seeded`);

  // ─────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────

  const getCountry = (isoCode: string) => {
    const c = countries.find((c) => c.isoCode === isoCode);
    if (!c) throw new Error(`Country not found: ${isoCode}`);
    return c;
  };

  const getPurpose = (slug: string) => {
    const p = purposes.find((p) => p.slug === slug);
    if (!p) throw new Error(`Purpose not found: ${slug}`);
    return p;
  };

  // ─────────────────────────────────────────
  // STUDY INTAKES
  // ─────────────────────────────────────────

  console.log("Seeding study intakes...");

  // UK
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("GB").id, intakeMonth: 1 },
    },
    update: { intakeName: "January Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      intakeMonth: 1,
      intakeName: "January Intake",
      isMainIntake: false,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("GB").id, intakeMonth: 5 },
    },
    update: { intakeName: "May Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      intakeMonth: 5,
      intakeName: "May Intake",
      isMainIntake: false,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("GB").id, intakeMonth: 9 },
    },
    update: { intakeName: "September Intake", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      intakeMonth: 9,
      intakeName: "September Intake",
      isMainIntake: true,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: {
        countryId: getCountry("GB").id,
        intakeMonth: 10,
      },
    },
    update: { intakeName: "October Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      intakeMonth: 10,
      intakeName: "October Intake",
      isMainIntake: false,
    },
  });

  // USA
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("US").id, intakeMonth: 1 },
    },
    update: { intakeName: "Spring Semester", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("US").id,
      intakeMonth: 1,
      intakeName: "Spring Semester",
      isMainIntake: false,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("US").id, intakeMonth: 8 },
    },
    update: { intakeName: "Fall Semester", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("US").id,
      intakeMonth: 8,
      intakeName: "Fall Semester",
      isMainIntake: true,
    },
  });

  // Canada
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("CA").id, intakeMonth: 1 },
    },
    update: { intakeName: "Winter Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("CA").id,
      intakeMonth: 1,
      intakeName: "Winter Intake",
      isMainIntake: false,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("CA").id, intakeMonth: 5 },
    },
    update: { intakeName: "Summer Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("CA").id,
      intakeMonth: 5,
      intakeName: "Summer Intake",
      isMainIntake: false,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("CA").id, intakeMonth: 9 },
    },
    update: { intakeName: "Fall Intake", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("CA").id,
      intakeMonth: 9,
      intakeName: "Fall Intake",
      isMainIntake: true,
    },
  });

  // Australia
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("AU").id, intakeMonth: 2 },
    },
    update: { intakeName: "Semester 1", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("AU").id,
      intakeMonth: 2,
      intakeName: "Semester 1",
      isMainIntake: true,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("AU").id, intakeMonth: 7 },
    },
    update: { intakeName: "Semester 2", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("AU").id,
      intakeMonth: 7,
      intakeName: "Semester 2",
      isMainIntake: false,
    },
  });

  // Netherlands
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("NL").id, intakeMonth: 9 },
    },
    update: { intakeName: "September Intake", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("NL").id,
      intakeMonth: 9,
      intakeName: "September Intake",
      isMainIntake: true,
    },
  });

  // Finland
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("FI").id, intakeMonth: 9 },
    },
    update: { intakeName: "Autumn Semester", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("FI").id,
      intakeMonth: 9,
      intakeName: "Autumn Semester",
      isMainIntake: true,
    },
  });

  // France
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("FR").id, intakeMonth: 9 },
    },
    update: { intakeName: "Autumn Intake", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("FR").id,
      intakeMonth: 9,
      intakeName: "Autumn Intake",
      isMainIntake: true,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("FR").id, intakeMonth: 1 },
    },
    update: { intakeName: "Spring Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("FR").id,
      intakeMonth: 1,
      intakeName: "Spring Intake",
      isMainIntake: false,
    },
  });

  // Sweden
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("SE").id, intakeMonth: 9 },
    },
    update: { intakeName: "Autumn Semester", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("SE").id,
      intakeMonth: 9,
      intakeName: "Autumn Semester",
      isMainIntake: true,
    },
  });

  // Malta
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: {
        countryId: getCountry("MT").id,
        intakeMonth: 10,
      },
    },
    update: { intakeName: "October Intake", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("MT").id,
      intakeMonth: 10,
      intakeName: "October Intake",
      isMainIntake: true,
    },
  });

  // Spain
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("ES").id, intakeMonth: 9 },
    },
    update: { intakeName: "Autumn Intake", isMainIntake: true },
    create: {
      id: createId(),
      countryId: getCountry("ES").id,
      intakeMonth: 9,
      intakeName: "Autumn Intake",
      isMainIntake: true,
    },
  });
  await prisma.studyIntake.upsert({
    where: {
      countryId_intakeMonth: { countryId: getCountry("ES").id, intakeMonth: 1 },
    },
    update: { intakeName: "Spring Intake", isMainIntake: false },
    create: {
      id: createId(),
      countryId: getCountry("ES").id,
      intakeMonth: 1,
      intakeName: "Spring Intake",
      isMainIntake: false,
    },
  });

  console.log("✅ Study intakes seeded");

  // ─────────────────────────────────────────
  // POF RULES
  // ─────────────────────────────────────────

  console.log("Seeding POF rules...");

  // ── UK STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.GB_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("GB").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: null,
      analysisText:
        "This route cannot use one fixed amount: UK student funds vary by study location, course length and unpaid tuition. The calculator is disabled until those inputs are collected. UKVI also requires eligible funds to be held for 28 consecutive days.",
      nigerianSpecific:
        "Plan currency conversion and bank-document lead time early, and retain evidence showing where the funds came from. Confirm the latest requirements on the linked GOV.UK source before applying.",
    },
  });

  // ── UK VISIT ──
  await upsertPofRule({
    metadata: RULE_METADATA.GB_VISIT,
    where: {
      countryId_purposeId: {
        countryId: getCountry("GB").id,
        purposeId: getPurpose("visit").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      purposeId: getPurpose("visit").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "The UK Standard Visitor route has no official fixed minimum. The required amount depends on the trip, accommodation, dependants and the applicant's circumstances, so this calculator rule is disabled.",
      nigerianSpecific:
        "Provide consistent evidence that the trip is affordable and explain the source of material credits. Use the linked Immigration Rules as the authority.",
    },
  });

  // ── UK BUSINESS VISITOR ──
  await upsertPofRule({
    metadata: RULE_METADATA.GB_BUSINESS,
    where: {
      countryId_purposeId: {
        countryId: getCountry("GB").id,
        purposeId: getPurpose("business").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      purposeId: getPurpose("business").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: null,
      analysisText:
        "The UK business visitor route sits under Standard Visitor rules and has no single official minimum funds amount. The required evidence depends on the trip length, accommodation, sponsor support, business activity and applicant circumstances.",
      nigerianSpecific:
        "Prepare a clear trip budget, employer or host invitation, evidence of who pays each cost, and bank records that explain material credits. This is supported as variable guidance only, not as a fixed Naira target.",
    },
  });

  // ── UK WORK ──
  await upsertPofRule({
    metadata: RULE_METADATA.GB_WORK,
    where: {
      countryId_purposeId: {
        countryId: getCountry("GB").id,
        purposeId: getPurpose("work").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("GB").id,
      purposeId: getPurpose("work").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 1270,
      requiresHistory: true,
      statementMonths: null,
      analysisText:
        "UK Skilled Worker maintenance is usually {{minAmountForeign}} {{currencyCode}}, held for 28 days, unless the sponsor certifies maintenance or another exemption applies. Because sponsor certification can change the required applicant-held amount, this route is marked variable.",
      nigerianSpecific:
        "Check the Certificate of Sponsorship for maintenance certification before funding the account. If relying on personal funds, keep the 28-day balance clean and make sure day 28 is within the official evidence window.",
    },
  });

  // ── USA VISIT ──
  await upsertPofRule({
    metadata: RULE_METADATA.US_VISIT,
    where: {
      countryId_purposeId: {
        countryId: getCountry("US").id,
        purposeId: getPurpose("visit").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("US").id,
      purposeId: getPurpose("visit").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: null,
      analysisText:
        "US B-2 visitor funding is assessed against the applicant's stated trip and circumstances. There is no universal fixed proof-of-funds minimum in the public State Department visitor guidance.",
      nigerianSpecific:
        "Use a realistic itinerary, explain who pays for the trip, and keep bank evidence consistent with your income, ties and travel purpose. Smarrrt does not convert this into a fixed Naira target.",
    },
  });

  // ── USA BUSINESS ──
  await upsertPofRule({
    metadata: RULE_METADATA.US_BUSINESS,
    where: {
      countryId_purposeId: {
        countryId: getCountry("US").id,
        purposeId: getPurpose("business").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("US").id,
      purposeId: getPurpose("business").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: null,
      analysisText:
        "US B-1 business travel covers temporary business activities such as meetings, conferences and negotiations. Public guidance does not publish a single fixed funds amount; affordability depends on the activity, duration and support arrangements.",
      nigerianSpecific:
        "Keep invitation letters, conference registration, employer letters and bank evidence aligned. Avoid treating incidental reimbursements or host support as a replacement for a coherent applicant funding story.",
    },
  });

  // ── USA STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.US_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("US").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("US").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 6,
      cautionBufferMonths: 4,
      riskyBufferMonths: 2,
      minAmountForeign: 0,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "US student funding is institution-specific and comes from the educational, living and travel estimates on the applicant's Form I-20. This fixed-amount rule is disabled until an I-20 amount can be entered.",
      nigerianSpecific:
        "Use the amount shown by the school and retain clear evidence of the availability and source of funds. There is no universal three-month holding rule.",
    },
  });

  // ── CANADA STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.CA_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("CA").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("CA").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 6,
      cautionBufferMonths: 4,
      riskyBufferMonths: 2,
      minAmountForeign: 22895,
      requiresHistory: true,
      statementMonths: 4,
      analysisText:
        "The {{minAmountForeign}} {{currencyCode}} figure is the current one-person living-cost floor outside Quebec. It excludes tuition and transportation, and family size can increase it. The Naira estimate for this component is {{nairaTarget}}.",
      nigerianSpecific:
        "IRCC lists recent bank statements among accepted evidence. Keep clear records for the source of funds and add tuition, transport and any dependant amount before treating this as an application budget.",
    },
  });

  // ── CANADA WORK ──
  await upsertPofRule({
    metadata: RULE_METADATA.CA_WORK,
    where: {
      countryId_purposeId: {
        countryId: getCountry("CA").id,
        purposeId: getPurpose("work").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("CA").id,
      purposeId: getPurpose("work").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: null,
      analysisText:
        "Canada's general outside-Canada work-permit guidance requires enough money to support the applicant and family during the stay and to return home, but it does not publish one fixed amount for all work permits.",
      nigerianSpecific:
        "Build a route-specific budget around job location, first pay date, accommodation, dependants and return travel. Keep documents that show accessible funds and explain major deposits.",
    },
  });

  // ── CANADA VISIT ──
  await upsertPofRule({
    metadata: RULE_METADATA.CA_VISIT,
    where: {
      countryId_purposeId: {
        countryId: getCountry("CA").id,
        purposeId: getPurpose("visit").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("CA").id,
      purposeId: getPurpose("visit").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: 6,
      analysisText:
        "Canada visitor guidance says the amount needed depends on stay length and whether the applicant stays in a hotel or with friends or relatives. There is no single official minimum for every visitor.",
      nigerianSpecific:
        "Prepare six months of account history where requested, a clear visit budget, accommodation evidence and sponsor/host support documents if someone else is paying.",
    },
  });

  // ── AUSTRALIA STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.AU_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("AU").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("AU").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 5,
      cautionBufferMonths: 3,
      riskyBufferMonths: 1,
      minAmountForeign: 29710,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "The {{minAmountForeign}} {{currencyCode}} figure is the one-student annual living-cost component. A complete capacity assessment also includes travel, course fees and any family or school costs. The Naira estimate for this component is {{nairaTarget}}.",
      nigerianSpecific:
        "Use evidence that the funds are genuinely available and explain their source where requested. Check the current Genuine Student requirement and document checklist before applying.",
    },
  });

  // ── AUSTRALIA VISIT ──
  await upsertPofRule({
    metadata: RULE_METADATA.AU_VISIT,
    where: {
      countryId_purposeId: {
        countryId: getCountry("AU").id,
        purposeId: getPurpose("visit").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("AU").id,
      purposeId: getPurpose("visit").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: 3,
      analysisText:
        "Australia Visitor visa financial evidence is trip-specific. The official checklist asks for proof the applicant has enough money for the stay and to leave Australia, such as itemised bank statements, but no universal fixed minimum is published.",
      nigerianSpecific:
        "Use a realistic trip budget, three-month itemised statements where applicable, employment or business evidence, and clear support documents if a host or company pays costs.",
    },
  });

  // ── AUSTRALIA BUSINESS VISITOR ──
  await upsertPofRule({
    metadata: RULE_METADATA.AU_BUSINESS,
    where: {
      countryId_purposeId: {
        countryId: getCountry("AU").id,
        purposeId: getPurpose("business").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("AU").id,
      purposeId: getPurpose("business").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: 3,
      analysisText:
        "Australia's Business Visitor stream requires enough money, or access to enough money, to support the applicant while in Australia. The amount depends on the business activity, stay length, accommodation and support arrangements.",
      nigerianSpecific:
        "Align the invitation, employer letter, conference or trade documents, bank statements and company evidence. Treat Smarrrt's timeline as preparation guidance, not a fixed official threshold.",
    },
  });

  // ── NETHERLANDS STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.NL_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("NL").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("NL").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 13569.24,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "The 2026 IND university/HBO living-cost norm is {{minAmountForeign}} {{currencyCode}} for 12 months. Tuition is separate. The Naira estimate for this living-cost component is {{nairaTarget}}.",
      nigerianSpecific:
        "IND permits several funding routes with different evidence, including the applicant, an institution, a scholarship, a company or a private financier. Match the documents to the route used.",
    },
  });

  // ── FINLAND STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.FI_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("FI").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("FI").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 9600,
      requiresHistory: true,
      statementMonths: 6,
      analysisText:
        "Migri's one-year living-funds component is {{minAmountForeign}} {{currencyCode}}. Unpaid tuition must be available separately. The Naira estimate for the living-cost component is {{nairaTarget}}.",
      nigerianSpecific:
        "The funds must be in the applicant's account when applying, and Migri requests a bank statement covering the previous six months. Treat the product timeline as planning guidance, not an official holding period.",
    },
  });

  // ── FRANCE STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.FR_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("FR").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("FR").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 10530,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "France's student living-funds requirement changes on 1 August 2026. This fixed rule remains disabled until the calculator asks for the application date. The future 12-month component is {{minAmountForeign}} {{currencyCode}}.",
      nigerianSpecific:
        "Follow the current France-Visas and Campus France checklists for the applicant's location and planned application date.",
    },
  });

  // ── SWEDEN STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.SE_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("SE").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("SE").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 127872,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "The 2026 12-month maintenance component is {{minAmountForeign}} {{currencyCode}} for one student. Study duration, free food or housing, and accompanying family can change the total. Its Naira estimate is {{nairaTarget}}.",
      nigerianSpecific:
        "Use a qualifying personal bank statement issued within the official timing window and add any dependant amount before relying on the estimate.",
    },
  });

  // ── MALTA STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.MT_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("MT").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("MT").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 3,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 0,
      requiresHistory: true,
      statementMonths: 3,
      analysisText:
        "Malta uses different funding tests for study residence permits and Student National D visas, and the residence amount can depend on household circumstances. This fixed rule is disabled until the route and household inputs are modeled.",
      nigerianSpecific:
        "Use the Identità checklist for the exact route and keep the requested recent statement or transfer evidence.",
    },
  });

  // ── SPAIN STUDY ──
  await upsertPofRule({
    metadata: RULE_METADATA.ES_STUDY,
    where: {
      countryId_purposeId: {
        countryId: getCountry("ES").id,
        purposeId: getPurpose("study").id,
      },
    },
    create: {
      id: createId(),
      countryId: getCountry("ES").id,
      purposeId: getPurpose("study").id,
      safeBufferMonths: 4,
      cautionBufferMonths: 2,
      riskyBufferMonths: 1,
      minAmountForeign: 7200,
      requiresHistory: false,
      statementMonths: null,
      analysisText:
        "Spain's funding test is duration-based and changes with family and prepaid accommodation. The {{minAmountForeign}} {{currencyCode}} figure represents one applicant for exactly 12 months, so the rule is disabled until duration is an input.",
      nigerianSpecific:
        "Use the responsible Spanish consulate's current checklist for document form, translations and evidence period.",
    },
  });

  console.log("✅ POF rules seeded");
  console.log("🎉 Smarrrt database seeding complete!");
}

async function closeConnections() {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error("❌ Failed to disconnect Prisma:", error);
    process.exitCode = 1;
  }

  try {
    await pool.end();
  } catch (error) {
    console.error("❌ Failed to close the PostgreSQL pool:", error);
    process.exitCode = 1;
  }
}

void main()
  .catch((error: unknown) => {
    console.error("❌ Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(closeConnections);
