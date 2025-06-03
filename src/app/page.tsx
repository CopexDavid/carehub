import { redirect } from 'next/navigation'
import { getAuthSession } from '@/lib/auth'

export default async function Home() {
  const session = await getAuthSession()

  // Если пользователь авторизован, перенаправляем на дашборд
  if (session) {
    redirect('/dashboard')
  } else {
    // Иначе перенаправляем на страницу входа
    redirect('/login')
  }

  // Эта часть кода никогда не будет выполнена из-за redirect
  return null
}
