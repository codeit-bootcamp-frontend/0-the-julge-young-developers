'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import getCustomDatas from '@/libs/custom-notice-list/data-access/get-custom-datas'
import { NoticeCardItemProps } from '@/libs/custom-notice-list/type-custom-notice-list'
import utilAutoplaySlider from '@/libs/custom-notice-list/utils/util-autoplay'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import DomainNotTitleLoader from '@/libs/shared/loading/feature/domain-not-title-loader'
import UiNoticeCardItem from '@/libs/shared/notice-card/ui/ui-notice-card-item/ui-notice-card-item'
import { utilCalcChangeRate } from '@/libs/shared/notice-card/util/util-calc-change-rate'
import { utilCalcPayDiff } from '@/libs/shared/notice-card/util/util-calc-pay-diff'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './custom-notice-list.module.scss'

const cx = classNames.bind(styles)

export default function CustomNoticeList() {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const sliderRef = useRef<HTMLDivElement>(null)
  const [customDatas, setCustomDatas] = useState<NoticeCardItemProps[]>([])

  const [openClientLoader, setOpenClientLoader] = useState<boolean>(true)
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleStopLoader = () => {
    setOpenClientLoader(false)
  }

  const handleClickShowErrorDialog = (text: string) => {
    setErrorMessage(text)
    setOpenErrorDialog(true)
  }

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
      const userShopId = getCookie('sid') as string

      if (userShopId === shopId) {
        router.push(`/myshop/${noticeId}`)
      } else {
        router.push(`/detail/${shopId}/${noticeId}`)
      }
    },
    [router],
  )

  useEffect(() => {
    const userId = getCookie('uid') as string

    const getDatas = async () => {
      // setOpenClientLoader(true)
      const datas = await getCustomDatas(
        userId,
        handleClickToDetail,
        handleClickShowErrorDialog,
        handleStopLoader,
      )
      setOpenClientLoader(false)
      setCustomDatas(datas)
    }

    getDatas()
  }, [handleClickToDetail])

  return (
    <div className={cx('customListWrapper')}>
      <UiSimpleLayout title="맞춤 공고" gap={32} titleSize={isMobile ? 20 : 28}>
        {errorMessage && (
          <button
            className={cx('errorBtn')}
            type="button"
            onClick={() => {
              window.location.href = '/'
            }}
          >
            새로 고침하기
          </button>
        )}
        {openClientLoader && <DomainNotTitleLoader />}
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
        {openErrorDialog && (
          <ConfirmDialog
            text={errorMessage || '요청에 실패했습니다.'}
            onConfirm={() => setOpenErrorDialog(false)}
          />
        )}
      </UiSimpleLayout>
    </div>
  )
}
