/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import Image from 'next/image'

import { chipText } from '@/libs/shared/notice-card/util/util-calc-chip-text'
import { CardChips } from '@/libs/shared/notice-card/util/util-calc-pay-diff'

import styles from './ui-notice-card-chip.module.scss'

const cx = classNames.bind(styles)

interface UiNoticeCardChipProps {
  isShowChip: CardChips
  changeRate: undefined | number
  closed: boolean
}

export default function UiNoticeCardChip({
  isShowChip,
  changeRate,
  closed,
}: UiNoticeCardChipProps) {
  return (
    <div
      className={cx('chipWrapper', {
        closed,
        red: !closed && isShowChip === 'red',
        orange: !closed && isShowChip === 'orange',
      })}
    >
      <span className={cx('chipText')}>{chipText(isShowChip, changeRate)}</span>
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
