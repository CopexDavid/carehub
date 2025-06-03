import { prisma } from '@/lib/prisma';
import OpenAI from 'openai';
import { sendWhatsAppMessage } from '@/lib/whatsapp';
import { notifyClients } from '../../whatsapp/events/route';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, text } = body;

    // Нормализуем номер телефона
    const normalizedPhone = to.replace(/^\+/, '');

    // Получаем активный аккаунт с настройками ассистента
    const account = await prisma.whatsAppAccount.findFirst({
      where: { isActive: true },
      include: {
        assistantSettings: true
      }
    });

    if (!account) {
      throw new Error('No active WhatsApp account found');
    }

    if (!account.assistantSettings || !account.assistantSettings.isConfigured) {
      throw new Error('Assistant not configured');
    }

    // Получаем или создаем чат
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
        lastMessageAt: new Date(),
        unreadCount: 0,
        assistantEnabled: true
      },
      update: {
        lastMessageAt: new Date()
      }
    });

    // Проверяем, включен ли ассистент для этого чата
    if (!chat.assistantEnabled) {
      throw new Error('Assistant is disabled for this chat');
    }

    // Создаем клиент OpenAI с настройками
    const openai = new OpenAI({
      apiKey: account.assistantSettings.openAiKey
    });

    let threadId = chat.threadId;
    
    // Если треда нет, создаем новый
    if (!threadId) {
    const thread = await openai.beta.threads.create();
      threadId = thread.id;
      
      // Сохраняем ID треда в базе данных
      await prisma.whatsAppChat.update({
        where: { id: chat.id },
        data: { threadId: thread.id }
      });
    }

    // Добавляем сообщение в тред
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: text
    });

    // Запускаем ассистента
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: account.assistantSettings.assistantId || ''
    });

    // Ждем завершения выполнения
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    }

    if (runStatus.status !== 'completed') {
      // В случае ошибки, пробуем создать новый тред
      if (runStatus.status === 'failed' || runStatus.status === 'expired') {
        const newThread = await openai.beta.threads.create();
        await prisma.whatsAppChat.update({
          where: { id: chat.id },
          data: { threadId: newThread.id }
        });
        
        // Повторяем отправку сообщения в новый тред
        await openai.beta.threads.messages.create(newThread.id, {
          role: 'user',
          content: text
        });
        
        const newRun = await openai.beta.threads.runs.create(newThread.id, {
          assistant_id: account.assistantSettings.assistantId || ''
        });
        
        runStatus = await openai.beta.threads.runs.retrieve(newThread.id, newRun.id);
        while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
          await new Promise(resolve => setTimeout(resolve, 1000));
          runStatus = await openai.beta.threads.runs.retrieve(newThread.id, newRun.id);
        }
        
        if (runStatus.status !== 'completed') {
          throw new Error('Assistant run failed after thread recreation');
        }
        
        threadId = newThread.id;
      } else {
      throw new Error('Assistant run failed');
      }
    }

    // Получаем ответ ассистента
    const messages = await openai.beta.threads.messages.list(threadId);
    const lastMessage = messages.data[0];
    
    if (!lastMessage.content[0] || lastMessage.content[0].type !== 'text') {
      throw new Error('Assistant response does not contain text');
    }

    const assistantResponse = lastMessage.content[0].text.value;

    // Отправляем ответ через WhatsApp API без префикса
    const whatsappResponse = await sendWhatsAppMessage({
      phoneNumberId: account.phoneNumberId,
      to: normalizedPhone,
      accessToken: account.accessToken,
      text: assistantResponse
    });

    // Сохраняем ответ ассистента
    const assistantMessage = await prisma.whatsAppMessage.create({
      data: {
        whatsappId: whatsappResponse.messages[0].id,
        from: account.phoneNumber,
        to: normalizedPhone,
        type: 'text',
        content: assistantResponse,
        timestamp: new Date(),
        status: 'sent',
        accountId: account.id,
        chatId: chat.id,
        isAssistant: true
      }
    });

    // Отправляем уведомление через SSE о новом сообщении ассистента
    await notifyClients({
      type: 'new_message',
      chat: {
        id: chat.id,
        phoneNumber: account.phoneNumber,
        lastMessage: assistantResponse,
        time: assistantMessage.timestamp.toISOString(),
        unreadCount: chat.unreadCount
      },
      message: {
        id: assistantMessage.id,
        content: assistantResponse,
        from: account.phoneNumber,
        timestamp: assistantMessage.timestamp.toISOString(),
        status: 'sent',
        isAssistant: true
      }
    });

    return new Response(JSON.stringify({
      success: true,
      messageId: assistantMessage.id,
      whatsappId: assistantMessage.whatsappId
    }), { status: 200 });

  } catch (error: any) {
    console.error('Assistant message error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
} 