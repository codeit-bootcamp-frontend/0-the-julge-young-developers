import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-button.module.scss'

const cx = classNames.bind(styles)

export default function UiButton({
  name,
  id,
  activeStatus,
  handleClickButton,
}: ButtonProps) {
  const handleClickMovePage = () => {
    handleClickButton(id as string)
  }

  const handleClickOpenModal = () => {
    handleClickButton()
  }

  return (
    <button
      type="button"
      onClick={name ? handleClickMovePage : handleClickOpenModal}
      className={cx('button')}
    >
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
