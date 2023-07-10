import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-action-modal.module.scss'

interface UiActionModalProps {
  description: string
  cancelText: string
  acceptText: string
}

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
        <button className={cx('cancelButton')} type="button">
          {cancelText}
        </button>
        <button className={cx('acceptButton')} type="button">
          {acceptText}
        </button>
      </div>
    </div>
  )
}
