-- Add optional user-managed profile fields without changing authentication data.
ALTER TABLE "User"
  ADD COLUMN "profileImageUrl" TEXT,
  ADD COLUMN "username" TEXT;

CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- Better Content rows remain isolated from operational and financial data.
CREATE TABLE "CmsItem" (
  "collection" TEXT NOT NULL,
  "itemId" TEXT NOT NULL,
  "data" JSONB NOT NULL,
  "order" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CmsItem_pkey" PRIMARY KEY ("collection", "itemId")
);

CREATE INDEX "CmsItem_collection_order_idx" ON "CmsItem"("collection", "order");