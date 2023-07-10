import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-confirm-modal.module.scss'

interface UiConfirmModalProps {
  description: string
  confirmText: string
}

const cx = classNames.bind(styles)

export default function UiConfirmModal({
  description,
  confirmText,
}: UiConfirmModalProps) {
  return (
    <div className={cx('modalContainer')}>
      <Image
        className={cx('exclamationImage')}
        src="/images/exclamation-mark.svg"
        alt="exclamation-mark"
        width={24}
        height={24}
      />
      <h3 className={cx('description')}>{description}</h3>
      <button className={cx('confirmButton')} type="button">
        {confirmText}
      </button>
    </div>
  )
}
