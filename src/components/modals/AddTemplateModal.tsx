import { useState, useEffect, useRef } from 'react'
import { X, Plus, Trash, HelpCircle, AlertCircle, ExternalLink, Image, FileVideo, FileText, Variable } from 'lucide-react'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface AddTemplateModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const TEMPLATE_CATEGORIES = [
  { 
    id: 'marketing', 
    name: 'Маркетинг',
    description: 'Для рассылки акций, новостей и других маркетинговых материалов'
  },
  { 
    id: 'utility', 
    name: 'Услуги',
    description: 'Для отправки уведомлений о заказах, записях и других транзакционных сообщений'
  },
  { 
    id: 'authentication', 
    name: 'Одноразовые пароли',
    description: 'Для отправки кодов подтверждения и паролей'
  }
]

const LANGUAGES = [
  { code: 'ru', name: 'Русский' },
  { code: 'en_US', name: 'English' },
  { code: 'kk', name: 'Қазақша' }
]

type MediaType = 'image' | 'video' | 'document'
type HeaderType = 'text' | MediaType

interface HeaderMedia {
  type: MediaType
  file?: File
  preview?: string
}

interface ComponentType {
  type: 'header' | 'body' | 'footer' | 'button'
  text: string
  headerType?: HeaderType
  media?: HeaderMedia
  hasVariable?: boolean
  format?: 'text' | 'image' | 'document' | 'video'
  example?: string
  url?: string
}

const ALLOWED_MEDIA_TYPES = {
  image: ['.jpeg', '.jpg', '.png'],
  video: ['.mp4', '.3gpp'],
  document: ['.pdf']
}

const MEDIA_TYPE_LABELS = {
  image: 'Изображение',
  video: 'Видео',
  document: 'Документ'
}

