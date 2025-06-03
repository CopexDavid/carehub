/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MediaFile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `errorCode` on the `WhatsAppMessage` table. All the data in the column will be lost.
  - You are about to drop the column `errorDetails` on the `WhatsAppMessage` table. All the data in the column will be lost.
  - You are about to drop the column `errorMessage` on the `WhatsAppMessage` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Account_provider_providerAccountId_key";

-- DropIndex
DROP INDEX "MediaFile_whatsappId_idx";

-- DropIndex
DROP INDEX "MediaFile_messageId_key";

-- DropIndex
DROP INDEX "MediaFile_whatsappId_key";

-- DropIndex
DROP INDEX "Session_sessionToken_key";

-- AlterTable
ALTER TABLE "WhatsAppChat" ADD COLUMN "group" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Account";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MediaFile";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Session";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ChatGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ChatGroup_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WhatsAppMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whatsappId" TEXT,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'text',
    "content" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'sent',
    "accountId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "isAssistant" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "WhatsAppMessage_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WhatsAppMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "WhatsAppChat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppMessage" ("accountId", "chatId", "content", "from", "id", "isAssistant", "status", "timestamp", "to", "type", "whatsappId") SELECT "accountId", "chatId", "content", "from", "id", "isAssistant", "status", "timestamp", "to", "type", "whatsappId" FROM "WhatsAppMessage";
DROP TABLE "WhatsAppMessage";
ALTER TABLE "new_WhatsAppMessage" RENAME TO "WhatsAppMessage";
CREATE INDEX "WhatsAppMessage_chatId_idx" ON "WhatsAppMessage"("chatId");
CREATE INDEX "WhatsAppMessage_accountId_idx" ON "WhatsAppMessage"("accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "ChatGroup_accountId_idx" ON "ChatGroup"("accountId");

-- CreateIndex
CREATE UNIQUE INDEX "ChatGroup_name_accountId_key" ON "ChatGroup"("name", "accountId");
