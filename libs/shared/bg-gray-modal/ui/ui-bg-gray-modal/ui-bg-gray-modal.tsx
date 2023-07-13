'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiBgGrayModalProps } from '@/libs/shared/bg-gray-modal/type-bg-gray-modal'

import styles from './ui-bg-gray-modal.module.scss'

const cx = classNames.bind(styles)

export default function UiBgGrayModal({
  closeButtonSize = 32,
  children,
}: UiBgGrayModalProps) {
  const handleCloseModal = () => {
    console.log('close')
  }

  return (
    <div className={cx('bgGray')}>
      <div className={cx('modalContent')}>
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
