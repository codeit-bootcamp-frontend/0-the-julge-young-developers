import React from 'react'

import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import UnregisteredMyNotice from './unregistered-notice'

export default function MyNoticeList() {
  return (
    <div>
      <UiSimpleLayout
        title="등록한 공고"
        titleAlign="start"
        titleSize={28}
        gap={24}
      >
        <UnregisteredMyNotice />
      </UiSimpleLayout>
    </div>
  )
}
