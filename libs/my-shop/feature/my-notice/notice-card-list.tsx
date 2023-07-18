import React from 'react'

import { getShopInfo } from '@/libs/shared/api/data-access/request/shopRequest'
import {
  AllNoticesData,
  ShopNoticesData,
} from '@/libs/shared/api/types/type-notice'
import { ShopData } from '@/libs/shared/api/types/type-shop'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'

export default async function NoticeCardList({
  notices,
  shopId,
}: {
  notices: ShopNoticesData
  shopId: string
}) {
  const myShopData = (await getShopInfo(shopId)) as ShopData
  const data: AllNoticesData[] = notices.items.map((item) => {
    const shop = myShopData?.item // myShopData가 존재하면 shop 변수에 할당
    return {
      ...item.item, // 기존의 item.item을 그대로 유지
      shop: {
        item: {
          id: shop?.id ?? '',
          name: shop?.name ?? '',
          category: shop?.category ?? '',
          address1: shop?.address1 ?? '',
          address2: shop?.address2 ?? '',
          description: shop?.description ?? '',
          imageUrl: shop?.imageUrl ?? '',
          originalHourlyPay: shop?.originalHourlyPay ?? 0,
        },
        href: myShopData.links[0].href,
      },
    }
  })

  return (
    <div>
      <NoticeCardItem data={data} />
    </div>
  )
}
