import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-selected-chip.module.scss'

interface UiSelectedChipProps {
  children: string
}

const cx = classNames.bind(styles)

export default function UiSelectedChip({ children }: UiSelectedChipProps) {
  return (
    <button className={cx('selectedChip')} type="button">
      {children}
      <Image src="/images/close-red.svg" alt="해제" width={16} height={16} />
    </button>
  )
}
