import { MessageTemplate, WhatsAppAccount, Prisma } from '@prisma/client'
import axios from 'axios'

interface WhatsAppParameter {
  type: string
  text?: string
  payload?: string
  [key: string]: any
}

interface WhatsAppComponent {
  type: 'HEADER' | 'BODY' | 'FOOTER' | 'BUTTON'
  format?: 'TEXT'
  text?: string
  sub_type?: 'URL' | 'QUICK_REPLY'
  url?: string
}

interface WhatsAppTemplate {
  name: string
  language: string
  category: string
  components: Prisma.JsonValue
  whatsappId?: string | null
}

interface WhatsAppTemplateRequest {
  messaging_product: 'whatsapp'
  name: string
  category: string
  language: string
  components: WhatsAppComponent[]
}

interface WhatsAppTemplateResponse {
  id: string
  status?: string
  category?: string
}

interface WhatsAppComponentInput {
  type: string
  parameters?: Array<{
    type: string
    text?: string
    [key: string]: any
  }>
  text?: string
  url?: string
}

export class WhatsAppService {
  private baseUrl = 'https://graph.facebook.com/v19.0'
  private accessToken: string
  private businessAccountId: string

  constructor(account: { accessToken: string; businessAccountId: string }) {
    this.accessToken = account.accessToken
    this.businessAccountId = account.businessAccountId
    console.log('WhatsAppService initialized with:', {
      baseUrl: this.baseUrl,
      businessAccountId: this.businessAccountId
    })
  }

  private parseWhatsAppError(error: any): string {
    console.log('Parsing WhatsApp error:', error)
    try {
      if (error.error?.error) {
        const apiError = error.error.error
        console.log('API error details:', apiError)
        if (apiError.error_user_title && apiError.error_user_msg) {
          return `${apiError.error_user_title}: ${apiError.error_user_msg}`
        }
        return apiError.message || 'Неизвестная ошибка WhatsApp API'
      }
      
      if (error.error) {
        console.log('Error object:', error.error)
        return error.error.message || 'Неизвестная ошибка WhatsApp API'
      }

      console.log('Unknown error format:', error)
      return 'Неизвестная ошибка при взаимодействии с WhatsApp API'
    } catch (e) {
      console.error('Error while parsing WhatsApp error:', e)
      return 'Не удалось обработать ошибку WhatsApp API'
    }
  }

  private async makeRequest(path: string, method: string, body?: any) {
    const url = `${this.baseUrl}/${this.businessAccountId}${path}`
    console.log('Making request to WhatsApp API:', {
      url,
      method,
      body: JSON.stringify(body, null, 2)
    })

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      })

      const data = await response.json()
      console.log('WhatsApp API response:', {
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
        data
      })

      if (!response.ok) {
        throw data
      }

      return data
    } catch (error) {
      console.error('WhatsApp API request failed:', error)
      const errorMessage = this.parseWhatsAppError(error)
      throw new Error(errorMessage)
    }
  }

  private transformComponents(components: Prisma.JsonValue): WhatsAppComponent[] {
    if (!Array.isArray(components)) {
      console.warn('Components is not an array:', components)
      return []
    }

    console.log('Transforming components:', components)
    
    return components.map((component): WhatsAppComponent | null => {
      if (!component || typeof component !== 'object') {
        console.warn('Invalid component:', component)
        return null
      }

      const comp = component as unknown as WhatsAppComponentInput
      console.log('Processing component:', comp)

      if (comp.type.toLowerCase() === 'header') {
        return {
          type: 'HEADER',
          format: 'TEXT',
          text: comp.parameters?.[0]?.text || ''
        }
      }

      if (comp.type.toLowerCase() === 'body') {
        return {
          type: 'BODY',
          text: comp.parameters?.[0]?.text || ''
        }
      }

      if (comp.type.toLowerCase() === 'footer') {
        return {
          type: 'FOOTER',
          text: comp.text || ''
        }
      }

      if (comp.type.toLowerCase() === 'button') {
        if (comp.url) {
          return {
            type: 'BUTTON',
            sub_type: 'URL',
            text: comp.text || '',
            url: comp.url
          }
        }
        return {
          type: 'BUTTON',
          sub_type: 'QUICK_REPLY',
          text: comp.text || ''
        }
      }

      console.warn('Unknown component type:', comp.type)
      return null
    }).filter((comp): comp is WhatsAppComponent => comp !== null)
  }

  async createTemplate(template: WhatsAppTemplate): Promise<WhatsAppTemplateResponse> {
    console.log('Creating template:', template)

    const components = this.transformComponents(template.components)
    console.log('Transformed components:', components)

    const requestBody: WhatsAppTemplateRequest = {
      messaging_product: 'whatsapp',
      name: template.name,
      category: template.category,
      language: template.language,
      components
    }

    console.log('Request body:', requestBody)
    
    const response = await this.makeRequest('/message_templates', 'POST', requestBody)
    return response
  }

  async updateTemplate(template: WhatsAppTemplate): Promise<WhatsAppTemplateResponse> {
    if (!template.whatsappId) {
      throw new Error('Template has no WhatsApp ID')
    }

    console.log('Updating template:', template)

    const components = this.transformComponents(template.components)
    console.log('Transformed components:', JSON.stringify(components, null, 2))

    const requestBody = {
      components
    }

    return this.makeRequest(`/message_templates/${template.whatsappId}`, 'POST', requestBody)
  }

  async deleteTemplate(templateId: string): Promise<{ success: boolean }> {
    await this.makeRequest(`/message_templates/${templateId}`, 'DELETE')
    return { success: true }
  }

  async checkTemplateStatus(templateId: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/${templateId}`,
        {
          headers: {
            'Authorization': `Bearer ${this.accessToken}`,
          }
        }
      )

      const template = response.data
      return {
        status: template.status.toLowerCase(),
        rejectionReason: template.status === 'REJECTED' ? template.quality_score?.rejection_reasons?.join(', ') : null
      }
    } catch (error) {
      console.error('Error checking template status:', error)
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data?.error?.message || 'Не удалось проверить статус шаблона'
        throw new Error(errorMessage)
      }
      throw new Error('Не удалось проверить статус шаблона')
    }
  }
} 