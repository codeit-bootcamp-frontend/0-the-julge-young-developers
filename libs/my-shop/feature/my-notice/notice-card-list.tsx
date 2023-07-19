'use client'

import React, { useEffect, useState } from 'react'

import { getShopInfo } from '@/libs/shared/api/data-access/request/shopRequest'
import {
  AllNoticesData,
  ShopNoticesData,
} from '@/libs/shared/api/types/type-notice'
import { ShopData } from '@/libs/shared/api/types/type-shop'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'

export default function NoticeCardList({
  notices,
  shopId,
}: {
  notices: ShopNoticesData
  shopId: string
}) {
  const [myShopData, setMyShopData] = useState<ShopData | null>(null)

  useEffect(() => {
    async function fetchShopData() {
      const response = await getShopInfo(shopId)
      if (response instanceof Error) {
        // Handle error
      } else {
        setMyShopData(response as ShopData)
      }
    }

    fetchShopData()
  }, [shopId])

  const data: AllNoticesData[] = notices.items.map((item) => {
    const shop = myShopData?.item
    return {
      ...item.item,
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
        href: myShopData?.links[0].href ?? '',
      },
    }
  })

  return (
    <div>
      <NoticeCardItem data={data} />
    </div>
  )
}
