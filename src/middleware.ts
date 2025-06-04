import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequestWithAuth } from 'next-auth/middleware'

// Конфигурация защищенных маршрутов
const protectedPaths = [
  '/dashboard',
  '/dashboard/chats',
  '/dashboard/templates',
  '/dashboard/broadcasts',
  '/dashboard/client-lists',
  '/dashboard/assistant',
  '/dashboard/analytics',
  '/dashboard/settings',
  '/dashboard/profile',
]

export default async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req })
  const isAuth = !!token
  const isAuthPage = req.nextUrl.pathname === '/login'
  const isProtectedPath = protectedPaths.some(path => 
    req.nextUrl.pathname === path || 
    req.nextUrl.pathname.startsWith(`${path}/`)
  )

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
  }

  if (!isAuth && isProtectedPath) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('callbackUrl', req.url)
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
  ]
} 