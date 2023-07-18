import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import { ShopCategory } from '@/libs/shared/notice-card/type-notice-card'
import UiNoticeDetailCard from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card'
import UiNoticeDetailCardLayout from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card-layout'
import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'

import NoticeDetailBtn from './notice-detail-btn'

interface NoticeDetailShellProps {
  noticeId: string
  shopId: string
  name: string
  category: string
  imageUrl: string
  startsAt: string
  workhour: number
  address: string
  closed: boolean
  shopDescription: string
  noticeDescription: string
  hourlyPay: number
  originalHourlyPay: number
  userType?: string
  isProfile: boolean
  isApplication?: NoticeUserApplicationItem
}

export default function NoticeDetailShell({
  noticeId,
  shopId,
  name,
  category,
  imageUrl,
  startsAt,
  workhour,
  address,
  closed,
  shopDescription,
  noticeDescription,
  hourlyPay,
  originalHourlyPay,
  userType,
  isProfile,
  isApplication,
}: NoticeDetailShellProps) {
  console.log(closed, userType, isProfile, isApplication?.item.status)
  return (
    <div>
      <UiNoticeDetailCardLayout name={name} category={category as ShopCategory}>
        <UiNoticeDetailCard
          name={name}
          imageUrl={imageUrl}
          duration={utilFormatDuration(startsAt, workhour)}
          workhour={workhour}
          address={address}
          closed={closed}
          shopDescription={shopDescription}
          noticeDescription={noticeDescription}
          hourlyPay={hourlyPay}
          originalHourlyPay={originalHourlyPay}
        >
          <NoticeDetailBtn
            noticeId={noticeId}
            shopId={shopId}
            closed={closed}
            userType={userType}
            isProfile={isProfile}
            isApplication={isApplication}
          />
        </UiNoticeDetailCard>
      </UiNoticeDetailCardLayout>
    </div>
  )
}
