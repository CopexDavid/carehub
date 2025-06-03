'use client'

import { useChat } from '@/contexts/ChatContext'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar } from './avatar'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState, useMemo, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ChatGroup {
  id: string
  name: string
  accountId: string
  createdAt: string
  updatedAt: string
}

// Предопределенные группы (должны совпадать с группами в ChatHeader)
const GROUPS = [
  { id: 'all', name: 'Все группы' },
  { id: 'new', name: 'Новые клиенты' },
  { id: 'regular', name: 'Постоянные клиенты' },
  { id: 'vip', name: 'VIP клиенты' },
  { id: 'blocked', name: 'Заблокированные' }
]

export function ChatList() {
  const { chats, selectedChatId, setSelectedChatId, dispatch } = useChat()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('all')
  const [groups, setGroups] = useState<ChatGroup[]>([])

  // Загрузка групп
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch('/api/chat-groups')
        const data = await response.json()
        
        if (response.ok && data.data) {
          setGroups(data.data)
        }
      } catch (err) {
        console.error('Error fetching groups:', err)
      }
    }

    fetchGroups()
  }, [])

  // Фильтрация чатов по поисковому запросу и группе
  const filteredChats = useMemo(() => {
    return chats.filter(chat => {
      const searchStr = searchQuery.toLowerCase().trim()
      const name = (chat.displayName || chat.name || '').toLowerCase()
      const phone = (chat.phoneNumber || '').toLowerCase()
      const matchesSearch = name.includes(searchStr) || phone.includes(searchStr)
      
      if (selectedGroup === 'all') {
        return matchesSearch
      }
      
      if (selectedGroup === 'no_group') {
        return matchesSearch && !chat.group
      }
      
      return matchesSearch && chat.group === selectedGroup
    })
  }, [chats, searchQuery, selectedGroup])

  // Фильтрация непрочитанных чатов
  const unreadChats = useMemo(() => {
    return filteredChats.filter(chat => (chat.unreadCount || 0) > 0)
  }, [filteredChats])

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
    }
    return phone
  }

  const getLastMessageText = (lastMessage: any) => {
    if (!lastMessage) return 'Нет сообщений'
    if (typeof lastMessage === 'string') return lastMessage
    return lastMessage.body
  }

  const renderChat = (chat: any) => (
    <button
      key={chat.id}
      onClick={() => {
        setSelectedChatId(chat.id)
        // При выборе чата обновляем его статус как прочитанный
        if (chat.unreadCount && chat.unreadCount > 0) {
          dispatch({
            type: 'UPDATE_CHAT',
            payload: {
              id: chat.id,
              unreadCount: 0
            }
          })
        }
      }}
      className={cn(
        'flex items-center gap-2.5 w-full px-3 py-3 transition-colors',
        'hover:bg-gray-50 dark:hover:bg-gray-900/50',
        'border-b border-gray-100 dark:border-gray-800',
        selectedChatId === chat.id && 'bg-gray-50 dark:bg-gray-900/50'
      )}
    >
      <Avatar
        src={null}
        alt={chat.name || formatPhoneNumber(chat.phoneNumber)}
        size="md"
        fallback={(chat.name?.[0] || chat.phoneNumber[0] || 'U').toUpperCase()}
        showStatus
        isOnline={chat.isOnline}
      />
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium text-[13px] truncate">
            {chat.name || formatPhoneNumber(chat.phoneNumber)}
          </p>
          {chat.time && (
            <span className="text-[11px] text-gray-500 flex-shrink-0 tabular-nums">
              {new Date(chat.time).toLocaleString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              })}
            </span>
          )}
        </div>
        <div className="flex items-start justify-between gap-2">
          <p className="text-[11px] text-gray-500 truncate max-w-[160px]">
            {getLastMessageText(chat.lastMessage)}...
          </p>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {chat.time && (
              <span className="text-[11px] text-gray-400">
                {formatDistanceToNow(new Date(chat.time), { 
                  locale: ru,
                  addSuffix: false
                })}
              </span>
            )}
            {chat.unreadCount ? (
              <span className="flex-shrink-0 rounded-full bg-green-500 w-[18px] h-[18px] flex items-center justify-center">
                <span className="text-[11px] font-medium text-white">
                  {chat.unreadCount}
                </span>
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  )

  if (!chats.length) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
        <p className="text-sm">Нет активных чатов</p>
        <p className="text-xs text-gray-500">Чаты появятся здесь, когда клиенты начнут писать вам</p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      <div className="px-3 py-2 border-b space-y-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Поиск по имени или номеру"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9 text-sm"
          />
        </div>
        <Select value={selectedGroup} onValueChange={setSelectedGroup}>
          <SelectTrigger className="w-full h-9">
            <SelectValue placeholder="Выберите группу" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все группы</SelectItem>
            <SelectItem value="no_group">Без группы</SelectItem>
            {groups.map((group) => (
              <SelectItem key={group.id} value={group.name}>
                {group.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="border-b px-3 py-2 bg-gray-50">
          <TabsList className="w-full grid grid-cols-2 gap-1 bg-transparent p-1">
            <TabsTrigger 
              value="unread" 
              className={cn(
                "flex-1 text-[13px] px-3 py-1.5 rounded-md border border-gray-200",
                "data-[state=active]:bg-white data-[state=active]:border-gray-300 data-[state=active]:shadow-sm",
                "data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-white/40 data-[state=inactive]:hover:border-gray-300",
                "transition-all duration-150"
              )}
            >
              <div className="flex items-center justify-center gap-1.5">
                Непрочитанные
                {unreadChats.length > 0 && (
                  <span className="rounded-full bg-green-500 w-[18px] h-[18px] inline-flex items-center justify-center">
                    <span className="text-[11px] font-medium text-white">
                      {unreadChats.length}
                    </span>
                  </span>
                )}
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="all" 
              className={cn(
                "flex-1 text-[13px] px-3 py-1.5 rounded-md border border-gray-200",
                "data-[state=active]:bg-white data-[state=active]:border-gray-300 data-[state=active]:shadow-sm",
                "data-[state=inactive]:bg-transparent data-[state=inactive]:hover:bg-white/40 data-[state=inactive]:hover:border-gray-300",
                "transition-all duration-150"
              )}
            >
              Все чаты
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="unread" className="flex-1 mt-0">
          <ScrollArea className="h-[calc(100vh-18rem)]">
            {unreadChats.length > 0 ? (
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {unreadChats.map(renderChat)}
              </div>
            ) : (
              <div className="p-4 text-center text-muted-foreground">
                Нет непрочитанных сообщений
              </div>
            )}
          </ScrollArea>
        </TabsContent>

        <TabsContent value="all" className="flex-1 mt-0">
          <ScrollArea className="h-[calc(100vh-18rem)]">
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredChats.map(renderChat)}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
} 