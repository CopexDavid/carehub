-- CreateTable
CREATE TABLE "MediaFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "whatsappId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "duration" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "messageId" TEXT NOT NULL,
    CONSTRAINT "MediaFile_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "WhatsAppMessage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "MediaFile_whatsappId_key" ON "MediaFile"("whatsappId");

-- CreateIndex
CREATE UNIQUE INDEX "MediaFile_messageId_key" ON "MediaFile"("messageId");

-- CreateIndex
CREATE INDEX "MediaFile_whatsappId_idx" ON "MediaFile"("whatsappId");
