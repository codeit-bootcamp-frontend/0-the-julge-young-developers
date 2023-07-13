'use client'

import { useRef } from 'react'

import { setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { signIn } from '@/libs/shared/api/data-access/request/userRequest'
import UiSignIn from '@/libs/signin/ui/ui-signin/ui-signin'

export default function SignIn() {
  const router = useRouter()

  const handleClickSignIn = async (email: string, password: string) => {
    const res = await signIn(email, password)

    if (res instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // 데이터 가공 구간
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
    <UiSignIn
      userInputRefs={userInputRefs}
      handleClickButton={handleClickButton}
    />
  )
}
