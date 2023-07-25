'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import RegisterNoticeModal from '@/libs/my-shop/feature/my-notice/register-notice-modal'
import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import { MyShopNoticeEditButtonProps } from '../type-my-shop-notice'

export default function MyShopNoticeEditButton({
  notice,
}: MyShopNoticeEditButtonProps) {
  const [shownEditModal, setShownEditModal] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showToast, setShowToast] = useState<boolean>(false)
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const router = useRouter()

  const handleClickConfirmDialog = () => {
    setOpenErrorDialog(false)

    switch (errorMessage) {
      case '로그인이 필요합니다':
        router.push('/signin')
        break
      case '공고를 수정할 권한이 없습니다':
        router.push('/')
        break
      case '존재하지 않는 가게입니다' || '존재하지 않는 공고입니다':
        router.push('/my-shop')
        break
      case '마감된 공고는 수정할 수 없습니다':
        setShownEditModal(false)
        break
      default:
        break
    }
  }
  const handleClickShowErrorDialog = (text: string) => {
    setErrorMessage(text)
    setOpenErrorDialog(true)
  }
  const handleClickButton = () => {
    setShownEditModal((prev) => !prev)

    if (showModal) {
      setShowModal(false)
    } else {
      // 모달이 열린 상태와 정말로 보여주는 상태를 구분해야 애니메이션이 가능하다.
      setTimeout(() => {
        setShowModal(true)
      }, 500)
    }
  }

  return (
    <>
      <ActiveOutlineBtn
        text="공고 편집하기"
        size="large"
        onClick={handleClickButton}
      />
      {shownEditModal && (
        <RegisterNoticeModal
          onClickToggelModal={handleClickButton}
          showModal={showModal}
          notice={notice}
          onClickShowToast={() => setShowToast(true)}
          onClickShowErrorDialog={handleClickShowErrorDialog}
        />
      )}
      {showToast && (
        <ToastContainer onShow={() => setShowToast(false)}>
          편집을 완료했어요
        </ToastContainer>
      )}
      {openErrorDialog && (
        <ConfirmDialog
          text={errorMessage || '요청에 실패했습니다.'}
          onConfirm={handleClickConfirmDialog}
        />
      )}
    </>
  )
}
