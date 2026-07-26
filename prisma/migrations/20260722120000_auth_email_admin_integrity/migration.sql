-- Strengthen the Auth.js tables and add the operational data needed by the
-- onboarding-email outbox and admin dashboard.

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "EmailKind" AS ENUM ('WELCOME');

-- CreateEnum
CREATE TYPE "EmailStatus" AS ENUM ('PENDING', 'PROCESSING', 'SENT', 'FAILED');

-- CreateEnum
CREATE TYPE "PofAmountScope" AS ENUM ('TOTAL_ESTIMATE', 'LIVING_COSTS_ONLY', 'VARIABLE_REQUIREMENT');

-- Fail with a useful message instead of letting a later primary-key statement
-- fail ambiguously on databases that accumulated invalid legacy rows.
DO $$
DECLARE
  table_name TEXT;
  duplicate_count BIGINT;
BEGIN
  FOREACH table_name IN ARRAY ARRAY['Account', 'Session', 'PofRule', 'StudyIntake', 'UserTimeline']
  LOOP
    EXECUTE format(
      'SELECT count(*) FROM (SELECT id FROM %I GROUP BY id HAVING count(*) > 1) duplicates',
      table_name
    ) INTO duplicate_count;

    IF duplicate_count > 0 THEN
      RAISE EXCEPTION 'Cannot add a primary key to %: % duplicate id value(s) exist',
        table_name,
        duplicate_count;
    END IF;
  END LOOP;
END $$;

-- AlterTable
ALTER TABLE "User"
  ALTER COLUMN "emailVerified" DROP DEFAULT,
  ALTER COLUMN "image" DROP NOT NULL,
  ADD COLUMN "role" "UserRole" NOT NULL DEFAULT 'USER',
  ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "lastLoginAt" TIMESTAMP(3);

-- AddPrimaryKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");
ALTER TABLE "Session" ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");
ALTER TABLE "PofRule" ADD CONSTRAINT "PofRule_pkey" PRIMARY KEY ("id");
ALTER TABLE "StudyIntake" ADD CONSTRAINT "StudyIntake_pkey" PRIMARY KEY ("id");
ALTER TABLE "UserTimeline" ADD CONSTRAINT "UserTimeline_pkey" PRIMARY KEY ("id");

-- Remove indexes that duplicate the countries' and purposes' primary keys.
DROP INDEX "Country_id_key";
DROP INDEX "VisaPurpose_id_key";

-- AlterTable
ALTER TABLE "PofRule"
  ALTER COLUMN "statementMonths" DROP NOT NULL,
  ALTER COLUMN "statementMonths" DROP DEFAULT,
  ADD COLUMN "isActive" BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN "ruleVersion" TEXT NOT NULL DEFAULT '2026.1',
  ADD COLUMN "holdingPeriodDays" INTEGER,
  ADD COLUMN "documentMaxAgeDays" INTEGER,
  ADD COLUMN "amountScope" "PofAmountScope" NOT NULL DEFAULT 'VARIABLE_REQUIREMENT',
  ADD COLUMN "sourceUrl" TEXT,
  ADD COLUMN "sourceCheckedAt" TIMESTAMP(3),
  ADD COLUMN "effectiveFrom" TIMESTAMP(3),
  ADD COLUMN "effectiveTo" TIMESTAMP(3);

-- Existing FX rows were seeded reference values, not verified live quotes.
ALTER TABLE "FxRate"
  ADD COLUMN "source" TEXT NOT NULL DEFAULT 'seed-reference',
  ADD COLUMN "isIndicative" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "UserTimeline"
  ADD COLUMN "intakeKey" TEXT,
  ADD COLUMN "calculatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN "ruleVersion" TEXT,
  ADD COLUMN "fxRateUsed" DOUBLE PRECISION;

UPDATE "UserTimeline"
SET "intakeKey" = to_char("intakeDate", 'YYYY-MM')
WHERE "intakeKey" IS NULL;

ALTER TABLE "UserTimeline" ALTER COLUMN "intakeKey" SET NOT NULL;

DO $$
DECLARE
  duplicate_count BIGINT;
BEGIN
  SELECT count(*)
  INTO duplicate_count
  FROM (
    SELECT "userId", "countryId", "purposeId", "intakeKey"
    FROM "UserTimeline"
    GROUP BY "userId", "countryId", "purposeId", "intakeKey"
    HAVING count(*) > 1
  ) duplicates;

  IF duplicate_count > 0 THEN
    RAISE EXCEPTION
      'Cannot add timeline idempotency constraint: % duplicate user/country/purpose/intake group(s) exist',
      duplicate_count;
  END IF;
END $$;

-- CreateTable
CREATE TABLE "EmailDelivery" (
  "id" TEXT NOT NULL,
  "eventKey" TEXT NOT NULL,
  "kind" "EmailKind" NOT NULL,
  "status" "EmailStatus" NOT NULL DEFAULT 'PENDING',
  "userId" TEXT NOT NULL,
  "recipient" TEXT NOT NULL,
  "payload" JSONB NOT NULL,
  "attempts" INTEGER NOT NULL DEFAULT 0,
  "nextAttemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "lockedAt" TIMESTAMP(3),
  "lastAttemptAt" TIMESTAMP(3),
  "sentAt" TIMESTAMP(3),
  "providerMessageId" TEXT,
  "lastError" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "EmailDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminAuditLog" (
  "id" TEXT NOT NULL,
  "actorId" TEXT,
  "action" TEXT NOT NULL,
  "entityType" TEXT,
  "entityId" TEXT,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "AdminAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "User_role_isActive_idx" ON "User"("role", "isActive");
CREATE INDEX "User_createdAt_idx" ON "User"("createdAt");
CREATE UNIQUE INDEX "UserTimeline_userId_countryId_purposeId_intakeKey_key"
  ON "UserTimeline"("userId", "countryId", "purposeId", "intakeKey");
CREATE INDEX "UserTimeline_userId_updatedAt_idx" ON "UserTimeline"("userId", "updatedAt");
CREATE INDEX "UserTimeline_countryId_purposeId_idx" ON "UserTimeline"("countryId", "purposeId");
CREATE UNIQUE INDEX "EmailDelivery_eventKey_key" ON "EmailDelivery"("eventKey");
CREATE UNIQUE INDEX "EmailDelivery_providerMessageId_key" ON "EmailDelivery"("providerMessageId");
CREATE INDEX "EmailDelivery_status_nextAttemptAt_idx" ON "EmailDelivery"("status", "nextAttemptAt");
CREATE INDEX "EmailDelivery_userId_createdAt_idx" ON "EmailDelivery"("userId", "createdAt");
CREATE INDEX "AdminAuditLog_actorId_createdAt_idx" ON "AdminAuditLog"("actorId", "createdAt");
CREATE INDEX "AdminAuditLog_entityType_entityId_idx" ON "AdminAuditLog"("entityType", "entityId");

-- AddForeignKey
ALTER TABLE "EmailDelivery"
  ADD CONSTRAINT "EmailDelivery_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "AdminAuditLog"
  ADD CONSTRAINT "AdminAuditLog_actorId_fkey"
  FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
