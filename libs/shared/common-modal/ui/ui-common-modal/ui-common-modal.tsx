'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiCommonModalProps } from '@/libs/shared/common-modal/type-common-modal'

import styles from './ui-common-modal.module.scss'

const cx = classNames.bind(styles)

export default function UiCommonModal({
  closeButtonSize = 32,
  children,
}: UiCommonModalProps) {
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
