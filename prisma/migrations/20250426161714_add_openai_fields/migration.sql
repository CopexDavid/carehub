/*
  Warnings:

  - Added the required column `openAiKey` to the `AssistantSettings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssistantSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'AI Ассистент',
    "model" TEXT NOT NULL DEFAULT 'gpt-3.5-turbo',
    "temperature" REAL NOT NULL DEFAULT 0.7,
    "maxTokens" INTEGER NOT NULL DEFAULT 2000,
    "prompt" TEXT NOT NULL DEFAULT '',
    "openAiKey" TEXT NOT NULL,
    "assistantId" TEXT,
    "isConfigured" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'inactive',
    "errorMessage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "AssistantSettings_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AssistantSettings" ("accountId", "createdAt", "id", "maxTokens", "model", "name", "prompt", "temperature", "updatedAt") SELECT "accountId", "createdAt", "id", "maxTokens", "model", "name", "prompt", "temperature", "updatedAt" FROM "AssistantSettings";
DROP TABLE "AssistantSettings";
ALTER TABLE "new_AssistantSettings" RENAME TO "AssistantSettings";
CREATE UNIQUE INDEX "AssistantSettings_accountId_key" ON "AssistantSettings"("accountId");
CREATE INDEX "AssistantSettings_accountId_idx" ON "AssistantSettings"("accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
