'use client'

/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  const isShowChip = utilCalcPayDiff(hourlyPay, originalHourlyPay)
  const changeRate = utilCalcChangeRate(hourlyPay, originalHourlyPay)

  const handleClickToDetail = () => {
    if (closed) return
    // eslint-disable-next-line no-warning-comments
    // TODO: api 적용 후 상세 페이지로 이동
    router.push('/')
  }

  return (
    <div
      role="presentation"
      className={cx('cardWrapper', { closed })}
      onClick={handleClickToDetail}
    >
      <div className={cx('imgContainer', 'header')}>
        <img className={cx('img')} src={imageUrl} alt={name} />
        {closed && (
          <div className={cx('closedLayer')}>
            <span className={cx('closedText')}>마감 완료</span>
          </div>
        )}
      </div>
      <section className={cx('cardSection')}>
        <div className={cx('sectionContent')}>
          <h3 className={cx('title', { closed })}>{name}</h3>
          <div className={cx('durationContainer')}>
            <div className={cx('imgContainer', 'icon')}>
              <Image
                className={cx('img')}
                src={
                  closed ? '/images/clock-disabled.svg' : '/images/clock.svg'
                }
                alt="clock"
                width={20}
                height={20}
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
                width={20}
                height={20}
              />
            </div>
            <p className={cx('address', { closed })}>{address}</p>
          </div>
        </div>
        <div className={cx('payContainer')}>
          <span
            className={cx('pay', { closed })}
          >{`${hourlyPay.toLocaleString()}원`}</span>
          {changeRate && (
            <UiNoticeCardChip
              isShowChip={isShowChip}
              changeRate={changeRate}
              closed={closed}
            />
          )}
        </div>
      </section>
    </div>
  )
}
