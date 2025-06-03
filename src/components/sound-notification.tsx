import { useEffect, useRef } from 'react'

export function SoundNotification() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/notification.mp3')
  }, [])

  const playNotification = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing notification:', error)
      })
    }
  }

  return null
}

// Создаем глобальную функцию для воспроизведения звука
let globalPlayNotification: (() => void) | null = null

export function setNotificationPlayer(player: () => void) {
  globalPlayNotification = player
}

export function playNotificationSound() {
  globalPlayNotification?.()
} 