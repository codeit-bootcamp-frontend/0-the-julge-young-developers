'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'

import {
  CommonActiveBtn,
  CommonActiveOutlineBtn,
} from '@/libs/shared/common-click-btn/feature/common-btn'

import styles from './ui-action-modal.module.scss'

const cx = classNames.bind(styles)

export default function UiActionModal({
  description,
  cancelText,
  acceptText,
}: UiActionModalProps) {
  return (
    <div className={cx('modalContainer')}>
      <Image
        className={cx('checkImage')}
        src="/images/check-mark.svg"
        alt="check-mark"
        width={24}
        height={24}
      />
      <h3 className={cx('description')}>{description}</h3>
      <div className={cx('buttonContainer')}>
        <CommonActiveOutlineBtn
          text={cancelText}
          size="mediumSmall"
          onClick={() => {
            console.log('버튼 눌림')
          }}
        />
        <CommonActiveBtn
          text={acceptText}
          size="mediumSmall"
          onClick={() => {
            console.log('버튼 눌림')
          }}
        />
      </div>
    </div>
  )
}
