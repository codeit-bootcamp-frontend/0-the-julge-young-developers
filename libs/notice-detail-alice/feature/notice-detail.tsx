'use client'

import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

export default function NoticeDetail() {
  const router = useRouter()
  const token = getCookie('token')

  if (!token) {
    router.push('/signin')
  }

  return <div>hello</div>
}
