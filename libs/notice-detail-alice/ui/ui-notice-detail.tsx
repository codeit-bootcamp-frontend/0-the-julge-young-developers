'use client'

import classNames from 'classnames/bind'

import {
  MOCK_NOTICES_DATA,
  MOCK_NOTICE_DETAIL_DATA,
} from '@/libs/notice-detail-alice/data-access/data-access-mock'
import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'
import UiNoticeDetailCard from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card'
import UiNoticeDetailCardLayout from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card-layout'

import styles from './ui-notice-detail.module.scss'

const cx = classNames.bind(styles)

export default function UiNoticeDetail() {
  return (
    <>
      <div>
        <UiNoticeDetailCardLayout
          name={MOCK_NOTICE_DETAIL_DATA.name}
          category={MOCK_NOTICE_DETAIL_DATA.category}
        >
          <UiNoticeDetailCard
            name={MOCK_NOTICE_DETAIL_DATA.name}
            imageUrl={MOCK_NOTICE_DETAIL_DATA.imageUrl}
            duration={MOCK_NOTICE_DETAIL_DATA.duration}
            workhour={MOCK_NOTICE_DETAIL_DATA.workhour}
            address={MOCK_NOTICE_DETAIL_DATA.address}
            closed={MOCK_NOTICE_DETAIL_DATA.closed}
            shopDescription={MOCK_NOTICE_DETAIL_DATA.shopDescription}
            noticeDescription={MOCK_NOTICE_DETAIL_DATA.noticeDescription}
            hourlyPay={MOCK_NOTICE_DETAIL_DATA.hourlyPay}
            originalHourlyPay={MOCK_NOTICE_DETAIL_DATA.originalHourlyPay}
          >
            <ActiveBtn
              text="신청하기"
              size="large"
              onClick={() => {
                console.log('신청하기~!')
              }}
            />
          </UiNoticeDetailCard>
        </UiNoticeDetailCardLayout>
      </div>
      <div className={cx('recentNotices')}>
        <NoticeCardItem data={MOCK_NOTICES_DATA} />
      </div>
    </>
  )
}
