'use client'

import { useState } from 'react'

import UiCommonClickBtn from '@/libs/shared/click-btns/ui/ui-click-btn'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterModal from './register-modal'
import RegisterModalMobile from './register-modal-mobile'

export default function RegisterBtn() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1200px)')
  const [openView, setOpenView] = useState<
    'not-found' | 'tablet/desktop' | 'mobile'
  >('not-found')

  const handleClickChangeView = () => {
    if (isMobile && isTablet) {
      setOpenView('mobile')
    } else {
      setOpenView('tablet/desktop')
    }
  }

  return (
    <div>
      <UiCommonClickBtn
        text="내 프로필 등록하기"
        size="large"
        status="active"
        onClick={handleClickChangeView}
      />

      {openView === 'tablet/desktop' && <RegisterModal />}
      {openView === 'mobile' && <RegisterModalMobile />}
    </div>
  )
}