export function AddTemplateModal({ isOpen, onClose, onSuccess }: AddTemplateModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [language, setLanguage] = useState('')
  const [components, setComponents] = useState<ComponentType[]>([
    { type: 'body', text: '', format: 'text' }
  ])
  const [loading, setLoading] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    const totalChars = components.reduce((acc, curr) => acc + curr.text.length, 0)
    setCharCount(totalChars)
  }, [components])

  const handleAddComponent = (type: ComponentType['type']) => {
    if (type === 'header') {
      if (components.some(comp => comp.type === 'header')) {
        toast.error('Можно добавить только один заголовок')
        return
      }
      setComponents([{ 
        type, 
        text: '', 
        headerType: 'text',
        hasVariable: false 
      }, ...components])
    } else {
      setComponents([...components, { type, text: '', format: 'text' }])
    }
  }

  const handleHeaderTypeChange = (index: number, headerType: HeaderType) => {
    const newComponents = [...components]
    newComponents[index] = { 
      ...newComponents[index], 
      headerType,
      media: headerType !== 'text' ? { type: headerType } : undefined,
      hasVariable: false,
      text: ''
    }
    setComponents(newComponents)
  }

  const handleAddVariable = (index: number) => {
    const component = components[index]
    if (component.type !== 'header' || component.headerType !== 'text') return
    
    const newComponents = [...components]
    newComponents[index] = {
      ...component,
      hasVariable: true,
      text: component.text.includes('{1}') ? component.text : `${component.text}{1}`
    }
    setComponents(newComponents)
  }

  const handleMediaUpload = async (index: number, file: File) => {
    const component = components[index]
    if (!component.media?.type) return

    const allowedTypes = ALLOWED_MEDIA_TYPES[component.media.type]
    const fileExt = `.${file.name.split('.').pop()?.toLowerCase()}`

    if (!allowedTypes.includes(fileExt)) {
      toast.error(`Поддерживаемые форматы: ${allowedTypes.join(', ')}`)
      return
    }

    const newComponents = [...components]
    newComponents[index] = {
      ...component,
      media: {
        ...component.media,
        file,
        preview: component.media.type === 'image' ? URL.createObjectURL(file) : undefined
      }
    }
    setComponents(newComponents)
  }

  const handleRemoveComponent = (index: number) => {
    setComponents(components.filter((_, i) => i !== index))
  }

  const handleComponentChange = (index: number, field: string, value: string) => {
    const newComponents = [...components]
    newComponents[index] = { ...newComponents[index], [field]: value }
    setComponents(newComponents)
  }

  const getSortedComponents = (comps: ComponentType[]) => {
    const order = { header: 0, body: 1, footer: 2, button: 3 }
    return [...comps].sort((a, b) => order[a.type] - order[b.type])
  }

  const renderHeaderComponent = (component: ComponentType, index: number) => {
    return (
      <div>
        <div className="flex items-center gap-3 mb-3">
          <select
            value={component.headerType}
            onChange={(e) => handleHeaderTypeChange(index, e.target.value as HeaderType)}
            className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="text">Текст</option>
            <option value="image">Изображение</option>
            <option value="video">Видео</option>
            <option value="document">Документ</option>
          </select>

          {component.headerType === 'text' && (
            <button
              type="button"
              onClick={() => handleAddVariable(index)}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
              disabled={component.hasVariable}
            >
              <Variable className="h-4 w-4" />
              Добавить переменную
            </button>
          )}
        </div>

        {component.headerType === 'text' ? (
          <div className="relative">
            <input
              type="text"
              value={component.text}
              onChange={(e) => {
                const newText = e.target.value.replace(/[*_~]/g, '')
                handleComponentChange(index, 'text', newText)
              }}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder={component.hasVariable ? "Введите текст с {1} для переменной" : "Введите текст заголовка"}
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="absolute right-2 top-1/2 -translate-y-1/2">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    {component.hasVariable 
                      ? "Используйте {1} для обозначения переменной. Нельзя использовать эмодзи и символы * _ ~"
                      : "В текстовый заголовок нельзя добавить эмодзи и символы * _ ~"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ) : (
          <div className="space-y-2">
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept={ALLOWED_MEDIA_TYPES[component.media?.type as MediaType].join(',')}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) handleMediaUpload(index, file)
              }}
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              >
                {component.media?.type === 'image' && <Image className="h-4 w-4" />}
                {component.media?.type === 'video' && <FileVideo className="h-4 w-4" />}
                {component.media?.type === 'document' && <FileText className="h-4 w-4" />}
                {component.media?.file 
                  ? 'Изменить файл' 
                  : `Загрузить ${MEDIA_TYPE_LABELS[component.media?.type as MediaType]}`}
              </button>
              {component.media?.file && (
                <span className="text-sm text-gray-500">
                  {component.media.file.name}
                </span>
              )}
            </div>
            {component.media?.preview && (
              <div className="mt-2">
                <img 
                  src={component.media.preview} 
                  alt="Preview" 
                  className="max-h-32 rounded-lg border border-gray-200" 
                />
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  const renderComponent = (component: ComponentType, index: number) => {
    if (component.type === 'header') {
      return renderHeaderComponent(component, index)
    }

    return (
      <div className="rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">
              {component.type === 'body' && 'Текст сообщения'}
              {component.type === 'footer' && 'Подпись'}
              {component.type === 'button' && 'Кнопка'}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">
                    {component.type === 'body' && 'Основной текст сообщения'}
                    {component.type === 'footer' && 'Подпись в конце сообщения (необязательно)'}
                    {component.type === 'button' && 'Кнопка действия (необязательно)'}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <button
            type="button"
            onClick={() => handleRemoveComponent(index)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>

        {component.type !== 'button' ? (
          <textarea
            value={component.text}
            onChange={(e) => handleComponentChange(index, 'text', e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Введите текст..."
            rows={4}
          />
        ) : (
          <div className="space-y-2">
            <input
              type="text"
              value={component.text}
              onChange={(e) => handleComponentChange(index, 'text', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Текст кнопки..."
            />
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={component.url || ''}
                onChange={(e) => handleComponentChange(index, 'url', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="https://example.com"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">Укажите URL, куда будет перенаправлен пользователь при нажатии на кнопку</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        )}

        {component.type === 'body' && (
          <div className="mt-2 flex gap-2">
            <select
              value={component.format}
              onChange={(e) => handleComponentChange(index, 'format', e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="text">Текст</option>
              <option value="image">Изображение</option>
              <option value="document">Документ</option>
              <option value="video">Видео</option>
            </select>
          </div>
        )}
      </div>
    )
  }

  const renderPreviewComponent = (component: ComponentType) => {
    if (component.type === 'header') {
      return (
        <div className="mb-3">
          {component.headerType === 'text' ? (
            <div className="font-medium">
              {component.text || 'Текст заголовка'}
            </div>
          ) : (
            <div className="space-y-2">
              {component.media?.preview ? (
                <img 
                  src={component.media.preview} 
                  alt="Media preview" 
                  className="max-h-32 rounded-lg border border-gray-200" 
                />
              ) : (
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {component.media?.type === 'image' && <Image className="h-4 w-4" />}
                  {component.media?.type === 'video' && <FileVideo className="h-4 w-4" />}
                  {component.media?.type === 'document' && <FileText className="h-4 w-4" />}
                  {component.media?.file 
                    ? component.media.file.name
                    : `${MEDIA_TYPE_LABELS[component.media?.type as MediaType]} не загружен`}
                </div>
              )}
            </div>
          )}
        </div>
      )
    }

    return (
      <div className="mb-3 last:mb-0">
        {component.type === 'body' && (
          <div className="whitespace-pre-wrap">{component.text || 'Текст сообщения'}</div>
        )}
        {component.type === 'footer' && (
          <div className="text-sm text-gray-500">{component.text || 'Подпись'}</div>
        )}
        {component.type === 'button' && (
          <div className="mt-2">
            <button className="w-full rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              {component.text || 'Текст кнопки'}
              {component.url && (
                <span className="block text-xs text-gray-500 mt-0.5 truncate">
                  {component.url}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !category || !language || components.length === 0) {
      toast.error('Пожалуйста, заполните все обязательные поля')
      return
    }

    const headerComponent = components.find(comp => comp.type === 'header')
    if (headerComponent?.headerType !== 'text' && !headerComponent?.media?.file) {
      toast.error('Загрузите медиа-файл для заголовка')
      return
    }

    const buttonsWithoutUrl = components.filter(
      comp => comp.type === 'button' && comp.text.trim() === ''
    )
    
    if (buttonsWithoutUrl.length > 0) {
      toast.error('Заполните текст для всех кнопок')
      return
    }

    try {
      setLoading(true)
      
      const formData = new FormData()
      formData.append('name', name)
      formData.append('category', category)
      formData.append('language', language)
      
      // Подготавливаем компоненты для отправки
      const preparedComponents = getSortedComponents(components).map((component, index) => {
        if (component.type === 'header') {
          if (component.headerType === 'text') {
            return {
              type: 'header',
              parameters: [{
                type: 'text',
                text: component.text
              }]
            }
          } else if (component.media?.file) {
            return {
              type: 'header',
              parameters: [{
                type: component.headerType,
                [component.headerType]: {
                  link: URL.createObjectURL(component.media.file)
                }
              }]
            }
          }
        }

        if (component.type === 'body') {
          return {
            type: 'body',
            parameters: [{
              type: 'text',
              text: component.text
            }]
          }
        }

        if (component.type === 'footer') {
          return {
            type: 'footer',
            text: component.text
          }
        }

        if (component.type === 'button') {
          return {
            type: 'button',
            sub_type: component.url ? 'url' : 'quick_reply',
            index: index.toString(),
            parameters: [{
              type: component.url ? 'text' : 'payload',
              ...(component.url ? { text: component.url } : { payload: 'QUICK_REPLY_PAYLOAD' })
            }]
          }
        }

        return null
      }).filter(Boolean)

      // Добавляем файл, если есть
      const headerWithMedia = components.find(c => c.type === 'header' && c.media?.file)
      if (headerWithMedia?.media?.file) {
        formData.append('file', headerWithMedia.media.file)
      }

      formData.append('components', JSON.stringify(preparedComponents))

      console.log('Sending template data:', {
        name,
        category,
        language,
        components: preparedComponents
      })

      const response = await fetch('/api/templates', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.details) {
          throw new Error(data.details)
        } else if (data.error) {
          throw new Error(data.error)
        } else {
          throw new Error('Не удалось создать шаблон')
        }
      }

      toast.success('Шаблон успешно создан и отправлен на проверку')
      onSuccess()
      onClose()
      
      setName('')
      setCategory('')
      setLanguage('')
      setComponents([{ type: 'body', text: '', format: 'text' }])
    } catch (err) {
      console.error('Error creating template:', err)
      
      const errorMessage = err instanceof Error ? err.message : 'Ошибка при создании шаблона'
      toast.error(errorMessage, {
        duration: 5000,
        style: {
          maxWidth: '500px',
          whiteSpace: 'pre-wrap',
        }
      })
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
        
        <div className="relative w-full max-w-4xl bg-white shadow-xl rounded-xl">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Создать шаблон сообщения</h2>
              <p className="text-sm text-gray-500 mt-1">Заполните необходимые поля для создания шаблона</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-5 divide-x divide-gray-200">
            <form onSubmit={handleSubmit} className="col-span-3 p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    Название шаблона
                  </label>
                  <span className="text-xs text-gray-500">{name.length}/50</span>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 50))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Название шаблона для быстрого поиска в чатах"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Выберите язык и категорию шаблона
                  </label>
                  <Link 
                    href="/dashboard/templates/how-to-write" 
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    target="_blank"
                  >
                    Как выбрать категорию
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Выберите язык</option>
                      {LANGUAGES.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Выберите категорию</option>
                      {TEMPLATE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-gray-700">Компоненты шаблона</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sm">Добавьте необходимые компоненты для вашего шаблона</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Символов: {charCount}/1024</span>
                    {charCount > 1024 && (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {getSortedComponents(components).map((component, index) => (
                    <div key={index}>{renderComponent(component, index)}</div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleAddComponent('header')}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                    Заголовок
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddComponent('body')}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                    Текст
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddComponent('footer')}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                    Подпись
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddComponent('button')}
                    className="inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                    Кнопка
                  </button>
                </div>
              </div>
            </form>

            <div className="col-span-2 p-6">
              <div className="sticky top-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Предпросмотр шаблона</h3>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    {showPreview ? 'Скрыть превью' : 'Показать превью'}
                  </button>
                </div>

                {showPreview ? (
                  <div className="rounded-lg border border-gray-200 p-4">
                    {getSortedComponents(components).map((component, index) => (
                      <div key={index}>{renderPreviewComponent(component)}</div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-lg border border-gray-200 p-4 text-center text-sm text-gray-500">
                    Начните заполнять поля, чтобы появился предпросмотр шаблона
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t px-6 py-4 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              * Все поля обязательны для заполнения
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Создание...' : 'Отправить на модерацию'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 