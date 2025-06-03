import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Получение всех аккаунтов
export async function GET() {
  try {
    const accounts = await prisma.whatsAppAccount.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(accounts)
  } catch (error) {
    console.error('Error fetching WhatsApp accounts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch WhatsApp accounts' },
      { status: 500 }
    )
  }
}

// Создание нового аккаунта
export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const account = await prisma.whatsAppAccount.create({
      data: {
        name: data.name,
        phoneNumber: data.phoneNumber,
        isActive: data.isActive,
        phoneNumberId: data.phoneNumberId,
        businessAccountId: data.businessAccountId,
        accessToken: data.accessToken,
        webhookSecret: data.webhookSecret,
        maxConcurrentMessages: data.queueSettings?.maxConcurrentMessages || 10,
        retryAttempts: data.queueSettings?.retryAttempts || 3,
        gptModel: data.gptSettings?.model || 'gpt-3.5-turbo',
        maxTokens: data.gptSettings?.maxTokens || 1000,
        temperature: data.gptSettings?.temperature || 0.7,
      }
    })
    
    return NextResponse.json(account)
  } catch (error) {
    console.error('Error creating WhatsApp account:', error)
    return NextResponse.json(
      { error: 'Failed to create WhatsApp account' },
      { status: 500 }
    )
  }
}

// Обновление аккаунта
export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    const account = await prisma.whatsAppAccount.update({
      where: { id },
      data: {
        name: updateData.name,
        phoneNumber: updateData.phoneNumber,
        isActive: updateData.isActive,
        phoneNumberId: updateData.phoneNumberId,
        businessAccountId: updateData.businessAccountId,
        accessToken: updateData.accessToken,
        webhookSecret: updateData.webhookSecret,
        maxConcurrentMessages: updateData.queueSettings?.maxConcurrentMessages,
        retryAttempts: updateData.queueSettings?.retryAttempts,
        gptModel: updateData.gptSettings?.model,
        maxTokens: updateData.gptSettings?.maxTokens,
        temperature: updateData.gptSettings?.temperature,
        verified: updateData.verified,
        expiresAt: updateData.expiresAt ? new Date(updateData.expiresAt) : null,
      }
    })
    
    return NextResponse.json(account)
  } catch (error) {
    console.error('Error updating WhatsApp account:', error)
    return NextResponse.json(
      { error: 'Failed to update WhatsApp account' },
      { status: 500 }
    )
  }
}

// Удаление аккаунта
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Account ID is required' },
        { status: 400 }
      )
    }

    // Сначала удаляем все связанные сообщения
    await prisma.whatsAppMessage.deleteMany({
      where: { accountId: id }
    })

    // Затем удаляем все связанные чаты
    await prisma.whatsAppChat.deleteMany({
      where: { accountId: id }
    })
    
    // И наконец удаляем сам аккаунт
    await prisma.whatsAppAccount.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting WhatsApp account:', error)
    return NextResponse.json(
      { error: 'Failed to delete WhatsApp account' },
      { status: 500 }
    )
  }
} 