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
INSERT INTO "new_WhatsAppMessage" ("accountId", "chatId", "content", "from", "id", "status", "timestamp", "to", "type", "whatsappId") SELECT "accountId", "chatId", "content", "from", "id", "status", "timestamp", "to", "type", "whatsappId" FROM "WhatsAppMessage";
DROP TABLE "WhatsAppMessage";
ALTER TABLE "new_WhatsAppMessage" RENAME TO "WhatsAppMessage";
CREATE INDEX "WhatsAppMessage_chatId_idx" ON "WhatsAppMessage"("chatId");
CREATE INDEX "WhatsAppMessage_accountId_idx" ON "WhatsAppMessage"("accountId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
