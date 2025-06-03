/*
  Warnings:

  - You are about to drop the column `maxTokens` on the `AssistantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `prompt` on the `AssistantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `temperature` on the `AssistantSettings` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AssistantSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'AI Ассистент',
    "model" TEXT NOT NULL DEFAULT 'gpt-4',
    "openAiKey" TEXT NOT NULL DEFAULT '',
    "assistantId" TEXT,
    "isConfigured" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'inactive',
    "errorMessage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "AssistantSettings_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AssistantSettings" ("accountId", "assistantId", "createdAt", "errorMessage", "id", "isConfigured", "model", "name", "openAiKey", "status", "updatedAt") SELECT "accountId", "assistantId", "createdAt", "errorMessage", "id", "isConfigured", "model", "name", "openAiKey", "status", "updatedAt" FROM "AssistantSettings";
DROP TABLE "AssistantSettings";
ALTER TABLE "new_AssistantSettings" RENAME TO "AssistantSettings";
CREATE UNIQUE INDEX "AssistantSettings_accountId_key" ON "AssistantSettings"("accountId");
CREATE INDEX "AssistantSettings_accountId_idx" ON "AssistantSettings"("accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
