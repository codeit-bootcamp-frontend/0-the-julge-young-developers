import React from 'react'

import { getShopNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { ShopNoticesData } from '@/libs/shared/api/types/type-notice'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import NoticeCardList from './notice-card-list'
import UnregisteredMyNotice from './unregistered-notice'

export default async function MyNoticeList({ shopId }: { shopId: string }) {
  const response = await getShopNotices({
    shopId,
    offset: 0,
    limit: 10,
  })

  let noticeData
  let count = 0
  if (response instanceof Error) {
    // 알 수 없는 에러 처리
  } else if (typeof response === 'string') {
    // 에러 메시지에 맞게 처리
  } else {
    // response 데이터 가공
    noticeData = response
    count = noticeData.count
  }
  return (
    <div>
      <UiSimpleLayout
        title="등록한 공고"
        titleAlign="start"
        titleSize={28}
        gap={24}
      >
        {count !== 0 ? (
          <NoticeCardList
            shopId={shopId}
            notices={noticeData as ShopNoticesData}
          />
        ) : (
          <UnregisteredMyNotice />
        )}
      </UiSimpleLayout>
    </div>
  )
}
