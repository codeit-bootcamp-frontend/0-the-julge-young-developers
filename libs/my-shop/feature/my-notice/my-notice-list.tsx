'use client'

import React, { useEffect, useRef, useState } from 'react'

import { getShopNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { ShopNoticesData } from '@/libs/shared/api/types/type-notice'
import UiLoading from '@/libs/shared/loading/ui/ui-loading'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import NoticeCardList from './notice-card-list'
import UnregisteredMyNotice from './unregistered-notice'

export default function MyNoticeList({ shopId }: { shopId: string }) {
  const [offset, setOffset] = useState<number>(0)
  const [noticeData, setNoticeData] = useState<ShopNoticesData | undefined>()
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [inView, setInView] = useState(false)
  const lastItemRef = useRef<HTMLDivElement>(null)

  async function fetchNotices() {
    setIsLoading(true)
    const response = await getShopNotices({
      shopId,
      offset,
      limit: 3,
    })
    setIsLoading(false)

    if (response instanceof Error) {
      // 알 수 없는 에러 처리
      return false
    }
    if (typeof response === 'string') {
      // 에러 메시지에 따른 에러 처리
      return false
    }
    const newNoticeData = response
    const newCount = newNoticeData.count
    if (offset > count || isLoading) {
      return
    }
    if (newNoticeData.items && newNoticeData.items.length > 0) {
      if (noticeData) {
        const mergedItems = [...noticeData.items, ...newNoticeData.items]
        newNoticeData.items = mergedItems
        setNoticeData(newNoticeData)
      }

      setNoticeData(newNoticeData)
      setCount(newCount)

      setOffset((prev) => prev + 3)
    }
    return true
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      },
      { threshold: 1 },
    )
    if (lastItemRef.current) {
      observer.observe(lastItemRef.current)
    }
  }, [])

  useEffect(() => {
    console.log(inView, offset, count)
    if (!isLoading) {
      fetchNotices()
    }
  }, [inView])

  return (
    <div>
      <UiSimpleLayout
        title="등록한 공고"
        titleAlign="start"
        titleSize={28}
        gap={24}
      >
        {count !== 0 && noticeData ? (
          <>
            <NoticeCardList shopId={shopId} notices={noticeData} />

            {isLoading && <UiLoading />}
          </>
        ) : (
          <UnregisteredMyNotice />
        )}
      </UiSimpleLayout>
      <div ref={lastItemRef} style={{ height: '1px' }} />
    </div>
  )
}
