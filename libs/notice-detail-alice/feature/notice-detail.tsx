'use client'

import { useEffect, useState } from 'react'

import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { NOTICE_ID } from '@/libs/notice-detail-alice/data-access/data-access-mock'
import {
  getMatchingApplication,
  getMatchingNotice,
} from '@/libs/notice-detail-alice/util/getMatchData'
import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import { NoticesItem } from '@/libs/shared/api/types/type-notice'

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

        // 1. 유저가 사장님인 경우 사장님 공고 상세 페이지로 리다이렉트
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

          // 2. 유저가 지원한 공고인 경우 해당 데이터 저장
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
    await loadUserInfo()
    await loadNoticeInfo()
  }

  useEffect(() => {
    loadData()
  }, [])

  console.log('noticeData:', noticeData)
  console.log('applicationData:', applicationData)

  return <div>hello</div>
}
