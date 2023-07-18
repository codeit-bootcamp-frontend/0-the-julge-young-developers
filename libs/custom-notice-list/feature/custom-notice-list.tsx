'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import getCustomDatas from '@/libs/custom-notice-list/data-access/get-custom-datas'
import { NoticeCardItemProps } from '@/libs/custom-notice-list/type-custom-notice-list'
import utilAutoplaySlider from '@/libs/custom-notice-list/utils/util-autoplay'
import UiNoticeCardItem from '@/libs/shared/notice-card/ui/ui-notice-card-item/ui-notice-card-item'
import { utilCalcChangeRate } from '@/libs/shared/notice-card/util/util-calc-change-rate'
import { utilCalcPayDiff } from '@/libs/shared/notice-card/util/util-calc-pay-diff'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './custom-notice-list.module.scss'

const cx = classNames.bind(styles)

export default function CustomNoticeList() {
  const router = useRouter()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [customDatas, setCustomDatas] = useState<NoticeCardItemProps[]>([])

  const handleAutoplaySlider = useCallback(() => {
    utilAutoplaySlider(sliderRef)
  }, [])

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleAutoplaySlider()
    }, 6000)

    return () => clearInterval(autoplayInterval)
  }, [handleAutoplaySlider])

  const handleClickToDetail = useCallback(
    (isClosed: boolean, shopId: string, noticeId: string) => {
      if (isClosed) return
      const userShopId = getCookie('shop_id') as string

      if (userShopId === shopId) {
        router.push(`/myshop/${noticeId}`)
      } else {
        router.push(`/${shopId}/${noticeId}`)
      }
    },
    [router],
  )

  useEffect(() => {
    const userId = getCookie('uid') as string

    const getDatas = async () => {
      const datas = await getCustomDatas(userId, handleClickToDetail)
      setCustomDatas(datas)
    }

    getDatas()
  }, [handleClickToDetail])

  return (
    <div className={cx('customListWrapper')}>
      <UiSimpleLayout title="맞춤 공고" gap={32}>
        <div className={cx('noticeCardWrapper')} ref={sliderRef}>
          {customDatas.map((notice) => (
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
        </div>
      </UiSimpleLayout>
    </div>
  )
}
