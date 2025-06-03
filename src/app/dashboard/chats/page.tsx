'use client'

import { useEffect, useState } from 'react'
import { ChatProvider } from '@/contexts/ChatContext'
import { ChatList } from '@/components/chat/chat-list'
import { MessageBubble } from '@/components/chat/message-bubble'
import { MessageInput } from '@/components/chat/message-input'
import { useChat } from '@/contexts/ChatContext'
import React from 'react'
import { ChatHeader } from '@/components/chat/chat-header'

interface Message {
  id: string
  content: string | {
    body: string
  } | {
    type: string
    url: string
    filename?: string
    duration?: number
    mime_type?: string
    voice?: boolean
  }
  from: string
  timestamp: string
  status?: 'sent' | 'delivered' | 'read' | 'failed'
  isAssistant?: boolean
}

interface Chat {
  id: string
  phoneNumber: string
  displayName?: string
  messages: Message[]
  hasMoreMessages?: boolean
}

function ChatMessages() {
  const { selectedChatId, chats, dispatch } = useChat()
  const selectedChat = chats.find(chat => chat.id === selectedChatId)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const messagesContainerRef = React.useRef<HTMLDivElement>(null)
  const [isLoadingMore, setIsLoadingMore] = React.useState(false)
  const [messageText, setMessageText] = React.useState('')
  const [isSending, setIsSending] = React.useState(false)
  const notificationSound = React.useRef<HTMLAudioElement | null>(null)

  // Инициализируем звук уведомления
  React.useEffect(() => {
    notificationSound.current = new Audio('/notification.mp3')
  }, [])

  // Определяем все колбэки и мемоизированные значения до условных операторов
  const getMessageContent = React.useCallback((message: Message) => {
    // Если content это строка, возвращаем её как есть
    if (typeof message.content === 'string') {
      return message.content;
    }
    
    // Для объектов с медиа-контентом
    if (typeof message.content === 'object') {
      if ('type' in message.content) {
        return `[${message.content.type}] ${message.content.filename}`;
      }
      if ('body' in message.content) {
        return message.content.body;
      }
    }

    console.error('Неизвестный формат сообщения:', message);
    return 'Сообщение не может быть отображено';
  }, [])

  const scrollToBottom = React.useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const messages = React.useMemo(() => {
    if (!selectedChat?.messages) return []
    return [...selectedChat.messages].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    )
  }, [selectedChat?.messages])

  // Воспроизводим звук при получении нового сообщения
  React.useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1]
      if (lastMessage.from === selectedChat?.phoneNumber) {
        notificationSound.current?.play().catch(console.error)
      }
      scrollToBottom()
    }
  }, [messages, selectedChat?.phoneNumber])

  const handleSendMessage = React.useCallback(async (text: string) => {
    if (!selectedChat || !text.trim() || isSending) return

    setIsSending(true)
    try {
      const response = await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: selectedChat.phoneNumber,
          text: text.trim()
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      
      // Добавляем отправленное сообщение в состояние чата
      dispatch({
        type: 'NEW_MESSAGE',
        payload: {
          chatId: selectedChat.id,
          message: {
            id: data.messageId,
            content: text.trim(),
            from: selectedChat.phoneNumber.startsWith('+') ? selectedChat.phoneNumber : `+${selectedChat.phoneNumber}`,
            timestamp: new Date().toISOString(),
            status: 'sent'
          }
        }
      })

      setMessageText('')
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Ошибка при отправке сообщения')
    } finally {
      setIsSending(false)
    }
  }, [selectedChat, isSending, dispatch])

  // Эффекты должны быть после всех остальных хуков
  React.useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom()
    }
  }, [messages, scrollToBottom])

  const loadMoreMessages = React.useCallback(async () => {
    if (!selectedChatId || isLoadingMore || !messagesContainerRef.current) return

    setIsLoadingMore(true)
    // Сохраняем текущую высоту контента и позицию скролла
    const scrollContainer = messagesContainerRef.current
    const oldHeight = scrollContainer.scrollHeight
    const oldScroll = scrollContainer.scrollTop

    try {
      const response = await fetch(
        `/api/whatsapp/chats/${selectedChatId}/messages?skip=${messages.length}&take=15`
      )
      const data = await response.json()

      if (data.messages) {
        dispatch({
          type: 'ADD_OLD_MESSAGES',
          payload: {
            chatId: selectedChatId,
            messages: data.messages,
            hasMore: data.hasMore
          }
        })

        // После обновления DOM восстанавливаем позицию скролла
        requestAnimationFrame(() => {
          const newHeight = scrollContainer.scrollHeight
          scrollContainer.scrollTop = newHeight - oldHeight + oldScroll
        })
      }
    } catch (error) {
      console.error('Error loading more messages:', error)
    } finally {
      setIsLoadingMore(false)
    }
  }, [selectedChatId, messages.length, isLoadingMore, dispatch])

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        Выберите чат для просмотра сообщений
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Фиксированный заголовок */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <ChatHeader
          chatId={selectedChat.id}
          phoneNumber={selectedChat.phoneNumber}
          name={selectedChat.displayName}
        />
      </div>

      {/* Сообщения */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
        onScroll={(e) => {
          const target = e.target as HTMLDivElement
          if (target.scrollTop === 0 && selectedChat.hasMoreMessages) {
            loadMoreMessages()
          }
        }}
              >
        {isLoadingMore && (
          <div className="text-center text-sm text-gray-500">
            Загрузка сообщений...
            </div>
          )}
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
            message={message.content}
                time={new Date(message.timestamp).toLocaleTimeString()}
                type={message.isAssistant || message.from !== selectedChat.phoneNumber ? 'sent' : 'received'}
                status={message.status}
                showTail={true}
                isAssistant={message.isAssistant}
              />
            ))}
          <div ref={messagesEndRef} />
      </div>

      {/* Поле ввода сообщения */}
        <MessageInput
        chatId={selectedChat.id}
          onSendMessage={handleSendMessage}
          onSendFile={async (file) => {
            try {
              const formData = new FormData()
              formData.append('file', file)
              formData.append('chatId', selectedChat.id)

            const response = await fetch('/api/whatsapp/messages/file', {
                method: 'POST',
                body: formData
              })

              if (!response.ok) {
                throw new Error('Failed to send file')
              }
            } catch (error) {
              console.error('Error sending file:', error)
              alert('Ошибка при отправке файла')
            }
          }}
          disabled={isSending}
        />
    </div>
  )
}

// Оборачиваем компонент в memo для предотвращения лишних ререндеров
const MemoizedChatMessages = React.memo(ChatMessages)

export default function ChatsPage() {
  return (
    <ChatProvider>
      <div className="flex h-screen">
        <div className="w-[320px] border-r">
          <ChatList />
        </div>
        <div className="flex-1 flex flex-col h-full">
          <MemoizedChatMessages />
        </div>
      </div>
    </ChatProvider>
  )
} 