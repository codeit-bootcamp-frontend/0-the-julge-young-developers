/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Image from 'next/image'

import { CardChips } from '@/libs/shared/notice-card/util/util-calc-pay-diff'

import UiNoticeCardChip from './ui-notice-card-chip'
import styles from './ui-notice-card-item.module.scss'

const cx = classNames.bind(styles)

interface UiNoticeCardItemProps {
  name: string
  duration: string
  workhour: number
  address: string
  hourlyPay: number
  imageUrl: string
  closed: boolean
  changeRate: undefined | number
  isShowChip: CardChips
  handleClickToDetail: () => void
}

export default function UiNoticeCardItem({
  name,
  duration,
  workhour,
  address,
  hourlyPay,
  imageUrl,
  closed,
  changeRate,
  isShowChip,
  handleClickToDetail,
}: UiNoticeCardItemProps) {
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