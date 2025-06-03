/*
  Warnings:

  - You are about to drop the column `isDefault` on the `ChatGroup` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `WhatsAppChat` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ChatGroup" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ChatGroup_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ChatGroup" ("accountId", "createdAt", "id", "name", "updatedAt") SELECT "accountId", "createdAt", "id", "name", "updatedAt" FROM "ChatGroup";
DROP TABLE "ChatGroup";
ALTER TABLE "new_ChatGroup" RENAME TO "ChatGroup";
CREATE INDEX "ChatGroup_accountId_idx" ON "ChatGroup"("accountId");
CREATE TABLE "new_WhatsAppChat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT NOT NULL,
    "displayName" TEXT,
    "lastMessageAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "accountId" TEXT NOT NULL,
    "assistantEnabled" BOOLEAN NOT NULL DEFAULT false,
    "threadId" TEXT,
    CONSTRAINT "WhatsAppChat_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WhatsAppChat" ("accountId", "assistantEnabled", "displayName", "id", "lastMessageAt", "phoneNumber", "threadId", "unreadCount") SELECT "accountId", "assistantEnabled", "displayName", "id", "lastMessageAt", "phoneNumber", "threadId", "unreadCount" FROM "WhatsAppChat";
DROP TABLE "WhatsAppChat";
ALTER TABLE "new_WhatsAppChat" RENAME TO "WhatsAppChat";
CREATE UNIQUE INDEX "WhatsAppChat_phoneNumber_accountId_key" ON "WhatsAppChat"("phoneNumber", "accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
