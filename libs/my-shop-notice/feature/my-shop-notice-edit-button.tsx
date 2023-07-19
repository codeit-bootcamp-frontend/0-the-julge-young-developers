'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
import { useState } from 'react'

import RegisterNoticeModal from '@/libs/my-shop/feature/my-notice/register-notice-modal'
import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import { MyShopNoticeEditButtonProps } from '../type-my-shop-notice'

export default function MyShopNoticeEditButton({
  notice,
}: MyShopNoticeEditButtonProps) {
  const [shownEditModal, setShownEditModal] = useState(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showToast, setShowToast] = useState<boolean>(false)
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
        />
      )}
      {showToast && (
        <ToastContainer onShow={() => setShowToast(false)}>
          편집을 완료했어요
        </ToastContainer>
      )}
    </>
  )
}
