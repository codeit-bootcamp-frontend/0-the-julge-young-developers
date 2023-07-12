'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { CommonActiveOutlineBtn } from '@/libs/shared/common-click-btn/feature/common-btn'
import { UiConfirmDialogProps } from '@/libs/shared/dialog/type-dialog'

import styles from './ui-confirm-dialog.module.scss'

const cx = classNames.bind(styles)

export default function UiConfirmDialog({
  text,
  confirmText,
  onConfirm,
}: UiConfirmDialogProps) {
  return (
    <div className={cx('dialogContainer')}>
      <Image
        className={cx('exclamationImage')}
        src="/images/exclamation-mark.svg"
        alt="exclamation-mark"
        width={24}
        height={24}
      />
      <h3 className={cx('description')}>{text}</h3>
      <CommonActiveOutlineBtn
        text={confirmText}
        size="mediumSmall"
        onClick={onConfirm}
      />
    </div>
  )
}
