'use client'

import { useEffect, useState } from 'react'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import UiNoticeDetailCard from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import { MOCK_NOTICE_DETAIL_DATA } from './data-access/data-access-mock'

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

export default function UiNoticeDetail() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  // const [isMobileSize, setIsMobileSize] = useState(false)
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
  )
}

//   <UiSimpleLayout title="도토리 식당" subtitle="식당" gap={24}>
//   <UiNoticeDetailCard
//     name={MOCK_NOTICE_DETAIL_DATA.name}
//     imageUrl={MOCK_NOTICE_DETAIL_DATA.imageUrl}
//     duration={MOCK_NOTICE_DETAIL_DATA.duration}
//     workhour={MOCK_NOTICE_DETAIL_DATA.workhour}
//     address={MOCK_NOTICE_DETAIL_DATA.address}
//     closed={MOCK_NOTICE_DETAIL_DATA.closed}
//     description={MOCK_NOTICE_DETAIL_DATA.description}
//     hourlyPay={MOCK_NOTICE_DETAIL_DATA.hourlyPay}
//     originalHourlyPay={MOCK_NOTICE_DETAIL_DATA.originalHourlyPay}
//   >
//     <ActiveBtn
//       text="신청하기"
//       size="large"
//       onClick={() => {
//         console.log('신청하기~!')
//       }}
//     />
//   </UiNoticeDetailCard>
// </UiSimpleLayout>
