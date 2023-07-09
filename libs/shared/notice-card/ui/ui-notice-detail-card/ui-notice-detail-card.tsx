/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Image from 'next/image'

import UiNoticeCardChip from '@/libs/shared/notice-card/ui/ui-notice-card-item/ui-notice-card-chip'
import { utilCalcChangeRate } from '@/libs/shared/notice-card/util/util-calc-change-rate'
import { utilCalcPayDiff } from '@/libs/shared/notice-card/util/util-calc-pay-diff'

import styles from './ui-notice-detail-card.module.scss'

const cx = classNames.bind(styles)

interface UiNoticeDetailCardProps {
  name: string
  imageUrl: string
  duration: string
  workhour: number
  address: string
  closed: boolean
  description: string
  hourlyPay: number
  originalHourlyPay: number
  children: React.ReactNode
}

export default function UiNoticeDetailCard({
  name,
  imageUrl,
  duration,
  workhour,
  address,
  closed,
  description,
  hourlyPay,
  originalHourlyPay,
  children,
}: UiNoticeDetailCardProps) {
  const isShowChip = utilCalcPayDiff(hourlyPay, originalHourlyPay)
  const changeRate = utilCalcChangeRate(hourlyPay, originalHourlyPay)
  return (
    <div className={cx('detailCardWrapper')}>
      <div className={cx('imgContainer')}>
        <img className={cx('img')} src={imageUrl} alt={name} />
        {closed && <div className={cx('closedLayer')}>마감 완료</div>}
      </div>
      <div className={cx('card')}>
        <h3 className={cx('title')}>시급</h3>
        <div className={cx('payContainer')}>
          <span className={cx('pay', { closed })}>{hourlyPay}</span>
          {changeRate && (
            <UiNoticeCardChip
              isShowChip={isShowChip}
              changeRate={changeRate}
              closed={closed}
            />
          )}
        </div>
        <div className={cx('durationContainer')}>
          <div className={cx('imgContainer', 'icon')}>
            <Image
              className={cx('img')}
              src={closed ? '/images/clock-disabled.svg' : '/images/clock.svg'}
              alt="clock"
            />
          </div>
          <p
            className={cx('duration', { closed })}
          >{`${duration} (${workhour}시간)`}</p>
        </div>
        <div className={cx('addressContainer')}>
          <div className={cx('imgContainer', 'icon')}>
            <Image
              className={cx('img')}
              src={
                closed
                  ? '/images/location-disabled.svg'
                  : '/images/location.svg'
              }
              alt="location"
            />
          </div>
          <p className={cx('address', { closed })}>{address}</p>
        </div>
        <p className={cx('description')}>{description}</p>
        {children}
      </div>
    </div>
  )
}
