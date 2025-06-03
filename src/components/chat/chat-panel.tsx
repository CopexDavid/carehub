'use client'

import { useEffect, useState, useMemo } from 'react'
import { Avatar } from './avatar'
import { MessageBubble } from '@/components/chat/message-bubble'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, Info, X, Pencil, Bot } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { toast } from 'react-hot-toast'
import { cn } from '@/lib/utils'
import { MessageInput } from '@/components/chat/message-input'

interface Message {
  id: string
  text: string
  time: string
  timestamp: string // ISO date string
  sender: 'customer' | 'manager' | 'ai'
  senderName?: string
  status?: 'sent' | 'delivered' | 'read'
  content?: {
    type?: 'text' | 'file' | 'voice'
    url?: string
    filename?: string
    duration?: number
  }
}

interface ChatData {
  id: string
  name: string
  displayName?: string
  phoneNumber: string
  avatar: string | null
  isOnline: boolean
  lastSeen?: string
  messages: Message[]
  assistantEnabled?: boolean
}

interface ChatPanelProps {
  chatId: string | null
}

interface GroupedMessages {
  [key: string]: Message[]
}

export function ChatPanel({ chatId }: ChatPanelProps) {
  const [chatData, setChatData] = useState<ChatData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [isEditingName, setIsEditingName] = useState(false)
  const [newDisplayName, setNewDisplayName] = useState('')

  // Группировка сообщений по датам
  const groupedMessages = useMemo(() => {
    if (!chatData?.messages) return {}

    return chatData.messages.reduce((groups: GroupedMessages, message) => {
      const date = new Date(message.timestamp).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
      
      if (!groups[date]) {
        groups[date] = []
      }
      
      groups[date].push(message)
      return groups
    }, {})
  }, [chatData?.messages])

  // Форматирование номера телефона
  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
    }
    return phone
  }

  useEffect(() => {
    if (!chatId) return

    const fetchChatData = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const response = await fetch(`/api/whatsapp/chats/${chatId}`)
        const json = await response.json()
        
        if (!response.ok) {
          throw new Error(json.error || 'Failed to fetch chat data')
        }
        
        setChatData(json.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching chat:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChatData()
  }, [chatId])

  const toggleAssistant = async () => {
    if (!chatData) return;

    try {
      const response = await fetch(`/api/assistant/chats/${chatId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assistantEnabled: !chatData.assistantEnabled
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle assistant');
      }

      const updatedChat = await response.json();
      setChatData(updatedChat);
      toast.success(
        chatData.assistantEnabled ? 
        'Ассистент отключен' : 
        'Ассистент включен'
      );
    } catch (err) {
      console.error('Error toggling assistant:', err);
      toast.error('Не удалось изменить настройки ассистента');
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !chatData) return;

    try {
      let response;
      
      if (chatData.assistantEnabled) {
        // Отправляем сообщение через ассистента
        response = await fetch('/api/assistant/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: chatData.phoneNumber,
            text: newMessage
          }),
        });
      } else {
        // Отправляем обычное сообщение
        response = await fetch('/api/whatsapp/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: chatData.phoneNumber,
            text: newMessage,
          }),
        });
      }

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Обновляем чат после отправки сообщения
      const updatedChat = await fetch(`/api/whatsapp/chats/${chatId}`).then(res => res.json());
      setChatData(updatedChat.data);
      setNewMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
      toast.error('Не удалось отправить сообщение');
    }
  };

  const handleUpdateDisplayName = async () => {
    if (!chatData || !newDisplayName.trim()) return

    try {
      const response = await fetch(`/api/whatsapp/chats/${chatId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          displayName: newDisplayName.trim()
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update contact name')
      }

      const updatedChat = await response.json()
      setChatData(updatedChat.data)
      setIsEditingName(false)
      toast.success('Имя контакта обновлено')
    } catch (err) {
      console.error('Error updating contact name:', err)
      toast.error('Не удалось обновить имя контакта')
    }
  }

  const handleSendVoice = async (audioBlob: Blob) => {
    try {
      if (!chatId) {
        throw new Error('Chat ID is required')
      }

      // Создаем FormData для отправки файла
      const formData = new FormData()
      formData.append('audio', audioBlob, 'voice-message.ogg')
      formData.append('chatId', chatId)

      const response = await fetch('/api/whatsapp/messages/voice', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to send voice message')
      }

      const data = await response.json()

      // Добавляем сообщение в состояние чата
      const newMessage: Message = {
        id: data.messageId,
        text: 'Голосовое сообщение',
        time: new Date().toISOString(),
        timestamp: new Date().toISOString(),
        sender: 'manager',
        status: 'sent',
        content: {
          type: 'voice',
          url: data.url,
          duration: data.duration
        }
      }

      setChatData(prev => prev ? {
        ...prev,
        messages: [...prev.messages, newMessage]
      } : null)

    } catch (error) {
      console.error('Error sending voice message:', error)
      toast.error('Не удалось отправить голосовое сообщение')
    }
  }

  const handleSendFile = async (file: File) => {
    try {
      if (!chatId) {
        throw new Error('Chat ID is required')
      }

      const formData = new FormData()
      formData.append('file', file)
      formData.append('chatId', chatId)

      const response = await fetch('/api/whatsapp/messages/file', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to send file')
      }

      const data = await response.json()

      // Добавляем сообщение в состояние чата
      const newMessage: Message = {
        id: data.messageId,
        text: file.name,
        time: new Date().toISOString(),
        timestamp: new Date().toISOString(),
        sender: 'manager',
        status: 'sent'
      }

      setChatData(prev => prev ? {
        ...prev,
        messages: [...prev.messages, newMessage]
      } : null)

    } catch (error) {
      console.error('Error sending file:', error)
      toast.error('Не удалось отправить файл')
    }
  }

  if (!chatId) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Выберите чат для начала общения
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Загрузка...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center text-destructive">
        {error}
      </div>
    )
  }

  if (!chatData) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Чат не найден
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar
            src={chatData?.avatar || ''}
            alt={chatData?.displayName || chatData?.phoneNumber || ''}
            size="sm"
            showStatus
            isOnline={chatData?.isOnline || false}
          />
          <div className="flex items-center gap-2">
            <div>
              <div className="font-medium">
                {chatData?.displayName || formatPhoneNumber(chatData?.phoneNumber || '')}
              </div>
              {chatData?.displayName && (
                <div className="text-xs text-muted-foreground">
                  {formatPhoneNumber(chatData?.phoneNumber || '')}
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                setNewDisplayName(chatData.displayName || '')
                setIsEditingName(true)
              }}
            >
              <Pencil className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg border border-gray-200">
            <Bot className={cn(
              "h-5 w-5",
              chatData?.assistantEnabled ? "text-blue-500" : "text-gray-400"
            )} />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700">
                {chatData?.assistantEnabled ? 'Ассистент включен' : 'Ассистент выключен'}
              </span>
              <Switch
                checked={chatData?.assistantEnabled || false}
                onCheckedChange={toggleAssistant}
                className="data-[state=checked]:bg-blue-500"
              />
          </div>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Info className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-background border shadow-lg backdrop-blur-none">
            <DialogHeader>
              <DialogTitle className="text-foreground">Информация о контакте</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 bg-background">
              <div className="flex flex-col items-center gap-2 py-4">
                <Avatar
                  src={chatData.avatar || ''}
                  alt={chatData.displayName || chatData.phoneNumber}
                  size="lg"
                  showStatus
                  isOnline={chatData.isOnline}
                />
                <h3 className="text-lg font-medium">
                  {chatData.displayName || formatPhoneNumber(chatData.phoneNumber)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {formatPhoneNumber(chatData.phoneNumber)}
                </p>
                {chatData.lastSeen && (
                  <p className="text-sm text-muted-foreground">
                    Был(а) в сети: {new Date(chatData.lastSeen).toLocaleString('ru-RU')}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Статистика чата</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Всего сообщений</p>
                    <p className="font-medium">{chatData.messages.length}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Первое сообщение</p>
                    <p className="font-medium">
                      {new Date(chatData.messages[0]?.timestamp).toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        </div>

        <Dialog open={isEditingName} onOpenChange={setIsEditingName}>
          <DialogContent className="sm:max-w-[425px] bg-card">
            <DialogHeader>
              <DialogTitle>Изменить имя контакта</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Input
                placeholder="Введите имя контакта"
                value={newDisplayName}
                onChange={(e) => setNewDisplayName(e.target.value)}
                className="w-full"
              />
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsEditingName(false)}
              >
                Отмена
              </Button>
              <Button
                onClick={handleUpdateDisplayName}
                disabled={!newDisplayName.trim()}
              >
                Сохранить
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {Object.entries(groupedMessages).map(([date, messages]) => (
          <div key={date} className="space-y-4">
            <div className="flex items-center justify-center">
              <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                {date}
              </span>
            </div>
            <div className="space-y-2">
              {messages.map((message, index) => (
                <MessageBubble
                  key={message.id}
                  message={
                    message.content?.type === 'voice'
                      ? {
                          type: 'voice',
                          url: message.content.url,
                          duration: message.content.duration || 0
                        }
                      : message.text
                  }
                  time={message.time}
                  type={
                    message.sender === 'customer' 
                      ? 'received' 
                      : message.sender === 'ai'
                      ? 'ai'
                      : 'sent'
                  }
                  status={message.status}
                  showTail={
                    index === 0 ||
                    messages[index - 1]?.sender !== message.sender
                  }
                  senderName={
                    message.sender === 'customer' && 
                    (index === 0 || messages[index - 1]?.sender !== 'customer')
                      ? chatData.displayName || chatData.phoneNumber
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <MessageInput
            onSendMessage={handleSendMessage}
            onSendFile={handleSendFile}
            onSendVoice={handleSendVoice}
            disabled={false}
          />
        </div>
      </div>
    </div>
  )
} 