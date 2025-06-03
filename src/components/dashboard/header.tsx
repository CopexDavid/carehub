'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { NotificationsDropdown } from '@/components/notifications/NotificationsDropdown'

export function Header() {
  const { data: session } = useSession()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 z-50 relative">
      <div className="flex items-center justify-between px-8 py-3">
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-gray-900">
            CareHub
          </h1>
        </div>

        <div className="flex items-center">
          <NotificationsDropdown />

          {/* User dropdown */}
          <div className="ml-3 relative">
            <div>
              <button
                className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <span className="sr-only">Открыть меню пользователя</span>
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                {session?.user?.name && (
                  <span className="ml-2 font-medium text-gray-700">
                    {session.user.name}
                  </span>
                )}
              </button>
            </div>
            
            {showUserMenu && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div className="py-1" role="none">
                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Мой профиль
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Настройки
                  </Link>
                  <Link
                    href="/api/auth/signout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => setShowUserMenu(false)}
                  >
                    Выйти
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 