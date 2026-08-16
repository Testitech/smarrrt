-- Variable-requirement strategies have useful timing and guidance even when
-- no responsible fixed financial target exists. Existing numeric snapshots
-- remain unchanged.
ALTER TABLE "UserTimeline"
  ALTER COLUMN "targetAmount" DROP NOT NULL,
  ALTER COLUMN "monthlyDeposit" DROP NOT NULL,
  ADD COLUMN "amountScope" "PofAmountScope",
  ADD COLUMN "ruleSourceUrl" TEXT;
