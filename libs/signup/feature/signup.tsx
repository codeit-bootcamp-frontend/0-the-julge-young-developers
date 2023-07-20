'use client'

import { useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import { signUp } from '@/libs/shared/api/data-access/request/userRequest'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import CommonClientLoader from '@/libs/shared/loading/feature/client-loader'
import { UserType } from '@/libs/signup/type-signup'
import UiSignUp from '@/libs/signup/ui/ui-signup/ui-signup'
import Checker from '@/libs/signup/util/checkerClass'

export default function SignUp() {
  const router = useRouter()
  const [openClientLoader, setOpenClientLoader] = useState<boolean>(false)
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const userInputRefs = useRef<HTMLInputElement[]>([])
  const [validEmail, setValidEmail] = useState<boolean>(true)
  const [validPw, setValidPw] = useState<boolean>(true)
  const [validPwRepeat, setValidPwRepeat] = useState<boolean>(true)
  const [userType, setUserType] = useState<UserType>('employee')

  const handleClickSignUp = async (
    uType: string,
    email: string,
    password: string,
  ) => {
    setOpenClientLoader(true)
    const res = await signUp(email, password, uType)
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
      // response 데이터 가공
      router.push('/signin')
    }
  }

  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputValue: string[] = []
    userInputRefs.current.forEach((ref, idx) => {
      if (typeof ref !== 'function') {
        if (idx === 2) return
        inputValue.push(ref.value)
      }
    })

    if (!validEmail || !validPw || !validPwRepeat) {
      return
    }

    handleClickSignUp(userType, inputValue[0], inputValue[1])
  }

  const handleClickSelectUserType = (type: UserType) => {
    if (userType !== type) {
      setUserType(type)
    }
  }

  const utilCheck = (type: string, value: string) => {
    switch (type) {
      case 'email':
        setValidEmail(Checker.checkEmailFormat(value))
        break
      case 'pw':
        setValidPw(Checker.checkPasswordFormat(value))
        break
      case 'pwRepeat':
        // eslint-disable-next-line no-case-declarations
        const pw = userInputRefs.current[1].value
        setValidPwRepeat(Checker.checkPasswordRepeatSame(value, pw))
        break
      default:
        break
    }
  }

  return (
    <div>
      <UiSignUp
        userInputRefs={userInputRefs}
        validEmail={validEmail}
        validPw={validPw}
        validPwRepeat={validPwRepeat}
        userType={userType}
        utilCheck={utilCheck}
        onSubmitButton={handleSubmitButton}
        handleClickSelectUserType={handleClickSelectUserType}
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
