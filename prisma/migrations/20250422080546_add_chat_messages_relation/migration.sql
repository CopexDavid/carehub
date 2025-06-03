-- CreateTable
CREATE TABLE "WhatsAppMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whatsappId" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppMessage_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WhatsAppMessage_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "WhatsAppChat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WhatsAppChat" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT NOT NULL,
    "lastMessageAt" DATETIME NOT NULL,
    "unreadCount" INTEGER NOT NULL DEFAULT 0,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppChat_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "WhatsAppMessage_whatsappId_key" ON "WhatsAppMessage"("whatsappId");

-- CreateIndex
CREATE INDEX "WhatsAppMessage_from_to_idx" ON "WhatsAppMessage"("from", "to");

-- CreateIndex
CREATE INDEX "WhatsAppMessage_timestamp_idx" ON "WhatsAppMessage"("timestamp");

-- CreateIndex
CREATE INDEX "WhatsAppChat_lastMessageAt_idx" ON "WhatsAppChat"("lastMessageAt");

-- CreateIndex
CREATE UNIQUE INDEX "WhatsAppChat_phoneNumber_accountId_key" ON "WhatsAppChat"("phoneNumber", "accountId");
