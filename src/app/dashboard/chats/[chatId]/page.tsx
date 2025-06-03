'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageBubble } from '@/components/chat/message-bubble'
import { useChatUpdates } from '@/hooks/use-chat-updates'
import { ScrollArea } from '@/components/ui/scroll-area'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'
import { setNotificationPlayer } from '@/components/sound-notification'

export default function ChatPage({ params }: { params: { chatId: string } }) {
  const { messages, chatInfo, error } = useChatUpdates(params.chatId)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isConnecting, setIsConnecting] = useState(true)

  // Настраиваем звуковые уведомления
  useEffect(() => {
    const audio = new Audio('/notification.mp3')
    setNotificationPlayer(() => {
      audio.currentTime = 0
      audio.play().catch(console.error)
    })

    return () => {
      setNotificationPlayer(() => {})
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsConnecting(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Прокручиваем к последнему сообщению при получении новых сообщений
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {error && (
        <Alert variant="destructive" className="m-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {isConnecting && (
        <div className="flex items-center justify-center p-4 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          Подключение...
        </div>
      )}

      <ScrollArea ref={scrollRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message.content}
              time={format(new Date(message.timestamp), 'HH:mm', { locale: ru })}
              type={message.from === 'system' ? 'ai' : message.from === chatInfo?.id ? 'received' : 'sent'}
              status={message.status as 'sent' | 'delivered' | 'read'}
              showTail
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
} 