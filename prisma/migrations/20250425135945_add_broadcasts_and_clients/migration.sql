-- CreateTable
CREATE TABLE "WhatsAppBroadcast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "scheduledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "recipients" INTEGER NOT NULL DEFAULT 0,
    "sent" INTEGER NOT NULL DEFAULT 0,
    "delivered" INTEGER NOT NULL DEFAULT 0,
    "read" INTEGER NOT NULL DEFAULT 0,
    "accountId" TEXT NOT NULL,
    "clientListId" TEXT NOT NULL,
    CONSTRAINT "WhatsAppBroadcast_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "WhatsAppAccount" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WhatsAppBroadcast_clientListId_fkey" FOREIGN KEY ("clientListId") REFERENCES "ClientList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BroadcastAttachment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "broadcastId" TEXT NOT NULL,
    CONSTRAINT "BroadcastAttachment_broadcastId_fkey" FOREIGN KEY ("broadcastId") REFERENCES "WhatsAppBroadcast" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ClientList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "count" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_ClientToClientList" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ClientToClientList_A_fkey" FOREIGN KEY ("A") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ClientToClientList_B_fkey" FOREIGN KEY ("B") REFERENCES "ClientList" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "WhatsAppBroadcast_accountId_idx" ON "WhatsAppBroadcast"("accountId");

-- CreateIndex
CREATE INDEX "WhatsAppBroadcast_clientListId_idx" ON "WhatsAppBroadcast"("clientListId");

-- CreateIndex
CREATE INDEX "BroadcastAttachment_broadcastId_idx" ON "BroadcastAttachment"("broadcastId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_phoneNumber_key" ON "Client"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToClientList_AB_unique" ON "_ClientToClientList"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToClientList_B_index" ON "_ClientToClientList"("B");
