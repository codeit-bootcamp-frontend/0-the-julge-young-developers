import React from 'react'

import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'

import RegisterNoticeBtn from './register-notice-btn'

export default function UnregisteredMyNotice() {
  return (
    <UiRegisterLayout
      text="공고를 등록해 보세요."
      registerButton={<RegisterNoticeBtn />}
    />
  )
}
