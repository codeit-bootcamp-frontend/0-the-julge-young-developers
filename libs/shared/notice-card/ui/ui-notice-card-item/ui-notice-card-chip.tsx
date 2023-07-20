/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiNoticeCardChipProps } from '@/libs/shared/notice-card/type-notice-card'
import { chipText } from '@/libs/shared/notice-card/util/util-calc-chip-text'

import styles from './ui-notice-card-chip.module.scss'

const cx = classNames.bind(styles)

export default function UiNoticeCardChip({
  isCardItem,
  isShowChip,
  changeRate,
  closed,
}: UiNoticeCardChipProps) {
  let changeRateFlag = false
  if (changeRate && changeRate > 999) {
    changeRateFlag = true
  }
  return (
    <div
      className={cx('chipWrapper', {
        closed,
        red: !closed && isShowChip === 'red',
        orange: !closed && isShowChip === 'orange',
        isCardItem,
      })}
    >
      <span
        className={cx('chipText', {
          changeRateFlag,
        })}
      >
        {chipText(isShowChip, changeRate)}
      </span>
      <div className={cx('imgContainer')}>
        <Image
          className={cx('img')}
          src="/images/arrow-up-bold-white.svg"
          alt="arrow-upper"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}
