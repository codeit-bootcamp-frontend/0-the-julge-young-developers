import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-badge.module.scss'

interface UiBadgeProps {
  children: string
}

const cx = classNames.bind(styles)

export default function UiBadge({ children }: UiBadgeProps) {
  return (
    <button className={cx('badge')} type="button">
      {children}
      <Image src="/images/close-red.svg" alt="해제" width={16} height={16} />
    </button>
  )
}
