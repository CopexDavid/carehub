import { useChat } from '@/contexts/ChatContext'
import { ChatHeader } from './chat-header'
import { MessageList } from './message-list'
import { MessageInput } from './message-input'
import { toast } from 'react-hot-toast'

interface ChatProps {
  chatId: string
  disabled?: boolean
}

export function Chat({ chatId, disabled }: ChatProps) {
  const { chats, dispatch } = useChat()
  const chat = chats.find(c => c.id === chatId)

  if (!chat) {
    return <div>Чат не найден</div>
  }

  const handleSendMessage = async (text: string) => {
    try {
      const response = await fetch('/api/whatsapp/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId,
          message: text
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()

      dispatch({
        type: 'NEW_MESSAGE',
        payload: {
          chatId,
          message: {
            id: data.messageId,
            content: text,
            from: 'me',
            timestamp: new Date().toISOString(),
            status: 'sent'
          }
        }
      })
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Не удалось отправить сообщение')
    }
  }

  const handleSendFile = async (file: File) => {
    try {
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

      dispatch({
        type: 'NEW_MESSAGE',
        payload: {
          chatId,
          message: {
            id: data.messageId,
            content: {
              type: 'file',
              url: data.url,
              filename: file.name
            },
            from: 'me',
            timestamp: new Date().toISOString(),
            status: 'sent'
          }
        }
      })
    } catch (error) {
      console.error('Error sending file:', error)
      toast.error('Не удалось отправить файл')
    }
  }

  const handleSendVoice = async (audioBlob: Blob) => {
    if (!audioBlob) {
      console.error('No audio blob provided')
      return
    }

    console.log('Chat handleSendVoice called with blob:', audioBlob)
    try {
      // Создаем FormData для отправки файла
      const formData = new FormData()
      formData.append('audio', audioBlob, 'voice-message.ogg')
      formData.append('chatId', chatId)

      console.log('Sending voice message to API...')
      const response = await fetch('/api/whatsapp/messages/voice', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to send voice message')
      }

      const data = await response.json()
      console.log('API response:', data)

      // Добавляем сообщение в контекст
      dispatch({
        type: 'NEW_MESSAGE',
        payload: {
          chatId,
          message: {
            id: data.messageId,
            content: JSON.stringify({
              type: 'voice',
              url: data.url,
              duration: data.duration,
              voice: true
            }),
            from: 'me',
            timestamp: new Date().toISOString(),
            status: 'sent'
          }
        }
      })
    } catch (error) {
      console.error('Error sending voice message:', error)
      toast.error('Не удалось отправить голосовое сообщение')
      throw error // Пробрасываем ошибку дальше
    }
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader
        chatId={chatId}
        phoneNumber={chat.phoneNumber}
        name={chat.name}
        group={chat.group}
      />
      <MessageList messages={chat.messages} />
      <MessageInput
        onSendMessage={handleSendMessage}
        onSendFile={handleSendFile}
        onSendVoice={handleSendVoice}
        disabled={disabled}
      />
    </div>
  )
} 