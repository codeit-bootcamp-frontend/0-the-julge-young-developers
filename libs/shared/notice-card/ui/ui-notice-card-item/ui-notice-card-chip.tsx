/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames/bind'

import { CardChips } from '@/libs/shared/notice-card/util/util-calc-pay-diff'

import styles from './ui-notice-card-item.module.scss'

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
  const chipText = () => {
    if (isShowChip === 'red' || isShowChip === 'orange') {
      return `기존 시급보다 ${changeRate}%`
    }
  }

  return (
    <div className={cx('chipWrapper')}>
      <span className={cx('chipText', { closed })}>{chipText()}</span>
      <div className={cx('imgContainer')}>
        <img
          className={cx('img')}
          src={
            closed
              ? '/images/arrow-up-bold-gray.svg'
              : '/images/arrow-up-bold-white.svg'
          }
          alt="arrow-upper"
        />
      </div>
    </div>
  )
}
