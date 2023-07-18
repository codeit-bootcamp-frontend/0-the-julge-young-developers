import React from 'react'

import { getShopNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { ShopNoticesData } from '@/libs/shared/api/types/type-notice'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import NoticeCardList from './notice-card-list'

// import UnregisteredMyNotice from './unregistered-notice'

export default async function MyNoticeList({ shopId }: { shopId: string }) {
  const noticeData = await getShopNotices({
    shopId,
    offset: 0,
    limit: 10,
  })
  if (noticeData) {
    console.log(shopId, noticeData)
  }
  return (
    <div>
      <UiSimpleLayout
        title="등록한 공고"
        titleAlign="start"
        titleSize={28}
        gap={24}
      >
        {/* <UnregisteredMyNotice /> */}
        <NoticeCardList
          shopId={shopId}
          notices={noticeData as ShopNoticesData}
        />
      </UiSimpleLayout>
    </div>
  )
}
