import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from '../ui/button'
import { Slider } from '../ui/slider'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion'

interface VoiceMessageProps {
  url: string
  duration: number
}

export function VoiceMessage({ url, duration: initialDuration }: VoiceMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(initialDuration || 0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isVolumeVisible, setIsVolumeVisible] = useState(false)
  const [proxyUrl, setProxyUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const previousVolume = useRef(volume)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const volumeTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (initialDuration && initialDuration > 0) {
      setDuration(initialDuration)
    }
  }, [initialDuration])

  useEffect(() => {
    const encodedUrl = encodeURIComponent(url)
    setProxyUrl(`/api/whatsapp/media?url=${encodedUrl}`)
  }, [url])

  useEffect(() => {
    if (!proxyUrl) return

    const audio = new Audio()
    audioRef.current = audio

    const setupAudio = async () => {
      try {
        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('loadeddata', handleLoadedData)
        audio.addEventListener('error', handleError)
        audio.addEventListener('ended', handleEnded)
        
        audio.volume = isMuted ? 0 : volume
        audio.playbackRate = playbackRate
        audio.src = proxyUrl
        
        // Предзагрузка аудио
        await audio.load()
      } catch (error) {
        console.error('Error setting up audio:', error)
        setError('Ошибка инициализации аудио')
      }
    }

    setupAudio()

    return () => {
      try {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
        audio.removeEventListener('loadeddata', handleLoadedData)
        audio.removeEventListener('error', handleError)
        audio.removeEventListener('ended', handleEnded)
        audio.pause()
        audio.src = ''
        audioRef.current = null
      } catch (error) {
        console.error('Error cleaning up audio:', error)
      }
    }
  }, [proxyUrl, isMuted, volume, playbackRate, initialDuration])

  const togglePlayPause = async () => {
    if (!audioRef.current || !proxyUrl) return

    try {
      setError(null)
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        setIsLoading(true)
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.error('Error playing audio:', error)
      setError('Ошибка воспроизведения')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current && !isDragging) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      const audioDuration = initialDuration || audioRef.current.duration
      setDuration(audioDuration)
      setIsLoading(false)
    }
  }

  const handleLoadedData = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      const audioDuration = initialDuration || audioRef.current.duration
      setDuration(audioDuration)
    }
    setIsLoading(false)
  }

  const handleError = () => {
    const error = audioRef.current?.error
    let errorMessage = 'Ошибка загрузки аудио'
    
    if (error) {
      switch (error.code) {
        case MediaError.MEDIA_ERR_ABORTED:
          errorMessage = 'Воспроизведение прервано'
          break
        case MediaError.MEDIA_ERR_NETWORK:
          errorMessage = 'Ошибка сети при загрузке'
          break
        case MediaError.MEDIA_ERR_DECODE:
          errorMessage = 'Ошибка декодирования аудио'
          break
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMessage = 'Формат аудио не поддерживается'
          break
      }
    }
    
    console.error('Audio error:', error)
    setError(errorMessage)
    setIsLoading(false)
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current && duration > 0) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const percent = (event.clientX - rect.left) / rect.width
      const newTime = percent * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleProgressBarDragStart = () => {
    setIsDragging(true)
  }

  const handleProgressBarDragEnd = () => {
    setIsDragging(false)
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
      previousVolume.current = newVolume
    }
  }

  const handleVolumeMouseEnter = () => {
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current)
    }
    setIsVolumeVisible(true)
  }

  const handleVolumeMouseLeave = () => {
    volumeTimeoutRef.current = setTimeout(() => {
      setIsVolumeVisible(false)
    }, 500)
  }

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume.current)
      setIsMuted(false)
    } else {
      previousVolume.current = volume
      setVolume(0)
      setIsMuted(true)
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '00:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(event.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  return (
    <div className="flex flex-col gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/90 dark:border dark:border-gray-800 max-w-md shadow-sm">
      <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
          <button
          onClick={togglePlayPause}
          className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center shadow-md',
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600',
              'hover:opacity-90 transition-all'
          )}
        >
            {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
          </button>

        <div className="flex-1">
            <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
              style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
            />
              <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">{formatTime(currentTime)}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                className="text-xs font-medium"
              >
                {playbackRate}x
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {[0.5, 1, 1.5, 2].map((rate) => (
                <DropdownMenuItem
                  key={rate}
                  onClick={() => setPlaybackRate(rate)}
                  className={cn(
                    "text-sm",
                    playbackRate === rate && "font-bold"
                  )}
                >
                  {rate}x
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div 
            className="relative"
            onMouseEnter={handleVolumeMouseEnter}
            onMouseLeave={handleVolumeMouseLeave}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              className="h-8 w-8"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            
            <div className={cn(
              "absolute bottom-full right-0 mb-2 transition-opacity duration-200",
              isVolumeVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
                <div className="w-32 py-2">
                  <Slider
                    value={[volume]}
                    min={0}
                    max={1}
                    step={0.01}
                    onValueChange={handleVolumeChange}
                    className="w-full"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-xs text-red-500 mt-1">
          {error}
        </div>
      )}

      <audio
        ref={audioRef}
        src={proxyUrl || ''}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onLoadedData={handleLoadedData}
        onError={handleError}
        onEnded={handleEnded}
        preload="metadata"
        className="hidden"
      />
    </div>
  )
} 