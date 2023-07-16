import React from 'react'

import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'

import RegisterJopPostingBtn from './register-job-posting-btn'

export default function UnregisteredMyJobPosting() {
  return (
    <UiRegisterLayout
      text="공고를 등록해 보세요."
      registerButton={<RegisterJopPostingBtn />}
    />
  )
}
