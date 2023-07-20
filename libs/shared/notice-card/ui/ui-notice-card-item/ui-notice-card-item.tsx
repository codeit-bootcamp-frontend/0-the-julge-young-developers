/* eslint-disable @next/next/no-img-element */
import { SyntheticEvent } from 'react'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiNoticeCardItemProps } from '@/libs/shared/notice-card/type-notice-card'
import { chipText } from '@/libs/shared/notice-card/util/util-calc-chip-text'

import UiNoticeCardChip from './ui-notice-card-chip'
import styles from './ui-notice-card-item.module.scss'

const cx = classNames.bind(styles)

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
  onClickToDetail,
}: UiNoticeCardItemProps) {
  let hourlyPayFlag = false
  if (hourlyPay > 999999) {
    hourlyPayFlag = true
  }

  const rate = chipText(isShowChip, changeRate)

  const hoverText = rate
    ? `${hourlyPay.toLocaleString()}원 : ${rate}`
    : `${hourlyPay.toLocaleString()}원`

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/images/default-img.svg'
  }

  return (
    <div
      role="presentation"
      className={cx('cardWrapper', { closed })}
      onClick={onClickToDetail}
    >
      <div className={cx('imgContainer', 'header')}>
        <img
          className={cx('img')}
          src={imageUrl || '/images/default-img.svg'}
          alt={name}
          onError={handleImgError}
        />
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
          <div className={cx('hoverPay')}>{hoverText}</div>
          <span
            className={cx('pay', { closed, hourlyPayFlag })}
          >{`${hourlyPay.toLocaleString()}원`}</span>
          {changeRate && changeRate !== Infinity && (
            <UiNoticeCardChip
              isCardItem={true}
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
