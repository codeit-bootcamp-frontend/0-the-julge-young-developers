'use client'

import { useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import CommonClientLoader from '@/libs/shared/loading/feature/client-loader'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import AlbaToast from '@/libs/shared/toast/feature/toast-container'

import RegisterModal from './register-modal'
import RegisterModalMobile from './register-modal-mobile'

export default function RegisterBtn() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1028px)')
  const [openView, setOpenView] = useState<
    'not-found' | 'tablet/desktop' | 'mobile'
  >('not-found')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const [defaultName, setDefaultName] = useState<string>('')
  const [defaultPhone, setDefaultPhone] = useState<string>('')
  const [defaultAddress, setDefaultAddress] = useState<string>('')

  const [isShowToast, setIsShowToast] = useState<boolean>(false)
  const [openClientLoader, setOpenClientLoader] = useState<boolean>(false)

  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleClickShowErrorDialog = (text: string) => {
    setErrorMessage(text)
    setOpenErrorDialog(true)
  }

  const handleClickCloseModal = () => {
    setOpenModal(false)
  }

  const handleClickChangeView = () => {
    if (isMobile && isTablet) {
      setOpenModal(true)
      setOpenView('mobile')
    } else {
      setOpenModal(true)
      setOpenView('tablet/desktop')
    }

    // 모달이 열린 상태와 정말로 보여주는 상태를 구분해야 애니메이션이 가능하다.
    setTimeout(() => {
      setShowModal(true)
    }, 500)
  }

  return (
    <div>
      <ActiveBtn
        text="내 프로필 등록하기"
        size={isMobile ? 'mediumSmall' : 'large'}
        onClick={handleClickChangeView}
      />

      {openModal && !isMobile && openView === 'tablet/desktop' && (
        <RegisterModal
          showModal={showModal}
          onClickCloseModal={handleClickCloseModal}
          setOpenClientLoader={setOpenClientLoader}
          onClickOpenToast={() => setIsShowToast(true)}
          handleClickShowErrorDialog={handleClickShowErrorDialog}
        />
      )}
      {openModal && isMobile && openView === 'mobile' && (
        <RegisterModalMobile
          defaultName={defaultName}
          defaultPhone={defaultPhone}
          defaultAddress={defaultAddress}
          // defaultBio={defaultBio}
          setDefaultName={setDefaultName}
          setDefaultPhone={setDefaultPhone}
          setDefaultAddress={setDefaultAddress}
          // setDefaultBio={setDefaultBio}
          showModal={showModal}
          onClickCloseModal={handleClickCloseModal}
          onClickOpenToast={() => setIsShowToast(true)}
          setOpenClientLoader={setOpenClientLoader}
          handleClickShowErrorDialog={handleClickShowErrorDialog}
        />
      )}
      {isShowToast && (
        <AlbaToast onShow={() => setIsShowToast(false)}>
          등록을 완료했어요
        </AlbaToast>
      )}

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
