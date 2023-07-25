'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import RegisterNoticeModal from './register-notice-modal'

export default function RegisterNoticeBtn() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showToast, setShowToast] = useState<boolean>(false)
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const router = useRouter()
  const handleClickShowErrorDialog = (text: string) => {
    setErrorMessage(text)
    setOpenErrorDialog(true)
    switch (text) {
      case '로그인이 필요합니다':
        router.push('/signin')
        break
      case '공고를 게시할 권한이 없습니다':
        router.push('/')
        break
      case '존재하지 않는 가게입니다':
        router.push('/my-shop')
        break
      default:
        break
    }
  }
  const isMobile = useMediaQuery('(max-width: 768px)')
  const handleClickToggleModal = () => {
    setOpenModal(!openModal)

    setTimeout(() => {
      setShowModal(!showModal)
    }, 500)
  }

  return (
    <div>
      <ActiveBtn
        text="공고 등록하기"
        size={isMobile ? 'mediumSmall' : 'large'}
        onClick={handleClickToggleModal}
      />

      {openModal && (
        <RegisterNoticeModal
          showModal={showModal}
          onClickToggelModal={handleClickToggleModal}
          onClickShowToast={() => setShowToast(true)}
          onClickShowErrorDialog={handleClickShowErrorDialog}
        />
      )}
      {showToast && (
        <ToastContainer onShow={() => setShowToast(false)}>
          등록을 완료했어요
        </ToastContainer>
      )}

      {openErrorDialog && (
        <ConfirmDialog
          text={errorMessage || '요청에 실패했습니다.'}
          onConfirm={() => setOpenErrorDialog(false)}
        />
      )}
    </div>
  )
}
