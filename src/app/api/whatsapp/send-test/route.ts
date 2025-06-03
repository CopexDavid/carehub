import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { phoneNumberId, accessToken, to, message: messageText = 'Тестовое сообщение' } = await req.json()

    if (!phoneNumberId || !accessToken || !to) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Форматируем номер телефона
    const formattedNumber = to.replace(/\D/g, '')
    // Преобразуем в международный формат
    const phoneNumber = formattedNumber.startsWith('8') 
      ? `+7${formattedNumber.slice(1)}` 
      : `+${formattedNumber}`

    console.log('Formatted phone number:', phoneNumber)

    // Получаем активный аккаунт
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true }
    })

    if (!account) {
      return NextResponse.json(
        { error: 'No active WhatsApp account found' },
        { status: 404 }
      )
    }

    // Отправляем тестовое сообщение через WhatsApp API
    console.log('Sending message with params:', {
      phoneNumberId,
      to: phoneNumber,
      accessToken: accessToken.substring(0, 10) + '...'
    })

    const messageData = {
      messaging_product: 'whatsapp',
      to: phoneNumber,
      type: 'text',
      text: { 
        body: messageText || 'Тестовое сообщение от CareHub'
      }
    }

    console.log('Request body:', JSON.stringify(messageData, null, 2))

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData)
      }
    )

    const responseData = await response.json()
    console.log('Full WhatsApp API Response:', JSON.stringify(responseData, null, 2))

    if (!response.ok) {
      console.error('WhatsApp API Error:', responseData)
      return NextResponse.json(
        { 
          error: responseData.error?.message || 'Failed to send test message',
          details: responseData.error,
          requestData: messageData,
          fullResponse: responseData
        },
        { status: response.status }
      )
    }

    // Проверяем статус отправки
    const messageId = responseData.messages?.[0]?.id
    if (!messageId) {
      console.error('No message ID in response:', responseData)
      return NextResponse.json(
        { 
          error: 'No message ID in response',
          details: responseData,
          requestData: messageData
        },
        { status: 400 }
      )
    }

    // Проверяем статус сообщения
    try {
      const messageStatus = await fetch(
        `https://graph.facebook.com/v18.0/${messageId}`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      )
      
      const statusData = await messageStatus.json()
      console.log('Message status:', JSON.stringify(statusData, null, 2))
    } catch (error) {
      console.error('Error checking message status:', error)
    }

    // Создаем или обновляем чат
    const chat = await prisma.whatsAppChat.upsert({
      where: {
        phoneNumber_accountId: {
          phoneNumber: phoneNumber,
          accountId: account.id
        }
      },
      create: {
        phoneNumber: phoneNumber,
        accountId: account.id,
        lastMessageAt: new Date(),
        unreadCount: 0
      },
      update: {
        lastMessageAt: new Date()
      }
    })

    // Сохраняем сообщение
    const savedMessage = await prisma.whatsAppMessage.create({
      data: {
        whatsappId: responseData.messages[0].id,
        from: account.phoneNumber,
        to: phoneNumber,
        type: 'text',
        content: { text: messageText },
        timestamp: new Date(),
        status: 'sent',
        accountId: account.id,
        chatId: chat.id
      }
    })

    console.log('Saved test message:', savedMessage)
    
    return NextResponse.json({
      success: true,
      data: {
        messageId: responseData.messages[0].id,
        chatId: chat.id
      }
    })
  } catch (error) {
    console.error('Error sending test message:', error)
    return NextResponse.json(
      { error: 'Failed to send test message' },
      { status: 500 }
    )
  }
} 