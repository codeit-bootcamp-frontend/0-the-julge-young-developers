'use client'

import { useEffect, useState } from 'react'

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

      setTimeout(() => {
        setOpenView('mobile')
      }, 0)
    } else {
      setOpenModal(true)
      setTimeout(() => {
        setOpenView('tablet/desktop')
      }, 0)
    }
  }

  useEffect(() => {
    console.log(openModal)
    console.log(isMobile && openView === 'mobile')
  }, [openModal, isMobile, openView])

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
      {openModal && (
        <RegisterModalMobile
          funneled={isMobile && openView === 'mobile'}
          onClickCloseModal={handleClickCloseModal}
        />
      )}
    </div>
  )
}
