'use client'

import classnames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-common-modal.module.scss'

interface UiCommonModalProps {
  padding?: string | number
  borderRadius?: number
  backgroundColor?: 'White' | 'Gray'
  closeButtonSize?: number
  children: React.ReactNode
}

const cx = classnames.bind(styles)

export default function UiCommonModal({
  padding = 0,
  borderRadius = 0,
  backgroundColor = 'Gray',
  closeButtonSize = 32,
  children,
}: UiCommonModalProps) {
  const handleCloseModal = () => {
    console.log('close')
  }

  return (
    <div
      className={cx(`background${backgroundColor}`)}
      style={{ padding, borderRadius }}
    >
      <div className={cx('modalContainer')}>
        <button
          className={cx('close')}
          type="button"
          onClick={handleCloseModal}
        >
          <Image
            src="/images/close.svg"
            width={closeButtonSize}
            height={closeButtonSize}
            alt="닫기"
          />
        </button>
        {children}
      </div>
    </div>
  )
}
