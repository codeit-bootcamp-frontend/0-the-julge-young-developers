import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const cookie = req.cookies.get('token')

  let token
  if (cookie) {
    token = cookie.value
  }

  // 로그인된 유저만 접근 O (내 가게, 내 프로필)
  if (pathname.startsWith('/my-shop') && !token) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }
  if (pathname.startsWith('/my-profile') && !token) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  // 로그인된 유저는 로그인, 회원가입 페이지에 접근 X
  if (pathname.startsWith('/signin') && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  if (pathname.startsWith('/signup') && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}
