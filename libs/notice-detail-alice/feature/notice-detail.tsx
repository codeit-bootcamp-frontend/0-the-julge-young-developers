'use client'

import { SetStateAction, useEffect, useState } from 'react'

import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { ShopCategory } from '@/libs/my-shop/type-my-shop'
import {
  MOCK_NOTICES_DATA,
  NOTICE_ID,
} from '@/libs/notice-detail-alice/data-access/data-access-mock'
import {
  loadApplicationInfo,
  loadNoticeInfo,
} from '@/libs/notice-detail-alice/data-access/notice-application-data'
import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import {
  AllNoticesData,
  NoticesItem,
} from '@/libs/shared/api/types/type-notice'
import UiNoticeDetailCard from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card'
import UiNoticeDetailCardLayout from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card-layout'
import { utilFormatDuration } from '@/libs/shared/notice-card/util/util-format-duration'

import Loading from '../ui/loading'
import ApplicationButton from '../ui/ui-application-button'
import UiRecentNotices from '../ui/ui-recent-notices'

export default function NoticeDetail() {
  // 미완성) query param으로 notice_id 가져오기
  const noticeId = NOTICE_ID as string

  const router = useRouter()
  const token = getCookie('token')
  const uid = getCookie('uid')
  const [noticeData, setNoticeData] = useState(null as unknown as NoticesItem)
  const [applicationData, setApplicationData] = useState(
    null as unknown as NoticeUserApplicationItem,
  )
  const [recentNoticesData, setRecentNoticesData] = useState<AllNoticesData[]>(
    null as unknown as AllNoticesData[],
  )
  const [loading, setLoading] = useState(true)

  if (!token) {
    router.push('/signin')
  }

  const loadData = async () => {
    setLoading(true)
    const applicationInfo = await loadApplicationInfo(noticeId, uid?.toString())

    if (applicationInfo instanceof Error) {
      console.log('사장님 유저')
    }

    const noticeInfo = await loadNoticeInfo(noticeId)

    if (noticeInfo instanceof Error) {
      console.log(noticeInfo)
    }
    setApplicationData(
      applicationInfo as SetStateAction<NoticeUserApplicationItem>,
    )
    setNoticeData(noticeInfo as SetStateAction<NoticesItem>)

    const data = window.localStorage.getItem('RECENT_NOTICES')
    if (data) {
      setRecentNoticesData(JSON.parse(data))
    }
    setLoading(false)
  }

  useEffect(() => {
    window.localStorage.setItem(
      'RECENT_NOTICES',
      JSON.stringify(MOCK_NOTICES_DATA),
    ) // 테스트
    loadData()
  }, [])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <UiNoticeDetailCardLayout
              name={noticeData.item.shop.item.name}
              category={noticeData.item.shop.item.category as ShopCategory}
            >
              <UiNoticeDetailCard
                name={noticeData.item.shop.item.name}
                imageUrl={noticeData.item.shop.item.imageUrl}
                duration={utilFormatDuration(
                  noticeData.item.startsAt,
                  noticeData.item.workhour,
                )}
                workhour={noticeData.item.workhour}
                address={noticeData.item.shop.item.address1}
                closed={noticeData.item.closed}
                shopDescription={noticeData.item.shop.item.description}
                noticeDescription={noticeData.item.description}
                hourlyPay={noticeData.item.hourlyPay}
                originalHourlyPay={noticeData.item.shop.item.originalHourlyPay}
              >
                {/* eslint-disable-next-line no-nested-ternary */}
                {noticeData.item.closed ? (
                  <ApplicationButton type="disabled" />
                ) : applicationData ? (
                  <ApplicationButton type="cancel" />
                ) : (
                  <ApplicationButton type="application" />
                )}
              </UiNoticeDetailCard>
            </UiNoticeDetailCardLayout>
          </div>
          <UiRecentNotices noticesList={recentNoticesData} />
        </>
      )}
    </div>
  )
}
