'use client'

import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import {
  MOCK_NOTICES_DATA,
  MOCK_NOTICE_DETAIL_DATA,
} from '@/libs/notice-detail-alice/data-access/data-access-mock'
import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'
import UiNoticeDetailCard from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-notice-detail.module.scss'

const tabletPcSize = {
  titleSize: 28,
  subtitleSize: 16,
  gap: 24,
}

const mobileSize = {
  titleSize: 20,
  subtitleSize: 14,
  gap: 16,
}

const cx = classNames.bind(styles)

export default function UiNoticeDetail() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [responsiveSize, setResponsiveSize] = useState<{
    titleSize: number
    subtitleSize: number
    gap: number
  }>(tabletPcSize)

  useEffect(() => {
    if (isMobile) {
      setResponsiveSize(mobileSize)
    } else {
      setResponsiveSize(tabletPcSize)
    }
  }, [isMobile])

  return (
    <>
      <div>
        <UiSimpleLayout
          title={MOCK_NOTICE_DETAIL_DATA.name}
          subtitle={MOCK_NOTICE_DETAIL_DATA.category}
          titleSize={responsiveSize.titleSize}
          subtitleSize={responsiveSize.subtitleSize}
          gap={responsiveSize.gap}
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
        </UiSimpleLayout>
      </div>
      <div className={cx('recentNotices')}>
        <NoticeCardItem data={MOCK_NOTICES_DATA} />
      </div>
    </>
  )
}
