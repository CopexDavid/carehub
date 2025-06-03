import { useState, useEffect } from 'react'
import { Avatar } from './avatar'
import { Button } from '../ui/button'
import { Edit2, Check, X, Bot, Users, Tag, Loader2, Trash2, Plus } from 'lucide-react'
import { Switch } from '../ui/switch'
import { useChat } from '@/contexts/ChatContext'
import { cn } from '@/lib/utils'
import { toast } from 'react-hot-toast'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  isDefault: boolean
}

interface ChatHeaderProps {
  chatId: string
  phoneNumber: string
  name?: string | null
  group?: string | null
}

export function ChatHeader({ chatId, phoneNumber, name: initialName, group: initialGroup }: ChatHeaderProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [displayName, setDisplayName] = useState(initialName || '')
  const [assistantEnabled, setAssistantEnabled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<ChatGroup[]>([])
  const [isCreatingGroup, setIsCreatingGroup] = useState(false)
  const [newGroupName, setNewGroupName] = useState('')
  const { dispatch, chats } = useChat()
  const [isClearing, setIsClearing] = useState(false)

  // Получаем актуальные данные чата
  const currentChat = chats.find(chat => chat.id === chatId)

  // Обновляем displayName при изменении чата
  useEffect(() => {
    if (currentChat) {
      setDisplayName(currentChat.name || currentChat.displayName || '')
    }
  }, [currentChat])

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

  // Обновляем displayName при изменении пропса name
  useEffect(() => {
    setDisplayName(initialName || '')
  }, [initialName])

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
    }
    return phone
  }

  // Загрузка начального состояния ассистента
  useEffect(() => {
    const fetchAssistantState = async () => {
      try {
        const response = await fetch(`/api/assistant/chats/${chatId}`)
        const data = await response.json()
        
        if (response.ok && data.data) {
          setAssistantEnabled(data.data.assistantEnabled || false)
        }
      } catch (err) {
        console.error('Error fetching assistant state:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAssistantState()
  }, [chatId])

  const handleGroupChange = async (newGroup: string) => {
    try {
      const response = await fetch(`/api/whatsapp/chats/${chatId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          group: newGroup === 'no_group' ? undefined : newGroup 
        })
      })

      if (!response.ok) {
        throw new Error('Failed to update group')
      }

      dispatch({
        type: 'UPDATE_CHAT',
        payload: {
          id: chatId,
          group: newGroup === 'no_group' ? undefined : newGroup
        }
      })

      toast.success('Группа успешно обновлена')
    } catch (error: any) {
      console.error('Error updating chat group:', error)
      toast.error('Не удалось обновить группу')
    }
  }

  const handleCreateGroup = async () => {
    if (!newGroupName.trim()) return

    try {
      const response = await fetch('/api/chat-groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newGroupName.trim() })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create group')
      }

      const data = await response.json()
      setGroups([...groups, data.data])
      setNewGroupName('')
      setIsCreatingGroup(false)
      toast.success('Группа успешно создана')
    } catch (error: any) {
      console.error('Error creating group:', error)
      toast.error(error.message || 'Не удалось создать группу')
    }
  }

  const toggleAssistant = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/assistant/chats/${chatId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assistantEnabled: !assistantEnabled
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          toast.error('Необходимо авторизоваться')
          return
        }
        throw new Error(data.error || 'Failed to toggle assistant')
      }

      setAssistantEnabled(data.data.assistantEnabled)
      toast.success(
        data.data.assistantEnabled ? 
        'Ассистент включен' : 
        'Ассистент отключен'
      )
    } catch (err) {
      console.error('Error toggling assistant:', err)
      toast.error('Не удалось изменить настройки ассистента')
      setAssistantEnabled(assistantEnabled)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSaveName = async () => {
    const trimmedName = displayName.trim()
    if (!trimmedName) return

    try {
      const response = await fetch(`/api/whatsapp/chats/${chatId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ displayName: trimmedName })
      })

      if (!response.ok) {
        throw new Error('Failed to update name')
      }

      const data = await response.json()

      dispatch({
        type: 'UPDATE_CHAT',
        payload: {
          id: chatId,
          displayName: trimmedName,
          name: trimmedName
        }
      })

      setIsEditing(false)
      toast.success('Имя успешно обновлено')
    } catch (error) {
      console.error('Error updating chat name:', error)
      toast.error('Не удалось обновить имя')
      // Возвращаем предыдущее значение в случае ошибки
      setDisplayName(initialName || '')
    }
  }

  const clearAssistantHistory = async () => {
    try {
      setIsClearing(true)
      const response = await fetch(`/api/assistant/chats/${chatId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to clear assistant history')
      }

      toast.success('История чата с ассистентом успешно очищена')
    } catch (error) {
      console.error('Error clearing assistant history:', error)
      toast.error('Не удалось очистить историю чата с ассистентом')
    } finally {
      setIsClearing(false)
    }
  }

  return (
    <div className="flex items-center justify-between p-2.5 bg-white dark:bg-gray-900 border-b">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center gap-2.5 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
        <Avatar
          size="md"
          src={null}
              alt={currentChat?.name || formatPhoneNumber(phoneNumber)}
              fallback={(currentChat?.name?.[0] || phoneNumber[0]).toUpperCase()}
        />
        
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="flex-1 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Введите имя контакта"
                autoFocus
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={handleSaveName}
                disabled={!displayName.trim()}
              >
                <Check className="h-3.5 w-3.5 text-green-500" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                      setDisplayName(currentChat?.name || currentChat?.displayName || '')
                  setIsEditing(false)
                }}
              >
                <X className="h-3.5 w-3.5 text-red-500" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-medium truncate">
                    {currentChat?.name || currentChat?.displayName || formatPhoneNumber(phoneNumber)}
              </h2>
              <Button
                size="sm"
                variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      setIsEditing(true)
                    }}
                className="h-6 w-6"
              >
                <Edit2 className="h-3 w-3 text-gray-500" />
              </Button>
            </div>
          )}
              <p className="text-xs text-gray-500 truncate">{formatPhoneNumber(phoneNumber)}</p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Информация о клиенте</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Имя контакта
                </label>
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="flex-1 px-2 py-1.5 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Введите имя контакта"
                    />
                    <Button size="sm" onClick={handleSaveName}>
                      Сохранить
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{currentChat?.name || currentChat?.displayName || formatPhoneNumber(phoneNumber)}</span>
                    <Button size="sm" variant="ghost" onClick={() => setIsEditing(true)}>
                      <Edit2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Номер телефона
                </label>
                <span className="text-sm">{formatPhoneNumber(phoneNumber)}</span>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">
                  Группа клиента
                </label>
                <div className="space-y-2">
                  <Select 
                    value={currentChat?.group || 'no_group'} 
                    onValueChange={handleGroupChange}
                  >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите группу" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="no_group">Без группы</SelectItem>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.name}>
                          {group.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                  {!isCreatingGroup ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => setIsCreatingGroup(true)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Создать новую группу
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={newGroupName}
                        onChange={(e) => setNewGroupName(e.target.value)}
                        placeholder="Название группы"
                        className="flex-1 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Button
                        size="sm"
                        onClick={handleCreateGroup}
                        disabled={!newGroupName.trim()}
                      >
                        Создать
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => {
                          setIsCreatingGroup(false)
                          setNewGroupName('')
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Ассистент</p>
                  <p className="text-xs text-gray-500">Автоматические ответы</p>
                </div>
                <Switch
                  checked={assistantEnabled}
                  onCheckedChange={toggleAssistant}
                  disabled={isLoading}
                />
              </div>
        </div>
      </div>
        </DialogContent>
      </Dialog>

      {/* Переключатель ассистента в стиле iPhone */}
      <div className="flex items-center gap-3 px-2">
        <div className="flex flex-col items-end">
          <span className="text-xs font-medium text-gray-700">
            {isLoading ? 'Загрузка...' : 
             assistantEnabled ? 'Включен' : 'Выключен'}
          </span>
          <span className="text-[10px] text-gray-500">Ассистент</span>
        </div>
        <Switch
          checked={assistantEnabled}
          onCheckedChange={toggleAssistant}
          disabled={isLoading}
          className={cn(
            "relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full",
            "transition-colors duration-200 ease-in-out",
            "bg-gray-200 data-[state=checked]:bg-green-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "after:absolute after:left-[1px] after:top-[1px]",
            "after:h-4 after:w-4 after:rounded-full after:bg-white",
            "after:shadow-sm after:transition-transform after:duration-200",
            "data-[state=checked]:after:translate-x-4",
            "data-[state=unchecked]:after:translate-x-0"
          )}
        />
      </div>
      {assistantEnabled && (
        <Button
          variant="ghost"
          size="icon"
          onClick={clearAssistantHistory}
          disabled={isClearing}
        >
          {isClearing ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash2 className="h-4 w-4" />
          )}
        </Button>
      )}
    </div>
  )
} 