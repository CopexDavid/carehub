-- AlterTable
ALTER TABLE "MessageTemplate" ADD COLUMN "rejectionReason" TEXT;

-- CreateTable
CREATE TABLE "AssistantSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'CareHub Ассистент',
    "model" TEXT NOT NULL DEFAULT 'gpt-4-turbo-preview',
    "temperature" REAL NOT NULL DEFAULT 0.7,
    "maxTokens" INTEGER NOT NULL DEFAULT 1000,
    "prompt" TEXT NOT NULL DEFAULT 'Вы - дружелюбный и профессиональный ассистент компании CareHub.',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "AssistantSettings_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WhatsAppChat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT NOT NULL,
    "displayName" TEXT,
    "lastMessageAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "accountId" TEXT NOT NULL,
    "assistantEnabled" BOOLEAN NOT NULL DEFAULT true,
    "threadId" TEXT,
    CONSTRAINT "WhatsAppChat_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppChat" ("accountId", "displayName", "id", "lastMessageAt", "phoneNumber", "unreadCount") SELECT "accountId", "displayName", "id", "lastMessageAt", "phoneNumber", "unreadCount" FROM "WhatsAppChat";
DROP TABLE "WhatsAppChat";
ALTER TABLE "new_WhatsAppChat" RENAME TO "WhatsAppChat";
CREATE UNIQUE INDEX "WhatsAppChat_phoneNumber_accountId_key" ON "WhatsAppChat"("phoneNumber", "accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "AssistantSettings_accountId_key" ON "AssistantSettings"("accountId");

-- CreateIndex
CREATE INDEX "AssistantSettings_accountId_idx" ON "AssistantSettings"("accountId");
