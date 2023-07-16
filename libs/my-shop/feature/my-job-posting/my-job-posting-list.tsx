import React from 'react'

import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import UnregisteredMyJobPosting from './unregistered-my-job-posting'

export default function MyJobPostingList() {
  return (
    <div>
      <UiSimpleLayout
        title="등록한 공고"
        titleAlign="start"
        titleSize={28}
        gap={24}
      >
        <UnregisteredMyJobPosting />
      </UiSimpleLayout>
    </div>
  )
}
