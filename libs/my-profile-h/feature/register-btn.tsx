'use client'

import { useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterModal from './register-modal'
import RegisterModalMobile from './register-modal-mobile'

export default function RegisterBtn() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1028px)')
  const [openView, setOpenView] = useState<
    'not-found' | 'tablet/desktop' | 'mobile'
  >('not-found')
  const [openModal, setOpenModal] = useState<boolean>(false)

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
  }

  return (
    <div>
      <ActiveBtn
        text="내 프로필 등록하기"
        size={isMobile ? 'mediumSmall' : 'large'}
        onClick={handleClickChangeView}
      />

      {openModal && !isMobile && openView === 'tablet/desktop' && (
        <RegisterModal onClickCloseModal={handleClickCloseModal} />
      )}
      {openModal && isMobile && openView === 'mobile' && (
        <RegisterModalMobile onClickCloseModal={handleClickCloseModal} />
      )}
    </div>
  )
}
