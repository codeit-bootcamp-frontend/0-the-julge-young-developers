import classNames from 'classnames/bind'

import { BtnProps } from '@/libs/shared/click-btns/types/type-click-btn.'

import styles from './ui-click-btn.module.scss'

const cx = classNames.bind(styles)

function UiCommonClickBtn({
  text,
  type = 'button',
  outline,
  size,
  status,
  confirm,
  onClick,
  onSubmit,
}: BtnProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx('button', {
        outline,
        confirm,
        [size]: size,
        [status]: status,
      })}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  )
}

export default UiCommonClickBtn
