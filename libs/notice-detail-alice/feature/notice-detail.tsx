'use client'

import { useEffect, useState } from 'react'

import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { ShopCategory } from '@/libs/my-shop/type-my-shop'
import {
  MOCK_NOTICES_DATA,
  NOTICE_ID,
} from '@/libs/notice-detail-alice/data-access/data-access-mock'
import {
  getMatchingApplication,
  getMatchingNotice,
} from '@/libs/notice-detail-alice/util/getMatchData'
import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
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
  // query param으로 notice_id 가져오기
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

  const loadUserInfo = async () => {
    if (uid) {
      const resUserInfo = await getUserInfo(uid.toString())

      if (resUserInfo instanceof Error) {
        console.log(resUserInfo)
      } else if (typeof resUserInfo === 'string') {
        console.log(resUserInfo)
      } else {
        console.log(resUserInfo)
        const { item: user } = resUserInfo

        // 유저가 사장님인 경우 사장님 공고 상세 페이지로 리다이렉트
        if (user.type === 'employer') {
          router.push(`/my-shop/${noticeId}`)
        }

        const resUserApplications = await getNoticeUserApplication(user.id)
        if (resUserApplications instanceof Error) {
          console.log(resUserApplications)
        } else if (typeof resUserApplications === 'string') {
          console.log(resUserApplications)
        } else {
          console.log(resUserApplications)
          const { items: userApplications } = resUserApplications

          const matchingApplication = getMatchingApplication(
            noticeId,
            userApplications,
          )

          // 유저가 지원한 공고인 경우 해당 데이터 저장
          if (matchingApplication) {
            setApplicationData(matchingApplication)
          }
        }
      }
    }
  }

  const loadNoticeInfo = async () => {
    const resTotalNotices = await getNotices({ offset: 0, limit: 100 })

    if (resTotalNotices instanceof Error) {
      console.log()
    } else if (typeof resTotalNotices === 'string') {
      console.log(resTotalNotices)
    } else {
      const { items: totalNotices } = resTotalNotices

      // 해당 공고의 상세 데이터 가져오기
      const notice = getMatchingNotice(noticeId, totalNotices)

      if (notice instanceof Error) {
        console.log(notice)
      } else {
        setNoticeData(notice)
      }
    }
  }

  const loadData = async () => {
    setLoading(true)
    await loadUserInfo()
    await loadNoticeInfo()

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
