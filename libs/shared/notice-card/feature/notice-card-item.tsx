'use client'

import { useRouter } from 'next/navigation'

import { MOCK_DOMAIN, MOCK_NOTICES } from '../data-access/data-access-mock'
import UiNoticeCardItem from '../ui/ui-notice-card-item/ui-notice-card-item'
import UiNoticeCardList from '../ui/ui-notice-card-list /ui-notice-card-list'
import { utilCalcChangeRate } from '../util/util-calc-change-rate'
import { utilCalcPayDiff } from '../util/util-calc-pay-diff'

export default function NoticeCardItem() {
  const router = useRouter()

  const handleClickToDetail = (isClosed: boolean) => {
    if (isClosed) return
    router.push('/')
  }

  return (
    <UiNoticeCardList
      title={MOCK_DOMAIN.title}
      // filterElement={<div>순서/상세필터 컴포넌트</div>}
      // ref={first}
    >
      {MOCK_NOTICES.map((notice) => (
        <UiNoticeCardItem
          key={notice.name}
          {...notice}
          changeRate={utilCalcChangeRate(
            notice.hourlyPay,
            notice.originalHourlyPay,
          )}
          isShowChip={utilCalcPayDiff(
            notice.hourlyPay,
            notice.originalHourlyPay,
          )}
          handleClickToDetail={() => handleClickToDetail(notice.closed)}
        />
      ))}
    </UiNoticeCardList>
  )
}
