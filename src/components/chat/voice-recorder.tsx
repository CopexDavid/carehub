import { useState, useRef } from 'react'
import { Mic, Send, X, Play, Pause, Square } from 'lucide-react'
import { Button } from '../ui/button'
import { toast } from 'react-hot-toast'
import { cn } from '@/lib/utils'

interface VoiceRecorderProps {
  chatId: string
  disabled?: boolean
}

type RecordingState = 'idle' | 'recording' | 'preview' | 'playing' | 'sending'

const isState = (current: RecordingState, expected: RecordingState): boolean => {
  return current === expected
}

export function VoiceRecorder({ chatId, disabled }: VoiceRecorderProps) {
  const [state, setState] = useState<RecordingState>('idle')
  const [recordingTime, setRecordingTime] = useState(0)
  const [playbackTime, setPlaybackTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout>()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const recordedBlobRef = useRef<Blob | null>(null)

  const cleanup = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop()
    }
    if (mediaRecorderRef.current?.stream) {
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
    }
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.src = ''
    }
    setRecordingTime(0)
    setPlaybackTime(0)
    setDuration(0)
    setState('idle')
    audioChunksRef.current = []
    recordedBlobRef.current = null
  }

  const startRecording = async () => {
    try {
      cleanup()

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 48000,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      })

      // Проверяем поддерживаемые форматы
      const mimeTypes = [
        'audio/ogg;codecs=opus',
        'audio/ogg',
        'audio/opus',
        'audio/webm;codecs=opus'
      ]

      let selectedMimeType = ''
      for (const mimeType of mimeTypes) {
        if (MediaRecorder.isTypeSupported(mimeType)) {
          selectedMimeType = mimeType
          break
        }
      }

      if (!selectedMimeType) {
        throw new Error('Ни один из поддерживаемых форматов не доступен')
      }

      console.log('Using MIME type:', selectedMimeType)

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: selectedMimeType,
        audioBitsPerSecond: 128000
      })

      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = async () => {
        try {
          // Используем тот же MIME-тип, что и при записи
          const audioBlob = new Blob(audioChunksRef.current, { 
            type: selectedMimeType 
          })

          if (audioBlob.size === 0) {
            throw new Error('Не удалось записать аудио')
          }

          recordedBlobRef.current = audioBlob
          const audioUrl = URL.createObjectURL(audioBlob)

          if (!audioRef.current) {
            audioRef.current = new Audio()
          }

          audioRef.current.src = audioUrl
          audioRef.current.onloadedmetadata = () => {
            setDuration(audioRef.current?.duration || 0)
          }
          audioRef.current.ontimeupdate = () => {
            setPlaybackTime(audioRef.current?.currentTime || 0)
          }
          audioRef.current.onended = () => {
            setState('preview')
            setPlaybackTime(0)
          if (audioRef.current) {
              audioRef.current.currentTime = 0
            }
          }

          setState('preview')
        } catch (error) {
          console.error('Error processing recording:', error)
          toast.error('Ошибка при обработке записи')
          cleanup()
        }
      }

      mediaRecorder.start(100)
      setState('recording')

      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)

    } catch (error) {
      console.error('Error starting recording:', error)
      toast.error('Ошибка при начале записи')
      cleanup()
    }
  }

  const stopRecording = () => {
    try {
      if (mediaRecorderRef.current?.state === 'recording') {
        mediaRecorderRef.current.stop()
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      }
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    } catch (error) {
      console.error('Error stopping recording:', error)
      toast.error('Ошибка при остановке записи')
      cleanup()
    }
  }

  const togglePlayback = async () => {
    if (!audioRef.current) return

    try {
      if (state === 'playing') {
        audioRef.current.pause()
        setState('preview')
      } else {
        await audioRef.current.play()
        setState('playing')
      }
    } catch (error) {
      console.error('Error playing audio:', error)
      toast.error('Ошибка воспроизведения')
      setState('preview')
    }
  }

  const sendVoiceMessage = async () => {
    console.log('sendVoiceMessage clicked')
    console.log('Current state:', state)
    console.log('Blob exists:', !!recordedBlobRef.current)
    console.log('ChatId:', chatId)
    
    if (!recordedBlobRef.current || !chatId || isState(state, 'sending')) {
      console.log('Early return conditions:', {
        noBlob: !recordedBlobRef.current,
        noChatId: !chatId,
        isSending: isState(state, 'sending')
      })
      return
    }

    try {
      setState('sending')
      console.log('Starting to send voice message...')
      console.log('Blob size:', recordedBlobRef.current.size)
      console.log('Blob type:', recordedBlobRef.current.type)
      
      if (recordedBlobRef.current.size > 16 * 1024 * 1024) {
        throw new Error('Голосовое сообщение слишком длинное')
      }

      const formData = new FormData()
      formData.append('audio', recordedBlobRef.current, 'voice-message.ogg')
      formData.append('chatId', chatId)

      console.log('Sending request to API...')
      const response = await fetch('/api/whatsapp/messages/voice', {
        method: 'POST',
        body: formData
      })

      console.log('Got API response:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error('API error response:', errorData)
        throw new Error(errorData.error || 'Не удалось отправить сообщение')
      }

      const result = await response.json()
      console.log('API success response:', result)

      toast.success('Голосовое сообщение отправлено')
      cleanup()
    } catch (error) {
      console.error('Error sending voice message:', error)
      toast.error(error instanceof Error ? error.message : 'Ошибка при отправке сообщения')
      setState('preview')
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (state === 'recording') {
    return (
      <div className="flex items-center gap-2 flex-1">
        <div className="flex items-center gap-2 px-4 py-2 flex-1 bg-gray-50 dark:bg-gray-900 rounded-full">
          <span className="animate-pulse">
            <span className="block w-2 h-2 rounded-full bg-blue-500" />
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[48px] tabular-nums">
            {formatTime(recordingTime)}
          </span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={cleanup}
          className="text-red-500 hover:text-red-700"
          title="Отменить запись"
        >
          <X className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={stopRecording}
          className="text-gray-500 hover:text-gray-700"
          title="Остановить запись"
        >
          <Square className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  if (state === 'preview' || state === 'playing' || state === 'sending') {
    return (
      <div className="flex items-center gap-2 flex-1">
        <div className="flex items-center gap-2 px-4 py-2 flex-1 bg-gray-50 dark:bg-gray-900 rounded-full">
        <Button
            size="icon"
          variant="ghost"
            onClick={togglePlayback}
            disabled={state === 'sending'}
            className={cn(
              "text-blue-500 hover:text-blue-700 p-1",
              state === 'sending' && "opacity-50 cursor-not-allowed"
            )}
            title={state === 'playing' ? "Приостановить" : "Воспроизвести"}
        >
            {state === 'playing' ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        
          <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-100"
            style={{ 
                width: `${(playbackTime / (duration || 1)) * 100}%` 
            }}
          />
        </div>

          <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[48px] tabular-nums">
            {formatTime(playbackTime)}
        </span>
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={cleanup}
          disabled={state === 'sending'}
          className={cn(
            "text-red-500 hover:text-red-700",
            state === 'sending' && "opacity-50 cursor-not-allowed"
          )}
          title="Отменить"
        >
          <X className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            console.log('Send button clicked')
            sendVoiceMessage()
          }}
          disabled={state === 'sending'}
          className={cn(
            "text-green-500 hover:text-green-700",
            state === 'sending' && "opacity-50 cursor-not-allowed"
          )}
          title="Отправить"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={startRecording}
      disabled={disabled || isState(state, 'sending')}
      className={cn(
        "text-gray-500 hover:text-gray-700",
        (disabled || isState(state, 'sending')) && "opacity-50 cursor-not-allowed"
      )}
      title="Записать голосовое сообщение"
    >
      <Mic className="h-5 w-5" />
    </Button>
  )
} 