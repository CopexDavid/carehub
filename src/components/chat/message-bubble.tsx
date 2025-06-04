import { cn } from '@/lib/utils'
import { Check, CheckCheck, Bot, AlertCircle } from 'lucide-react'
import { Avatar } from './avatar'
import { motion } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { VoiceMessage } from './voice-message'

interface MessageContent {
  type?: 'text' | 'voice' | 'file' | 'audio'
  body?: string
  url?: string
  duration?: number
  filename?: string
  mime_type?: string
  voice?: boolean
}

interface MessageBubbleProps {
  message: string | MessageContent
  time: string
  type: 'sent' | 'received' | 'ai'
  status?: 'sent' | 'delivered' | 'read' | 'failed'
  showTail?: boolean
  senderName?: string
  avatar?: string
  isAssistant?: boolean
  error?: {
    code: string
    message: string
    details?: string
  }
}

export function MessageBubble({ 
  message, 
  time, 
  type, 
  status = 'sent',
  showTail = true,
  senderName,
  avatar,
  isAssistant = false,
  error
}: MessageBubbleProps) {
  const renderContent = () => {
    let messageContent: MessageContent | null = null;

    // Если message - строка JSON, пробуем её распарсить
    if (typeof message === 'string' && message.startsWith('{')) {
      try {
        messageContent = JSON.parse(message) as MessageContent;
      } catch (error) {
        console.error('Error parsing message JSON:', error);
      }
    } else if (typeof message === 'object') {
      messageContent = message as MessageContent;
    }

    // Обрабатываем голосовые сообщения
    if (messageContent && (messageContent.type === 'voice' || messageContent.type === 'audio')) {
      if (messageContent.url) {
          return (
            <div className="min-w-[200px]">
            <VoiceMessage url={messageContent.url} duration={messageContent.duration || 0} />
            </div>
        );
      }
      return <p className="text-sm text-gray-500">Голосовое сообщение недоступно</p>;
        }

    // Обрабатываем файлы
    if (messageContent?.type === 'file' && messageContent.url) {
        return (
          <a 
          href={messageContent.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm underline break-all"
          >
          {messageContent.filename || 'Файл'}
          </a>
      );
    }

    // Обрабатываем текстовые сообщения
    if (typeof message === 'string') {
      return <p className="break-words text-sm">{message}</p>;
    }

    if (messageContent?.body) {
      return <p className="break-words text-sm">{messageContent.body}</p>;
        }

    return <p className="text-sm text-gray-500">Неподдерживаемый тип сообщения</p>;
  };

  return (
    <div className={cn(
      'flex items-end',
      type === 'sent' ? 'justify-end' : 'justify-start',
      'w-full relative'
    )}>
      <div className={cn(
        'max-w-[50%] rounded-xl px-3 py-1.5',
        type === 'sent' ? 
          status === 'failed' ? 'bg-red-500 text-white' : 
          isAssistant ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md' :
          'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md' : 
        'bg-gray-100 dark:bg-gray-800 dark:text-white shadow-md',
        type === 'sent' ? 'ml-auto' : 'mr-auto',
        showTail && (type === 'sent' ? 'rounded-br-none' : 'rounded-bl-none')
      )}>
        {isAssistant && (
          <div className="absolute -bottom-5 right-0 flex items-center gap-1 text-[10px] text-gray-600 dark:text-gray-400">
            <span>Ассистент</span>
            <Bot className="w-3 h-3 text-blue-500" />
          </div>
        )}
        {renderContent()}
        <div className={cn(
          'text-[10px] mt-0.5 flex items-center gap-1',
          type === 'sent' ? (isAssistant ? 'text-blue-100' : 'text-green-100') : 'text-gray-500'
        )}>
          <span>{time}</span>
          {type === 'sent' && (
            <span className="ml-0.5 flex items-center gap-0.5">
              {status === 'read' && <CheckCheck className="h-3 w-3" />}
              {status === 'delivered' && <CheckCheck className="h-3 w-3" />}
              {status === 'sent' && <Check className="h-3 w-3" />}
              {status === 'failed' && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AlertCircle className="h-3 w-3 text-white" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium text-sm">Ошибка отправки</p>
                      {error && (
                        <p className="text-xs text-gray-500">{error.details || error.message}</p>
                      )}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 