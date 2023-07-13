import React from 'react'

import classNames from 'classnames/bind'

import { BtnProps } from '@/libs/shared/click-btns/types/type-click-btn.'

import styles from './ui-click-btn.module.scss'

const cx = classNames.bind(styles)

function UiCommonClickBtn({
  text,
  outline,
  size,
  status,
  confirm,
  onClick,
}: BtnProps) {
  return (
    <button
      type="button"
      className={cx('button', {
        outline,
        confirm,
        [size]: size,
        [status]: status,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default UiCommonClickBtn
