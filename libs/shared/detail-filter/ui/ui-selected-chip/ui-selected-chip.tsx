import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-selected-chip.module.scss'

const cx = classNames.bind(styles)

export default function UiSelectedChip({
  onCancel,
  children,
}: {
  onCancel: (location: string) => void
  children: string
}) {
  return (
    <button
      className={cx('selectedChip')}
      type="button"
      onClick={() => onCancel(children)}
    >
      {children}
      <Image
        src="/images/close-red.svg"
        alt="선택 취소"
        width={16}
        height={16}
      />
    </button>
  )
}
