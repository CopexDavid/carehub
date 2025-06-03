import { useState, useEffect } from 'react'
import { X, Plus, Trash } from 'lucide-react'
import { toast } from 'react-hot-toast'

interface EditTemplateModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  template: {
    id: string
    name: string
    category: string
    language: string
    components: Array<{
      type: 'header' | 'body' | 'footer' | 'button'
      text: string
      format?: 'text' | 'image' | 'document' | 'video'
      example?: string
    }>
  }
}

const TEMPLATE_CATEGORIES = [
  { id: 'marketing', name: 'Маркетинг' },
  { id: 'utility', name: 'Уведомления' },
  { id: 'authentication', name: 'Аутентификация' }
]

const LANGUAGES = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
  { code: 'kk', name: 'Қазақша' }
]

interface ComponentType {
  type: 'header' | 'body' | 'footer' | 'button'
  text: string
  format?: 'text' | 'image' | 'document' | 'video'
  example?: string
}

export function EditTemplateModal({ isOpen, onClose, onSuccess, template }: EditTemplateModalProps) {
  const [name, setName] = useState(template.name)
  const [category, setCategory] = useState(template.category)
  const [language, setLanguage] = useState(template.language)
  const [components, setComponents] = useState<ComponentType[]>(template.components)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setName(template.name)
      setCategory(template.category)
      setLanguage(template.language)
      setComponents(template.components)
    }
  }, [isOpen, template])

  const handleAddComponent = (type: ComponentType['type']) => {
    setComponents([...components, { type, text: '', format: 'text' }])
  }

  const handleRemoveComponent = (index: number) => {
    setComponents(components.filter((_, i) => i !== index))
  }

  const handleComponentChange = (index: number, field: string, value: string) => {
    const newComponents = [...components]
    newComponents[index] = { ...newComponents[index], [field]: value }
    setComponents(newComponents)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !category || !language || components.length === 0) {
      toast.error('Пожалуйста, заполните все обязательные поля')
      return
    }

    try {
      setLoading(true)
      const response = await fetch(`/api/templates?id=${template.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          category,
          language,
          components
        })
      })

      if (!response.ok) {
        throw new Error('Failed to update template')
      }

      toast.success('Шаблон успешно обновлен и отправлен на проверку')
      onSuccess()
      onClose()
    } catch (err) {
      toast.error('Ошибка при обновлении шаблона')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose}></div>
        
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-lg">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-medium">Редактировать шаблон сообщения</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="space-y-4">
              {/* Название шаблона */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Название шаблона*
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Например: Уведомление о доставке"
                />
              </div>

              {/* Категория */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Категория*
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Выберите категорию</option>
                  {TEMPLATE_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Язык */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Язык*
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Выберите язык</option>
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Компоненты */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Компоненты шаблона*
                </label>
                
                {components.map((component, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">
                        {component.type === 'header' && 'Заголовок'}
                        {component.type === 'body' && 'Текст сообщения'}
                        {component.type === 'footer' && 'Подпись'}
                        {component.type === 'button' && 'Кнопка'}
                      </span>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveComponent(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {component.type !== 'button' && (
                      <>
                        <textarea
                          value={component.text}
                          onChange={(e) => handleComponentChange(index, 'text', e.target.value)}
                          className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-2"
                          placeholder="Введите текст..."
                          rows={3}
                        />
                        <p className="text-xs text-gray-500">
                          Используйте {'{{'}<span className="font-mono">1</span>{'}}'},
                          {'{{'}<span className="font-mono">2</span>{'}}'},
                          и т.д. для переменных
                        </p>
                      </>
                    )}

                    {component.type === 'button' && (
                      <input
                        type="text"
                        value={component.text}
                        onChange={(e) => handleComponentChange(index, 'text', e.target.value)}
                        className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        placeholder="Текст кнопки"
                      />
                    )}
                  </div>
                ))}

                {/* Кнопки добавления компонентов */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {components.every(c => c.type !== 'header') && (
                    <button
                      type="button"
                      onClick={() => handleAddComponent('header')}
                      className="flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Добавить заголовок
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleAddComponent('body')}
                    className="flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Добавить текст
                  </button>
                  {components.every(c => c.type !== 'footer') && (
                    <button
                      type="button"
                      onClick={() => handleAddComponent('footer')}
                      className="flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Добавить подпись
                    </button>
                  )}
                  {components.filter(c => c.type === 'button').length < 3 && (
                    <button
                      type="button"
                      onClick={() => handleAddComponent('button')}
                      className="flex items-center px-3 py-2 text-sm border rounded-md hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Добавить кнопку
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Сохранение...' : 'Сохранить изменения'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 