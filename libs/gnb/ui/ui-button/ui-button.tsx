import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-button.module.scss'

const cx = classNames.bind(styles)

interface Props {
  name?: string
  activeStatus?: string
  handleClickButton: () => void
}

export default function UiButton({
  name,
  activeStatus,
  handleClickButton,
}: Props) {
  return (
    <button type="button" onClick={handleClickButton} className={cx('button')}>
      {name || (
        <Image
          src={`/images/notification-${activeStatus}.svg`}
          alt="notification"
          width={20}
          height={20}
        />
      )}
    </button>
  )
}
