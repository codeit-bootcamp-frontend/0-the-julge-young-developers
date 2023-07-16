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
  const [showModal, setShowModal] = useState<boolean>(false)

  const [defaultName, setDefaultName] = useState<string>('')
  const [defaultPhone, setDefaultPhone] = useState<string>('')
  const [defaultAddress, setDefaultAddress] = useState<string>('')
  // const [defaultBio, setDefaultBio] = useState<string>('')

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
        <RegisterModal onClickCloseModal={handleClickCloseModal} />
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
        />
      )}
    </div>
  )
}
