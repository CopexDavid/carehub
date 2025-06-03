'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AvatarProps {
  src: string | null
  alt: string
  size?: 'sm' | 'md' | 'lg'
  showStatus?: boolean
  isOnline?: boolean
  className?: string
  fallback?: React.ReactNode
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-16 w-16'
}

const statusSizeClasses = {
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-4 w-4'
}

export function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  showStatus = false, 
  isOnline = false,
  className,
  fallback
}: AvatarProps) {
  const [error, setError] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        className={cn(
          "relative overflow-hidden rounded-full bg-muted flex items-center justify-center ring-1 ring-black/10",
          sizeClasses[size],
          className
        )}
      >
        {src && !error ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setError(true)}
          />
        ) : fallback || (
          <User className={cn(
            "text-muted-foreground",
            size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-6 w-6' : 'h-8 w-8'
          )} />
        )}
      </div>
      {showStatus && (
        <span
          className={cn(
            "absolute bottom-0 right-0 rounded-full border-2 border-background",
            statusSizeClasses[size],
            isOnline ? "bg-green-500" : "bg-gray-300"
          )}
        />
      )}
    </div>
  )
} 