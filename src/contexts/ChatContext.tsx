import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react'

interface BaseMessageContent {
  body: string
}

interface MediaMessageContent {
  type: 'file'
  url: string
  filename: string
}

interface VoiceMessageContent {
  type: 'voice'
  url: string
  duration: number
  mime_type?: string
  voice?: boolean
}

interface AudioMessageContent {
  type: 'audio'
  url: string
  duration: number
  mime_type: string
  voice: boolean
}

type MessageContent = 
  | string 
  | BaseMessageContent 
  | MediaMessageContent 
  | VoiceMessageContent 
  | AudioMessageContent

interface Message {
  id: string
  content: MessageContent
  from: string
  timestamp: string
  status: 'sent' | 'delivered' | 'read' | 'failed'
  isAssistant?: boolean
  error?: {
    code: number
    message: string
    details?: string
  }
}

interface Chat {
  id: string
  phoneNumber: string
  displayName?: string
  name?: string
  lastMessage?: MessageContent
  time?: string
  unreadCount?: number
  isOnline?: boolean
  messages: Message[]
  hasMoreMessages?: boolean
  group?: string
}

type ChatAction =
  | { type: 'SET_CHATS'; payload: Chat[] }
  | { type: 'UPDATE_CHAT'; payload: Partial<Chat> }
  | { type: 'NEW_MESSAGE'; payload: { chatId: string; message: Message } }
  | { type: 'UPDATE_MESSAGE_STATUS'; payload: { 
      messageId: string; 
      status: 'sent' | 'delivered' | 'read' | 'failed';
      error?: {
        code: number;
        message: string;
        details?: string;
      }
    } }
  | { type: 'ADD_OLD_MESSAGES'; payload: { chatId: string; messages: Message[]; hasMore: boolean } }

const chatReducer = (state: Chat[], action: ChatAction): Chat[] => {
  switch (action.type) {
    case 'SET_CHATS':
      return action.payload

    case 'UPDATE_CHAT':
      return state.map(chat =>
        chat.id === action.payload.id
          ? { 
              ...chat, 
              ...action.payload,
              ...(action.payload.displayName && { name: action.payload.displayName }),
              ...(action.payload.group === null && { group: undefined })
            }
          : chat
      )

    case 'NEW_MESSAGE':
      return state.map(chat =>
        chat.id === action.payload.chatId
          ? {
              ...chat,
              messages: [...(chat.messages || []), action.payload.message],
              lastMessage: action.payload.message.content,
              time: action.payload.message.timestamp,
              unreadCount: (chat.unreadCount || 0) + 1
            }
          : chat
      )

    case 'UPDATE_MESSAGE_STATUS':
      return state.map(chat => ({
        ...chat,
        messages: (chat.messages || []).map(message =>
          message.id === action.payload.messageId
            ? { 
                ...message, 
                status: action.payload.status,
                ...(action.payload.error ? { error: action.payload.error } : {})
              }
            : message
        )
      }))

    case 'ADD_OLD_MESSAGES':
      return state.map(chat =>
        chat.id === action.payload.chatId
          ? {
              ...chat,
              messages: [...action.payload.messages, ...chat.messages],
              hasMoreMessages: action.payload.hasMore
            }
          : chat
      )

    default:
      return state
  }
}

interface ChatContextType {
  chats: Chat[]
  selectedChatId: string | null
  setSelectedChatId: (id: string | null) => void
  dispatch: React.Dispatch<ChatAction>
  connectionStatus: 'connected' | 'disconnected' | 'reconnecting'
}

