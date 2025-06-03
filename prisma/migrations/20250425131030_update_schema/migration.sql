/*
  Warnings:

  - You are about to drop the column `avgResponseTime` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `businessAccountId` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `gptModel` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `maxConcurrentMessages` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `maxTokens` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `retryAttempts` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `temperature` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `totalMessages` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `WhatsAppAccount` table. All the data in the column will be lost.
  - You are about to drop the column `webhookSecret` on the `WhatsAppAccount` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WhatsAppAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT NOT NULL,
    "phoneNumberId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastActive" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_WhatsAppAccount" ("accessToken", "createdAt", "expiresAt", "id", "isActive", "lastActive", "phoneNumber", "phoneNumberId", "updatedAt") SELECT "accessToken", "createdAt", "expiresAt", "id", "isActive", coalesce("lastActive", CURRENT_TIMESTAMP) AS "lastActive", "phoneNumber", "phoneNumberId", "updatedAt" FROM "WhatsAppAccount";
DROP TABLE "WhatsAppAccount";
ALTER TABLE "new_WhatsAppAccount" RENAME TO "WhatsAppAccount";
CREATE UNIQUE INDEX "WhatsAppAccount_phoneNumber_key" ON "WhatsAppAccount"("phoneNumber");
CREATE UNIQUE INDEX "WhatsAppAccount_phoneNumberId_key" ON "WhatsAppAccount"("phoneNumberId");
CREATE TABLE "new_WhatsAppChat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT NOT NULL,
    "displayName" TEXT,
    "lastMessageAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppChat_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppChat" ("accountId", "displayName", "id", "lastMessageAt", "phoneNumber", "unreadCount") SELECT "accountId", "displayName", "id", "lastMessageAt", "phoneNumber", "unreadCount" FROM "WhatsAppChat";
DROP TABLE "WhatsAppChat";
ALTER TABLE "new_WhatsAppChat" RENAME TO "WhatsAppChat";
CREATE UNIQUE INDEX "WhatsAppChat_phoneNumber_accountId_key" ON "WhatsAppChat"("phoneNumber", "accountId");
CREATE TABLE "new_WhatsAppMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whatsappId" TEXT,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'text',
    "content" JSONB NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'sent',
    "accountId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppMessage_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WhatsAppMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "WhatsAppChat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppMessage" ("accountId", "chatId", "content", "from", "id", "status", "timestamp", "to", "type", "whatsappId") SELECT "accountId", "chatId", "content", "from", "id", "status", "timestamp", "to", "type", "whatsappId" FROM "WhatsAppMessage";
DROP TABLE "WhatsAppMessage";
ALTER TABLE "new_WhatsAppMessage" RENAME TO "WhatsAppMessage";
CREATE INDEX "WhatsAppMessage_chatId_idx" ON "WhatsAppMessage"("chatId");
CREATE INDEX "WhatsAppMessage_accountId_idx" ON "WhatsAppMessage"("accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
