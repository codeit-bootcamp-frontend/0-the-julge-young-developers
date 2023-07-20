'use client'

import { useRef, useState } from 'react'

import { setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { signIn } from '@/libs/shared/api/data-access/request/userRequest'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import CommonClientLoader from '@/libs/shared/loading/feature/client-loader'
import UiSignIn from '@/libs/signin/ui/ui-signin/ui-signin'

export default function SignIn() {
  const router = useRouter()
  const [openClientLoader, setOpenClientLoader] = useState<boolean>(false)
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleClickSignIn = async (email: string, password: string) => {
    setOpenClientLoader(true)
    const res = await signIn(email, password)
    setOpenClientLoader(false)
    if (res instanceof Error) {
      // 알 수 없는 에러 처리
      setErrorMessage('알 수 없는 에러가 발생했습니다.')
      setOpenErrorDialog(true)
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
      setErrorMessage(res)
      setOpenErrorDialog(true)
    } else {
      // 데이터 가공 구간
      const { token, user } = res.item
      setCookie('token', token)
      setCookie('uid', user.item.id)
      setCookie('isLogin', 'isLogin')
      router.push('/')
    }
  }

  const userInputRefs = useRef<HTMLInputElement[]>([])

  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
      <UiSignIn
        userInputRefs={userInputRefs}
        onSubmitButton={handleSubmitButton}
      />
      {openClientLoader && <CommonClientLoader />}

      {openErrorDialog && (
        <ConfirmDialog
          text={errorMessage || '요청에 실패했습니다.'}
          onConfirm={() => setOpenErrorDialog(false)}
        />
      )}
    </div>
  )
}
