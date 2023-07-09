/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Image from 'next/image'

import { utilCalcChangeRate } from '@/libs/shared/notice-card/util/util-calc-change-rate'
import { utilCalcPayDiff } from '@/libs/shared/notice-card/util/util-calc-pay-diff'

import UiNoticeCardChip from './ui-notice-card-chip'
import styles from './ui-notice-card-item.module.scss'

const cx = classNames.bind(styles)

interface UiNoticeCardItemProps {
  name: string
  duration: string
  workhour: number
  address: string
  hourlyPay: number
  originalHourlyPay: number
  imageUrl: string
  closed: boolean
}

export default function UiNoticeCardItem({
  name,
  duration,
  workhour,
  address,
  hourlyPay,
  originalHourlyPay,
  imageUrl,
  closed,
}: UiNoticeCardItemProps) {
  const isShowChip = utilCalcPayDiff(hourlyPay, originalHourlyPay)
  const changeRate = utilCalcChangeRate(hourlyPay, originalHourlyPay)

  return (
    <div className={cx('cardWrapper', { closed })}>
      <div className={cx('imgContainer', 'header')}>
        <Image className={cx('img')} src={imageUrl} alt={name} />
        {closed && <div className={cx('closedLayer')}>마감 완료</div>}
      </div>
      <h3 className={cx('title', { closed })}>{name}</h3>
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
              closed ? '/images/location-disabled.svg' : '/images/location.svg'
            }
            alt="location"
          />
        </div>
        <p className={cx('address', { closed })}>{address}</p>
      </div>
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
    </div>
  )
}
