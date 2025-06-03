import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { notifyClients } from '../events/route'
import { getMediaUrl } from '@/lib/whatsapp'

// Верификация webhook'а
export async function GET(req: NextRequest) {
  console.log("Получен GET запрос на вебхук");
  console.log("URL параметры:", req.url);
  console.log("Все заголовки:", Object.fromEntries(req.headers.entries()));
  
  const searchParams = req.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  console.log("Параметры верификации:", {
    mode,
    token,
    challenge,
    expectedToken: process.env.WHATSAPP_VERIFY_TOKEN
  });

  if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    console.log("Верификация успешна! Отправляю challenge");
    return new NextResponse(challenge);
  }

  console.log("Верификация не прошла! Проверьте параметры");
  return new NextResponse("Unauthorized", { status: 403 });
}

// Обработка входящих сообщений
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received webhook:', JSON.stringify(body, null, 2))

    // Проверяем, что это сообщение от WhatsApp
    if (body.object === 'whatsapp_business_account') {
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          const value = change.value

          // Обработка статусов сообщений
          if (value.statuses && value.statuses.length > 0) {
            const status = value.statuses[0]
            const messageId = status.id
            const statusType = status.status.toLowerCase() // Приводим к нижнему регистру
            const timestamp = new Date(parseInt(status.timestamp) * 1000)

            console.log('Processing message status:', {
              messageId,
              statusType,
              timestamp,
              conversation: status.conversation
            })

            // Находим сообщение по whatsappId
            const message = await prisma.whatsAppMessage.findFirst({
              where: { whatsappId: messageId },
              include: {
                chat: true
              }
            })

            if (message) {
              // Обновляем статус сообщения
              await prisma.whatsAppMessage.update({
                where: { id: message.id },
                data: { 
                  status: statusType,
                  errorData: status.errors ? JSON.stringify(status.errors[0]) : null
                }
              })

              // Находим активную рассылку для этого аккаунта
              const broadcast = await prisma.whatsAppBroadcast.findFirst({
                where: {
                  accountId: message.accountId,
                  status: { in: ['sending', 'sent'] }, // Ищем как отправляемые, так и отправленные рассылки
                },
                orderBy: {
                  createdAt: 'desc'
                }
              })

              if (broadcast) {
                console.log('Found broadcast:', broadcast.id)
                const updateData: any = {}

                switch (statusType) {
                  case 'sent':
                    updateData.sent = { increment: 1 }
                    break
                  case 'delivered':
                    updateData.delivered = { increment: 1 }
                    break
                  case 'read':
                    updateData.read = { increment: 1 }
                    // Если все сообщения прочитаны, обновляем статус рассылки
                    if (broadcast.read + 1 >= broadcast.recipients) {
                      updateData.status = 'completed'
                    }
                    break
                }

                if (Object.keys(updateData).length > 0) {
                  console.log('Updating broadcast stats:', updateData)
                  const updated = await prisma.whatsAppBroadcast.update({
                    where: { id: broadcast.id },
                    data: updateData
                  })
                  console.log('Updated broadcast:', updated)
                }
              }

              // Отправляем уведомление об обновлении статуса
              await notifyClients({
                type: 'message_status',
                messageId: message.id,
                status: statusType,
                ...(status.errors ? {
                  error: {
                    code: status.errors[0].code,
                    message: status.errors[0].message,
                    details: status.errors[0].error_data?.details
                  }
                } : {})
              })
            }
          }

          // Обработка обновления статуса шаблона
          if (change.field === 'message_template_status_update') {
            const templateId = value.message_template_id.toString()
            const status = value.event.toLowerCase()
            const reason = value.reason === 'NONE' ? null : value.reason

            // Находим шаблон по whatsappId
            const template = await prisma.messageTemplate.findFirst({
              where: { whatsappId: templateId }
            })

            if (template) {
              // Обновляем статус шаблона
              await prisma.messageTemplate.update({
                where: { id: template.id },
                data: {
                  status: status,
                  rejectionReason: reason
                }
              })

              console.log('Updated template status:', {
                templateId,
                status,
                reason
              })
            }
          }

          // Обработка входящих сообщений
          if (value.messages && value.messages.length > 0) {
            const message = value.messages[0]
            const from = message.from // Номер отправителя
            const messageId = message.id
            const timestamp = new Date(parseInt(message.timestamp) * 1000)
            
            // Получаем активный аккаунт WhatsApp
            const account = await prisma.whatsAppAccount.findFirst({
              where: { isActive: true },
              include: {
                assistantSettings: true
              }
            })

            if (!account) {
              console.error('No active WhatsApp account found')
              continue
            }

            // Нормализуем номер телефона (убираем плюс если есть)
            const normalizedPhone = from.replace(/^\+/, '')

            // Создаем или обновляем чат
            const chat = await prisma.whatsAppChat.upsert({
              where: {
                phoneNumber_accountId: {
                  phoneNumber: normalizedPhone,
                  accountId: account.id
                }
              },
              create: {
                phoneNumber: normalizedPhone,
                accountId: account.id,
                lastMessageAt: timestamp,
                unreadCount: 1
              },
              update: {
                lastMessageAt: timestamp,
                unreadCount: {
                  increment: 1
                }
              }
            })

            // Получаем текст сообщения
            let messageContent = null
            if (message.type === 'voice' || message.type === 'audio') {
              // Обработка голосовых сообщений
              const mediaId = message.voice?.id || message.audio?.id
              let mediaUrl = null
              
              if (mediaId) {
                try {
                  mediaUrl = await getMediaUrl(mediaId, account.accessToken)
                  messageContent = JSON.stringify({
                    type: message.type,
                    url: mediaUrl,
                    duration: message.voice?.duration || message.audio?.duration || 0,
                    mime_type: message.voice?.mime_type || message.audio?.mime_type,
                    voice: true
                  })
                  
                  // Сохраняем сообщение
                  const savedMessage = await prisma.whatsAppMessage.create({
                    data: {
                      whatsappId: messageId,
                      from: from,
                      to: account.phoneNumber,
                      type: message.type,
                      content: messageContent,
                      timestamp: timestamp,
                      status: 'received',
                      accountId: account.id,
                      chatId: chat.id,
                      isAssistant: false
                    }
                  })

                  // Скачиваем и сохраняем медиа файл
                  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
                  await fetch(`${baseUrl}/api/whatsapp/media/download`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      mediaId,
                      messageId: savedMessage.id,
                      type: message.type,
                      mimeType: message.voice?.mime_type || message.audio?.mime_type
                    })
                  })

                  // Отправляем уведомление через SSE
                  await notifyClients({
                    type: 'new_message',
                    chat: {
                      id: chat.id,
                      phoneNumber: from,
                      lastMessage: messageContent,
                      time: timestamp.toISOString(),
                      unreadCount: chat.unreadCount
                    },
                    message: {
                      id: savedMessage.id,
                      content: messageContent,
                      from,
                      timestamp: timestamp.toISOString(),
                      status: 'received',
                      isAssistant: false
                    }
                  })

                  // Пропускаем общий блок сохранения для голосовых сообщений
                  continue

                } catch (error) {
                  console.error('Error getting media URL:', error)
                  messageContent = 'Ошибка при получении голосового сообщения'
                }
              }
            } else if (message.text) {
              messageContent = message.text.body
            } else if (message.type === 'image') {
              messageContent = '🖼 Изображение'
            } else if (message.type === 'video') {
              messageContent = '🎥 Видео'
            } else if (message.type === 'document') {
              messageContent = '📎 Документ'
            } else {
              messageContent = 'Неподдерживаемый тип сообщения'
            }

            // Сохраняем сообщение для всех типов, кроме голосовых
            const savedMessage = await prisma.whatsAppMessage.create({
              data: {
                whatsappId: messageId,
                from: from,
                to: account.phoneNumber,
                type: message.type,
                content: messageContent,
                timestamp: timestamp,
                status: 'received',
                accountId: account.id,
                chatId: chat.id,
                isAssistant: false
              }
            })

            // Отправляем уведомление через SSE
            await notifyClients({
              type: 'new_message',
              chat: {
                id: chat.id,
                phoneNumber: from,
                lastMessage: messageContent,
                time: timestamp.toISOString(),
                unreadCount: chat.unreadCount
              },
              message: {
                id: savedMessage.id,
                content: messageContent,
                from,
                timestamp: timestamp.toISOString(),
                status: 'received',
                isAssistant: false
              }
            })

            console.log('Saved and notified about incoming message:', {
              from,
              type: message.type,
              content: messageContent,
              timestamp
            })

            // Проверяем, включен ли ассистент для этого чата
            if (chat.assistantEnabled) {
              try {
                // Отправляем сообщение ассистенту
                const assistantResponse = await fetch('http://localhost:3000/api/assistant/message', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    to: normalizedPhone,
                    text: messageContent
                  })
                })

                if (!assistantResponse.ok) {
                  console.error('Failed to process message with assistant:', await assistantResponse.text())
                }
              } catch (error) {
                console.error('Error processing message with assistant:', error)
              }
            }
          }
        }
      }
    }

    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 