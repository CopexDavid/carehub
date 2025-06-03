/*
  Warnings:

  - You are about to drop the column `count` on the `ClientList` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `WhatsAppBroadcast` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ClientList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `templateId` to the `WhatsAppBroadcast` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "MessageTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "components" JSONB NOT NULL,
    "whatsappId" TEXT,
    "accountId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MessageTemplate_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phone" TEXT NOT NULL,
    "clientListId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PhoneNumber_clientListId_fkey" FOREIGN KEY ("clientListId") REFERENCES "ClientList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ClientList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ClientList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ClientList" ("createdAt", "description", "id", "name", "updatedAt") SELECT "createdAt", "description", "id", "name", "updatedAt" FROM "ClientList";
DROP TABLE "ClientList";
ALTER TABLE "new_ClientList" RENAME TO "ClientList";
CREATE INDEX "ClientList_userId_idx" ON "ClientList"("userId");
CREATE TABLE "new_WhatsAppBroadcast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "scheduledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "recipients" INTEGER NOT NULL DEFAULT 0,
    "sent" INTEGER NOT NULL DEFAULT 0,
    "delivered" INTEGER NOT NULL DEFAULT 0,
    "read" INTEGER NOT NULL DEFAULT 0,
    "failed" INTEGER NOT NULL DEFAULT 0,
    "templateParameters" JSONB,
    "accountId" TEXT NOT NULL,
    "clientListId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppBroadcast_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WhatsAppBroadcast_clientListId_fkey" FOREIGN KEY ("clientListId") REFERENCES "ClientList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WhatsAppBroadcast_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "MessageTemplate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppBroadcast" ("accountId", "clientListId", "createdAt", "delivered", "id", "name", "read", "recipients", "scheduledAt", "sent", "status", "updatedAt") SELECT "accountId", "clientListId", "createdAt", "delivered", "id", "name", "read", "recipients", "scheduledAt", "sent", "status", "updatedAt" FROM "WhatsAppBroadcast";
DROP TABLE "WhatsAppBroadcast";
ALTER TABLE "new_WhatsAppBroadcast" RENAME TO "WhatsAppBroadcast";
CREATE INDEX "WhatsAppBroadcast_accountId_idx" ON "WhatsAppBroadcast"("accountId");
CREATE INDEX "WhatsAppBroadcast_clientListId_idx" ON "WhatsAppBroadcast"("clientListId");
CREATE INDEX "WhatsAppBroadcast_templateId_idx" ON "WhatsAppBroadcast"("templateId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "MessageTemplate_accountId_idx" ON "MessageTemplate"("accountId");

-- CreateIndex
CREATE INDEX "PhoneNumber_clientListId_idx" ON "PhoneNumber"("clientListId");
