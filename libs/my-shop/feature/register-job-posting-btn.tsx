'use client'

import { useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterJobPostingModal from './register-job-posting-modal'

export default function RegisterJopPostingBtn() {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const handleClickToggleModal = () => {
    console.log('오잉', isMobile)
    setOpenModal(!openModal)
  }

  return (
    <div>
      <ActiveBtn
        text="공고 등록하기"
        size={isMobile ? 'mediumSmall' : 'large'}
        onClick={handleClickToggleModal}
      />

      {openModal && (
        <RegisterJobPostingModal
          openModal={openModal}
          onClickToggelModal={handleClickToggleModal}
        />
      )}
    </div>
  )
}
