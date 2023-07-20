'use client'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import styles from '@/libs/shared/notice-card/feature/notice-card-item.module.scss'

import { AllNoticesData } from '../../api/types/type-notice'
import UiNoticeCardItem from '../ui/ui-notice-card-item/ui-notice-card-item'
import UiNoticeCardList from '../ui/ui-notice-card-list/ui-notice-card-list'
import { utilCalcChangeRate } from '../util/util-calc-change-rate'
import { utilCalcPayDiff } from '../util/util-calc-pay-diff'
import { utilFormatDuration } from '../util/util-format-duration'

const cx = classNames.bind(styles)

export default function NoticeCardItem({
  isHome,
  title,
  data,
  filterElement,
}: {
  isHome?: boolean
  title?: string
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
    const userShopId = getCookie('sid') as string

    if (userShopId === shopId) {
      router.push(`/my-shop/${noticeId}`)
    } else {
      router.push(`/${shopId}/${noticeId}`)
    }
  }

  const itemDatas = data.map((item) => ({
    name: item.shop?.item.name,
    id: item.id,
    duration: utilFormatDuration(item.startsAt, item.workhour),
    workhour: item.workhour,
    address: item.shop?.item.address1,
    hourlyPay: item.hourlyPay,
    originalHourlyPay: item.shop?.item.originalHourlyPay,
    imageUrl: item.shop?.item.imageUrl,
    closed: item.closed,
    shopId: item.shop.item.id,
    handleClickToDetail: () =>
      handleClickToDetail(item.closed, item.shop.item.id, item.id),
  }))

  return (
    <UiNoticeCardList
      isHome={isHome}
      title={title}
      filterElement={filterElement}
    >
      {itemDatas.length === 0 && (
        <div className={cx('blankWrapper')}>공고 목록이 존재하지 않아요.</div>
      )}
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
          onClickToDetail={() =>
            handleClickToDetail(notice.closed, notice.shopId, notice.id)
          }
        />
      ))}
    </UiNoticeCardList>
  )
}
