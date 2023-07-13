'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'
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
      <ActiveOutlineBtn
        text={confirmText}
        size="mediumSmall"
        onClick={onConfirm}
      />
    </div>
  )
}
