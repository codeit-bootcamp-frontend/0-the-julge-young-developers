'use client'

import { useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import RegisterNoticeModal from './register-notice-modal'

export default function RegisterNoticeBtn() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showToast, setShowToast] = useState<boolean>(false)

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
        />
      )}
      {showToast && (
        <ToastContainer onShow={() => setShowToast(false)}>
          등록을 완료했어요
        </ToastContainer>
      )}
    </div>
  )
}
