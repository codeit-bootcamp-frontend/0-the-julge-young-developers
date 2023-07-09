'use client'

import classnames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-common-modal.module.scss'

interface UiCommonModalProps {
  children: React.ReactNode
}

const cx = classnames.bind(styles)

export default function UiCommonModal({ children }: UiCommonModalProps) {
  const handleCloseModal = () => {
    console.log('close')
  }

  return (
    <div className={cx('backgroundGray')}>
      <div className={cx('modalContainer')}>
        <button
          className={cx('close')}
          type="button"
          onClick={handleCloseModal}
        >
          <Image src="/images/close.svg" width={32} height={32} alt="닫기" />
        </button>
        {children}
      </div>
    </div>
  )
}
