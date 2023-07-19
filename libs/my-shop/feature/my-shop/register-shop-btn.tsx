'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
import { useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import RegisterShopModal from './register-shop-modal'

export default function RegisterShopBtn() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showToast, setShowToast] = useState(false)

  const handleClickShowErrorDialog = (text: string) => {
    setErrorMessage(text)
    setOpenErrorDialog(true)
  }

  const handleClickToggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <ActiveBtn
        text="내 가게 등록하기"
        size={isMobile ? 'mediumSmall' : 'large'}
        onClick={handleClickToggleModal}
      />

      {openModal && (
        <RegisterShopModal
          onClickToggelModal={handleClickToggleModal}
          onClickShowToast={() => setShowToast(true)}
          // handleClickShowErrorDialog={handleClickShowErrorDialog}
        />
      )}
      {/* {openErrorDialog && (
        <ConfirmDialog
          text={errorMessage || '요청에 실패했습니다.'}
          onConfirm={() => setOpenErrorDialog(false)}
        />
      )} */}
      {showToast && (
        <ToastContainer onShow={() => setShowToast(false)}>
          등록을 완료했어요
        </ToastContainer>
      )}
    </div>
  )
}
