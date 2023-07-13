import classNames from 'classnames/bind'

import Image from 'next/image'

import {
  ActiveBtn,
  ActiveOutlineBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { UiActionDialogProps } from '@/libs/shared/dialog/type-dialog'

import styles from './ui-action-dialog.module.scss'

const cx = classNames.bind(styles)

export default function UiActionDialog({
  text,
  cancelText,
  acceptText,
  onCancel,
  onAccept,
}: UiActionDialogProps) {
  return (
    <div className={cx('dialogContainer')}>
      <Image
        className={cx('checkImage')}
        src="/images/check-mark.svg"
        alt="check-mark"
        width={24}
        height={24}
      />
      <h3 className={cx('description')}>{text}</h3>
      <div className={cx('buttonContainer')}>
        <ActiveOutlineBtn
          text={cancelText}
          size="mediumSmall"
          onClick={onCancel}
        />
        <ActiveBtn text={acceptText} size="mediumSmall" onClick={onAccept} />
      </div>
    </div>
  )
}
