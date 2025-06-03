import { useState, useEffect, useCallback, useRef } from 'react'
import { playNotificationSound } from '@/components/sound-notification'

interface Message {
  id: string
  content: any
  type: string
  status: string
  timestamp: string
  from: string
  to: string
}

interface ChatUpdate {
  messages: Message[]
  chat: {
    id: string
    unreadCount: number
    lastMessageAt: string
  }
}

export function useChatUpdates(chatId: string) {
  const [messages, setMessages] = useState<Message[]>([])
  const [chatInfo, setChatInfo] = useState<ChatUpdate['chat'] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastMessageId, setLastMessageId] = useState<string | null>(null)
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'reconnecting'>('disconnected')
  
  const eventSourceRef = useRef<EventSource | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>()
  const reconnectAttemptsRef = useRef<number>(0)
  const lastProcessedTimestampRef = useRef<string | null>(null)
  
  const MAX_RECONNECT_ATTEMPTS = 5
  const INITIAL_RECONNECT_DELAY = 1000

  // Функция для вычисления задержки переподключения
  const getReconnectDelay = () => {
    return Math.min(
      INITIAL_RECONNECT_DELAY * Math.pow(2, reconnectAttemptsRef.current),
      30000
    )
  }

  // Функция для сброса состояния подключения
  const resetConnectionState = () => {
    reconnectAttemptsRef.current = 0
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)
    }
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
    }
  }

  // Функция для получения пропущенных сообщений
  const fetchMissedMessages = async () => {
    if (!lastProcessedTimestampRef.current) return

    try {
      const response = await fetch(
        `/api/whatsapp/chats/${chatId}/messages?since=${encodeURIComponent(lastProcessedTimestampRef.current)}`
      )
      
      if (!response.ok) throw new Error('Failed to fetch missed messages')
      
      const data = await response.json()
      if (data.messages && data.messages.length > 0) {
        handleNewMessages({
          messages: data.messages,
          chat: data.chat
        })
      }
    } catch (error) {
      console.error('Error fetching missed messages:', error)
    }
  }

  // Обработчик новых сообщений
  const handleNewMessages = useCallback((newData: ChatUpdate) => {
    setMessages(prevMessages => {
      // Находим новые сообщения
      const newMessages = newData.messages.filter(
        newMsg => !prevMessages.some(prevMsg => prevMsg.id === newMsg.id)
      )

      // Если есть новые сообщения
      if (newMessages.length > 0) {
        console.log('New messages received:', newMessages.length)
        
        // Обновляем timestamp последнего обработанного сообщения
        const latestMessage = newMessages[newMessages.length - 1]
        lastProcessedTimestampRef.current = latestMessage.timestamp
        
        // Проверяем, является ли последнее сообщение действительно новым
        if (latestMessage.id !== lastMessageId) {
          setLastMessageId(latestMessage.id)
          // Воспроизводим звук только для входящих сообщений
          if (latestMessage.from === newData.chat.id) {
            playNotificationSound()
          }
        }

        // Объединяем и сортируем все сообщения
        return [...prevMessages, ...newMessages]
          .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      }

      return prevMessages
    })

    setChatInfo(newData.chat)
  }, [lastMessageId])

  // Функция для установки SSE соединения
  const setupSSEConnection = useCallback(() => {
    if (!chatId) return
    
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
    }

    console.log('Connecting to SSE for chat:', chatId)
    const eventSource = new EventSource(`/api/whatsapp/chats/${chatId}/updates`)
    eventSourceRef.current = eventSource

    eventSource.onmessage = (event) => {
      console.log('Received SSE message')
      
      try {
        const data: ChatUpdate = JSON.parse(event.data)
        handleNewMessages(data)
        setError(null)
        setConnectionStatus('connected')
        reconnectAttemptsRef.current = 0 // Сброс счетчика при успешном получении сообщения
      } catch (error) {
        console.error('Error parsing SSE message:', error)
        setError('Ошибка при обработке обновлений')
      }
    }

    eventSource.onopen = () => {
      console.log('SSE connection opened')
      setError(null)
      setConnectionStatus('connected')
      reconnectAttemptsRef.current = 0 // Сброс счетчика при успешном подключении
      
      // Получаем пропущенные сообщения при восстановлении соединения
      if (lastProcessedTimestampRef.current) {
        fetchMissedMessages()
      }
    }

    eventSource.onerror = (error) => {
      console.error('SSE Error:', error)
      setError('Ошибка соединения')
      setConnectionStatus('reconnecting')
      
      if (eventSourceRef.current) {
        eventSourceRef.current.close()
    }

      // Увеличиваем счетчик попыток
      reconnectAttemptsRef.current += 1

      // Проверяем, не превышено ли максимальное количество попыток
      if (reconnectAttemptsRef.current > MAX_RECONNECT_ATTEMPTS) {
        console.error('Maximum reconnection attempts reached')
        setConnectionStatus('disconnected')
        return
      }

      // Вычисляем задержку для следующей попытки
      const delay = getReconnectDelay()
      console.log(`Attempting to reconnect in ${delay}ms (attempt ${reconnectAttemptsRef.current}/${MAX_RECONNECT_ATTEMPTS})`)

      // Попытка переподключения с экспоненциальной задержкой
      reconnectTimeoutRef.current = setTimeout(setupSSEConnection, delay)
    }
  }, [chatId, handleNewMessages])

  useEffect(() => {
    resetConnectionState() // Сброс состояния при изменении chatId
    setupSSEConnection()

    return () => {
      resetConnectionState() // Сброс состояния при размонтировании
    }
  }, [chatId, setupSSEConnection])

  return { messages, chatInfo, error, connectionStatus }
} 