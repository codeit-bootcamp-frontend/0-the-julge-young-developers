import React from 'react'

import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import RegisterNoticeBtn from './register-notice-btn'

export default function UnregisteredMyNotice() {
  return (
    <UiSimpleLayout
      title="등록한 공고"
      titleAlign="start"
      titleSize={28}
      gap={24}
    >
      <UiRegisterLayout
        text="공고를 등록해 보세요."
        registerButton={<RegisterNoticeBtn />}
      />
    </UiSimpleLayout>
  )
}
