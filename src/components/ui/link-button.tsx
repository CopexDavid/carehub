'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { AnchorHTMLAttributes, forwardRef } from 'react'

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, children, href, variant = 'primary', size = 'md', isLoading = false, ...props }, ref) => {
    return (
      <Link 
        href={href}
        ref={ref as any}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          {
            'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
            'bg-blue-100 text-blue-700 hover:bg-blue-200': variant === 'secondary',
            'bg-transparent hover:bg-blue-100': variant === 'ghost',
            'border border-blue-300 hover:bg-blue-50': variant === 'outline',
            'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4': size === 'md',
            'h-12 px-6 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </Link>
    )
  }
) 