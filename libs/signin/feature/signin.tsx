'use client'

import { useRef, useState } from 'react'

import { setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { signIn } from '@/libs/shared/api/data-access/request/userRequest'
import UiSignIn from '@/libs/signin/ui/ui-signin/ui-signin'

export default function SignIn() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const handleClickSignIn = async (email: string, password: string) => {
    setLoading(false)
    const res = await signIn(email, password)
    if (res instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // 데이터 가공 구간
      // setLoading(true) // "라우터 처리" ? true 처리 필요 없음 : true 처리 필요함
      const { token } = res.item
      setCookie('token', token)
      router.push('/')
    }
  }

  const userInputRefs = useRef<HTMLInputElement[]>([])

  const handleClickButton = () => {
    const inputValue: string[] = []
    userInputRefs.current.forEach((ref) => {
      if (typeof ref !== 'function') {
        inputValue.push(ref.value)
      }
    })

    handleClickSignIn(inputValue[0], inputValue[1])
  }

  return (
    <div>
      {!loading && <div>페이지 이동 중...</div>}
      {loading && (
        <UiSignIn
          userInputRefs={userInputRefs}
          handleClickButton={handleClickButton}
        />
      )}
    </div>
  )
}