const ChatContext = createContext<ChatContextType | null>(null)

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chats, dispatch] = useReducer(chatReducer, [])
  const [selectedChatId, setSelectedChatId] = React.useState<string | null>(null)
  const [updateTrigger, setUpdateTrigger] = React.useState(0)
  const [connectionStatus, setConnectionStatus] = React.useState<'connected' | 'disconnected' | 'reconnecting'>('disconnected')
  
  const eventSourceRef = useRef<EventSource | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>()
  const lastSyncTimeRef = useRef<number>(Date.now())
  const syncIntervalRef = useRef<NodeJS.Timeout>()
  const reconnectAttemptsRef = useRef<number>(0)
  const MAX_RECONNECT_ATTEMPTS = 5
  const INITIAL_RECONNECT_DELAY = 1000 // 1 second

  // Функция для вычисления задержки переподключения
  const getReconnectDelay = () => {
    // Экспоненциальная задержка: 1s, 2s, 4s, 8s, 16s
    return Math.min(
      INITIAL_RECONNECT_DELAY * Math.pow(2, reconnectAttemptsRef.current),
      30000 // Максимальная задержка 30 секунд
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

  // Функция для загрузки чатов
    const fetchChats = async () => {
      try {
        const response = await fetch('/api/whatsapp/chats')
        const data = await response.json()
        
        if (Array.isArray(data)) {
          const chatsWithMessages = data.map(chat => ({
            ...chat,
            messages: chat.messages || []
          }))
          dispatch({ type: 'SET_CHATS', payload: chatsWithMessages })
        }
      lastSyncTimeRef.current = Date.now()
      } catch (error) {
        console.error('Error fetching chats:', error)
      }
    }

  // Функция для проверки актуальности данных
  const checkDataFreshness = async () => {
    const now = Date.now()
    const timeSinceLastSync = now - lastSyncTimeRef.current
    
    // Если прошло больше 30 секунд с последней синхронизации
    if (timeSinceLastSync > 30000) {
      await fetchChats()
    }
  }

  // Функция для установки SSE соединения
  const setupSSEConnection = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close()
    }

    const eventSource = new EventSource('/api/whatsapp/events')
    eventSourceRef.current = eventSource

    eventSource.onopen = () => {
      setConnectionStatus('connected')
      reconnectAttemptsRef.current = 0 // Сброс счетчика при успешном подключении
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
    }

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('Received SSE event:', data)
        lastSyncTimeRef.current = Date.now()
        
        switch (data.type) {
          case 'new_message':
            dispatch({
              type: 'NEW_MESSAGE',
              payload: {
                chatId: data.chat.id,
                message: {
                  id: data.message.id,
                  content: data.message.content,
                  from: data.message.from,
                  timestamp: data.message.timestamp,
                  status: data.message.status,
                  isAssistant: data.message.isAssistant
                }
              }
            })
            setUpdateTrigger(prev => prev + 1)
            break
          
          case 'message_status':
            dispatch({
              type: 'UPDATE_MESSAGE_STATUS',
              payload: {
                messageId: data.messageId,
                status: data.status
              }
            })
            break
        }
      } catch (error) {
        console.error('Error processing SSE event:', error)
        checkDataFreshness()
      }
    }

    eventSource.onerror = (error) => {
      console.error('SSE connection error:', error)
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
      reconnectTimeoutRef.current = setTimeout(() => {
        setupSSEConnection()
        fetchChats() // Синхронизируем данные при переподключении
      }, delay)
    }
  }

  // Инициализация при монтировании
  useEffect(() => {
    resetConnectionState() // Сброс состояния при монтировании
    fetchChats()
    setupSSEConnection()

    // Установка интервала проверки актуальности данных
    syncIntervalRef.current = setInterval(checkDataFreshness, 30000)

    return () => {
      resetConnectionState() // Сброс состояния при размонтировании
      if (syncIntervalRef.current) {
        clearInterval(syncIntervalRef.current)
      }
    }
  }, [])

  const contextValue = React.useMemo(() => ({
    chats,
    selectedChatId,
    setSelectedChatId,
    dispatch,
    connectionStatus
  }), [chats, selectedChatId, connectionStatus])

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) throw new Error('useChat must be used within ChatProvider')
  return context
} 