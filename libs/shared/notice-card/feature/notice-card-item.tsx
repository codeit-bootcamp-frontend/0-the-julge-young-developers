'use client'

import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { AllNoticesData } from '../../api/types/type-notice'
import { MOCK_DOMAIN } from '../data-access/data-access-mock'
import UiNoticeCardItem from '../ui/ui-notice-card-item/ui-notice-card-item'
import UiNoticeCardList from '../ui/ui-notice-card-list/ui-notice-card-list'
import { utilCalcChangeRate } from '../util/util-calc-change-rate'
import { utilCalcPayDiff } from '../util/util-calc-pay-diff'
import { utilFormatDuration } from '../util/util-format-duration'

export default function NoticeCardItem({
  data,
  filterElement,
}: {
  data: AllNoticesData[]
  filterElement?: React.ReactNode
}) {
  const router = useRouter()

  const handleClickToDetail = (
    isClosed: boolean,
    shopId: string,
    noticeId: string,
  ) => {
    if (isClosed) return
    const userShopId = getCookie('shop_id') as string

    if (userShopId === shopId) {
      router.push(`/my-shop/${noticeId}`)
    } else {
      router.push(`/${shopId}/${noticeId}`)
    }
  }

  const itemDatas = data.map((item) => ({
    name: item.shop.item.name,
    id: item.id,
    duration: utilFormatDuration(item.startsAt, item.workhour),
    workhour: item.workhour,
    address: item.shop.item.address1,
    hourlyPay: item.hourlyPay,
    originalHourlyPay: item.shop.item.originalHourlyPay,
    imageUrl: item.shop.item.imageUrl,
    closed: item.closed,
    shopId: item.shop.item.id,
    handleClickToDetail: () =>
      handleClickToDetail(item.closed, item.shop.item.id, item.id),
  }))

  return (
    <UiNoticeCardList
      // title prop은 변경 예정입니다.
      title={MOCK_DOMAIN.title}
      filterElement={filterElement}

      // ref={first}
    >
      {itemDatas.map((notice) => (
        <UiNoticeCardItem
          key={notice.id}
          {...notice}
          changeRate={utilCalcChangeRate(
            notice.hourlyPay,
            notice.originalHourlyPay,
          )}
          isShowChip={utilCalcPayDiff(
            notice.hourlyPay,
            notice.originalHourlyPay,
          )}
          handleClickToDetail={() =>
            handleClickToDetail(notice.closed, notice.shopId, notice.id)
          }
        />
      ))}
    </UiNoticeCardList>
  )
}
