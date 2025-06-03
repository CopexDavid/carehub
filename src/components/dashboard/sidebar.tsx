'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, MessageSquare, BarChart2, 
  Bell, Settings, LogOut, Menu, ChevronLeft, 
  Bot, Send, FileText, Users
} from 'lucide-react'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'

type SidebarItem = {
  title: string
  href: string
  icon: typeof Home
}

const mainNavItems: SidebarItem[] = [
  { title: 'Главная', href: '/dashboard', icon: Home },
  { title: 'Чаты', href: '/dashboard/chats', icon: MessageSquare },
  { title: 'Шаблоны', href: '/dashboard/templates', icon: FileText },
  { title: 'Рассылки', href: '/dashboard/broadcasts', icon: Send },
  { title: 'Базы клиентов', href: '/dashboard/client-lists', icon: Users },
]

const secondaryNavItems: SidebarItem[] = [
  { title: 'Ассистент', href: '/dashboard/assistant', icon: Bot },
  { title: 'Аналитика', href: '/dashboard/analytics', icon: BarChart2 },
  { title: 'Настройки', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <aside 
      className={cn(
        "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col h-screen z-20",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <Link href="/dashboard" className="font-bold text-xl text-blue-600">
            Магнум Альянс
          </Link>
        )}
        <button 
          onClick={toggleSidebar} 
          className={cn(
            "p-2 rounded-md text-gray-500 hover:bg-gray-100",
            collapsed ? "mx-auto" : ""
          )}
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                collapsed ? "justify-center" : ""
              )}
            >
              <item.icon 
                className={cn(
                  "flex-shrink-0 h-5 w-5",
                  pathname === item.href ? "text-blue-600" : "text-gray-400"
                )} 
              />
              {!collapsed && <span className="ml-3">{item.title}</span>}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className={cn(
            "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
            collapsed ? "text-center" : ""
          )}>
            {!collapsed && "Управление"}
          </h3>
          <nav className="mt-2 px-2 space-y-1">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  collapsed ? "justify-center" : ""
                )}
              >
                <item.icon 
                  className={cn(
                    "flex-shrink-0 h-5 w-5",
                    pathname === item.href ? "text-blue-600" : "text-gray-400"
                  )} 
                />
                {!collapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 transition-colors",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Выйти</span>}
        </button>
      </div>
    </aside>
  )
} 