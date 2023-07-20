'use client'

import { useEffect, useRef, useState } from 'react'

import { getShopNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { ShopNoticesData } from '@/libs/shared/api/types/type-notice'
import UiLoading from '@/libs/shared/loading/ui/ui-loading'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import NoticeCardList from './notice-card-list'

const INITIAL_CARDS = 6
const CARDS_PER_LINE = 3
export default function MyNoticeListAddedScrolling({
  shopId,
  initialNoticeData,
}: {
  shopId: string
  initialNoticeData: ShopNoticesData
}) {
  const [offset, setOffset] = useState<number>(INITIAL_CARDS)
  const [noticeData, setNoticeData] =
    useState<ShopNoticesData>(initialNoticeData)
  const [hasNext, setHasNext] = useState(initialNoticeData.hasNext)
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [inView, setInView] = useState(false)

  const lastItemRef = useRef<HTMLDivElement>(null)

  const fetchNotices = async (limit: number) => {
    setIsLoading(true)
    const response = await getShopNotices({
      shopId,
      offset,
      limit,
    })
    setIsLoading(false)

    if (response instanceof Error) {
      return false
    }
    if (typeof response === 'string') {
      return false
    }
    const newNoticeData = response

    if (newNoticeData.items && newNoticeData.items.length > 0) {
      const mergedItems = [...noticeData.items, ...newNoticeData.items]
      newNoticeData.items = mergedItems
      setNoticeData(newNoticeData)
    }
    setOffset((prev) => prev + 3)
    setHasNext(newNoticeData.hasNext)
  }

  useEffect(() => {
    if (!isInitialLoading && !isLoading && hasNext) {
      fetchNotices(CARDS_PER_LINE)
    }
    setIsInitialLoading(false)
  }, [inView])

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
    if (!lastItemRef.current) return
    observer.observe(lastItemRef.current)

    const lastItemRefBottom = lastItemRef.current.getBoundingClientRect().bottom
    const { clientHeight, clientWidth } = document.documentElement
    const cardHeight = clientWidth > 768 ? 312 : 171
    if (lastItemRefBottom <= clientHeight) {
      const limit =
        (Math.floor((clientHeight - lastItemRefBottom) / cardHeight) + 1) *
        CARDS_PER_LINE
      fetchNotices(limit)
    }
  }, [])

  return (
    <div>
      <UiSimpleLayout
        title="등록한 공고"
        titleAlign="start"
        titleSize={28}
        gap={24}
      >
        <NoticeCardList shopId={shopId} notices={noticeData} />
        {isLoading && <UiLoading />}
      </UiSimpleLayout>
      <div ref={lastItemRef} style={{ height: '1px' }} />
    </div>
  )
}
