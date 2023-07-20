import { cookies } from 'next/headers'

import NoticeDetailShell from '@/libs/alba/notice-detail/feature/notice-detail-shell'
import RecentNoticeShell from '@/libs/alba/notice-detail/feature/recent-notice-shell'
import { getMatchingApplication } from '@/libs/notice-detail-alice/util/getMatchData'
import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { getShopNotice } from '@/libs/shared/api/data-access/request/noticeRequest'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import { ShopNoticeData } from '@/libs/shared/api/types/type-notice'

export default async function NoticeDetailPage({
  params,
}: {
  params: {
    shopId: string
    noticeId: string
  }
}) {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value as string
  const token = cookieInstance.get('token')?.value

  let userType
  let isProfile = false
  if (!userId) {
    userType = undefined
  } else {
    const userInfo = await getUserInfo(userId)
    if (userInfo instanceof Error) {
      // 알 수 없는 에러 처리
      throw userInfo
    } else if (typeof userInfo === 'string') {
      // 에러 메시지에 맞게 처리
      throw new Error(userInfo)
    } else {
      // res 데이터 가공
      if (userInfo.item.name) {
        isProfile = true
      }
      userType = userInfo.item.type
    }
  }

  let isApplication
  if (userType === 'employee') {
    const userNoticeApplication = await getNoticeUserApplication(userId, {
      token,
    })

    if (userNoticeApplication instanceof Error) {
      // 알 수 없는 에러 처리
      throw userNoticeApplication
    } else if (typeof userNoticeApplication === 'string') {
      // 에러 메시지에 맞게 처리
      throw new Error(userNoticeApplication)
    } else {
      // response 데이터 가공

      isApplication = getMatchingApplication(
        params.noticeId,
        userNoticeApplication?.items,
      )
    }
  }

  const noticeDetail = await getShopNotice(params.shopId, params.noticeId)

  let hourlyPay
  let startsAt
  let workhour
  let noticeDescription
  let closed
  let name
  let category
  let shopDescription
  let imageUrl
  let originalHourlyPay
  let address

  if (noticeDetail instanceof Error) {
    // 알 수 없는 에러 처리
    throw noticeDetail
  } else if (typeof noticeDetail === 'string') {
    // 에러 메시지에 맞게 처리
    throw new Error(noticeDetail)
  } else {
    // response 데이터 가공
    hourlyPay = noticeDetail.item.hourlyPay
    startsAt = noticeDetail.item.startsAt
    workhour = noticeDetail.item.workhour
    noticeDescription = noticeDetail.item.description
    closed = noticeDetail.item.closed
    name = noticeDetail.item.shop.item.name
    category = noticeDetail.item.shop.item.category
    shopDescription = noticeDetail.item.shop.item.description
    imageUrl = noticeDetail.item.shop.item.imageUrl
    originalHourlyPay = noticeDetail.item.shop.item.originalHourlyPay
    address = noticeDetail.item.shop.item.address1
  }

  return (
    <div>
      <NoticeDetailShell
        noticeId={params.noticeId}
        shopId={params.shopId}
        name={name as string}
        category={category as string}
        imageUrl={imageUrl as string}
        startsAt={startsAt as string}
        workhour={workhour as number}
        address={address as string}
        closed={closed as boolean}
        shopDescription={shopDescription as string}
        noticeDescription={noticeDescription as string}
        hourlyPay={hourlyPay as number}
        originalHourlyPay={originalHourlyPay as number}
        userType={userType}
        isProfile={isProfile}
        isApplication={isApplication}
      />
      <RecentNoticeShell noticeDetail={noticeDetail as ShopNoticeData} />
    </div>
  )
}
