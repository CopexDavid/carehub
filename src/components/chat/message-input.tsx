import { useState, useRef } from 'react'
import { Smile, Paperclip, Send } from 'lucide-react'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { toast } from 'react-hot-toast'
import { cn } from '@/lib/utils'
import { VoiceRecorder } from './voice-recorder'

interface MessageInputProps {
  chatId: string
  onSendMessage: (text: string) => Promise<void>
  onSendFile: (file: File) => Promise<void>
  disabled?: boolean
}

export function MessageInput({ chatId, onSendMessage, onSendFile, disabled }: MessageInputProps) {
  const [message, setMessage] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSendMessage = async () => {
    if (!message.trim() || disabled) return
    try {
      await onSendMessage(message.trim())
      setMessage('')
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Ошибка при отправке сообщения')
    }
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || disabled) return
    try {
      await onSendFile(file)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Error sending file:', error)
      toast.error('Ошибка при отправке файла')
    }
  }

  const addEmoji = (emoji: any) => {
    setMessage(prev => prev + emoji.native)
    setShowEmojiPicker(false)
  }

  return (
    <div className="p-3 bg-white dark:bg-gray-900 border-t">
      <div className="flex items-center gap-2">
        <VoiceRecorder 
          chatId={chatId}
          disabled={disabled} 
        />

        <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="text-gray-500 hover:text-gray-700"
            >
              <Smile className="h-5 w-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent 
            side="top" 
            align="start" 
            className="w-auto p-0 border-none shadow-xl"
          >
            <Picker
              data={data}
              onEmojiSelect={addEmoji}
              theme="light"
              previewPosition="none"
            />
          </PopoverContent>
        </Popover>

        <Button
          size="icon"
          variant="ghost"
          className="text-gray-500 hover:text-gray-700"
          onClick={() => fileInputRef.current?.click()}
        >
          <Paperclip className="h-5 w-5" />
        </Button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx"
        />

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSendMessage()
            }
          }}
          placeholder="Введите сообщение..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={disabled}
        />

          <Button
            size="icon"
            variant="ghost"
            onClick={handleSendMessage}
          disabled={!message.trim() || disabled}
          className={cn(
            "transition-colors",
            message.trim() ? "text-blue-500 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"
          )}
          >
            <Send className="h-5 w-5" />
          </Button>
      </div>
    </div>
  )
} 