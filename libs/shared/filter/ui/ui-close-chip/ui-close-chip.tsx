import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-close-chip.module.scss'

interface UiCloseChipProps {
  children: string
}

const cx = classNames.bind(styles)

export default function UiCloseChip({ children }: UiCloseChipProps) {
  return (
    <button className={cx('closeChip')} type="button">
      {children}
      <Image src="/images/close-red.svg" alt="해제" width={16} height={16} />
    </button>
  )
}
