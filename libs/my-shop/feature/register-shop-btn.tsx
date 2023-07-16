'use client'

import { useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterShopModal from './register-shop-modal'

export default function RegisterShopBtn() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
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
        <RegisterShopModal onClickToggelModal={handleClickToggleModal} />
      )}
    </div>
  )
}
