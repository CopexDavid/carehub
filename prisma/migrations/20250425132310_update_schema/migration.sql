/*
  Warnings:

  - Added the required column `businessAccountId` to the `WhatsAppAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `WhatsAppAccount` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WhatsAppAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "phoneNumberId" TEXT NOT NULL,
    "businessAccountId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "webhookSecret" TEXT,
    "maxConcurrentMessages" INTEGER NOT NULL DEFAULT 10,
    "retryAttempts" INTEGER NOT NULL DEFAULT 3,
    "gptModel" TEXT NOT NULL DEFAULT 'gpt-3.5-turbo',
    "maxTokens" INTEGER NOT NULL DEFAULT 1000,
    "temperature" REAL NOT NULL DEFAULT 0.7,
    "totalMessages" INTEGER NOT NULL DEFAULT 0,
    "avgResponseTime" INTEGER NOT NULL DEFAULT 0,
    "lastActive" DATETIME,
    "expiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_WhatsAppAccount" ("accessToken", "createdAt", "expiresAt", "id", "isActive", "lastActive", "phoneNumber", "phoneNumberId", "updatedAt") SELECT "accessToken", "createdAt", "expiresAt", "id", "isActive", "lastActive", "phoneNumber", "phoneNumberId", "updatedAt" FROM "WhatsAppAccount";
DROP TABLE "WhatsAppAccount";
ALTER TABLE "new_WhatsAppAccount" RENAME TO "WhatsAppAccount";
CREATE UNIQUE INDEX "WhatsAppAccount_phoneNumber_key" ON "WhatsAppAccount"("phoneNumber");
CREATE UNIQUE INDEX "WhatsAppAccount_phoneNumberId_key" ON "WhatsAppAccount"("phoneNumberId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
