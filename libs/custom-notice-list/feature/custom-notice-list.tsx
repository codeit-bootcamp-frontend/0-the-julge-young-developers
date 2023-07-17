'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'

import { useRouter } from 'next/navigation'

import { NoticeCardItemProps } from '@/libs/custom-notice-list/type-custom-notice-list'
import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import UiNoticeCardItem from '@/libs/shared/notice-card/ui/ui-notice-card-item/ui-notice-card-item'
import { utilCalcChangeRate } from '@/libs/shared/notice-card/util/util-calc-change-rate'
import { utilCalcPayDiff } from '@/libs/shared/notice-card/util/util-calc-pay-diff'
import { utilFormatDuration } from '@/libs/shared/notice-card/util/util-format-duration'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './custom-notice-list.module.scss'

const cx = classNames.bind(styles)

export default function UiCustomNoticeList() {
  const router = useRouter()
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [datas, setDatas] = useState<NoticeCardItemProps[]>([])

  const handleAutoplaySlider = useCallback(() => {
    if (sliderRef.current) {
      const sliderWrapper = sliderRef.current
      const { scrollLeft } = sliderWrapper

      const totalWidth = sliderWrapper.scrollWidth
      const firstCardWidth =
        sliderWrapper.children[0]?.getBoundingClientRect().width
      const cardWidth =
        window.innerWidth > 768 ? firstCardWidth + 14 : firstCardWidth + 4

      let nextScrollLeft = scrollLeft + cardWidth

      if (nextScrollLeft > totalWidth - cardWidth * 2) {
        nextScrollLeft = 0
      }

      sliderWrapper.scrollTo({
        left: nextScrollLeft,
        behavior: 'smooth',
      })
    }
  }, [])

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleAutoplaySlider()
    }, 6000)

    return () => clearInterval(autoplayInterval)
  }, [handleAutoplaySlider])

  const handleClickToDetail = useCallback(
    (isClosed: boolean) => {
      if (isClosed) return
      router.push('/')
    },
    [router],
  )

  useEffect(() => {
    // 1. 로그인 여부를 확인하고
    // 2. 로그인이 되어 있다면 유저 타입을 확인하여
    // 2-1. 사장이면 본인 가게 address 기준으로 데이터 뽑아오고
    // 2-2. 알바면 유저 정보에 있는 선호지역 기준으로 데이터 뽑아오는 로직이 추가되어야 함
    // 3-1. 로그인이 되어 있지 않으면 전체 데이터를 가져와서 렌더링
    // 4. 일단은 전체 데이터를 뽑아오는 로직으로 대체

    const getData = async () => {
      const response = await getNotices({})
      if (response instanceof Error) {
        // 알 수 없는 에러 처리
      } else if (typeof response === 'string') {
        // 에러 메시지에 맞게 처리
      } else {
        const { items } = response
        const itemsArray = items.map((item) => item.item)
        const itemDatas = itemsArray.map((item) => ({
          name: item.shop.item.name,
          id: item.id,
          duration: utilFormatDuration(item.startsAt, item.workhour),
          workhour: item.workhour,
          address: item.shop.item.address1,
          hourlyPay: item.hourlyPay,
          originalHourlyPay: item.shop.item.originalHourlyPay,
          imageUrl: item.shop.item.imageUrl,
          closed: item.closed,
          handleClickToDetail: () => handleClickToDetail(item.closed),
        }))
        setDatas(itemDatas)
      }
    }
    getData()
    return undefined
  }, [handleClickToDetail])

  return (
    <div className={cx('customListWrapper')}>
      <UiSimpleLayout title="맞춤 공고" gap={32}>
        <div className={cx('noticeCardWrapper')} ref={sliderRef}>
          {datas.map((notice) => (
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
              handleClickToDetail={() => handleClickToDetail(notice.closed)}
            />
          ))}
        </div>
      </UiSimpleLayout>
    </div>
  )
}
