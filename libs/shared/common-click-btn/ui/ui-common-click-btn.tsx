import React from 'react'

import classNames from 'classnames/bind'

import styles from './ui-common-click-btn.module.scss'

const cx = classNames.bind(styles)

function UiCommonClickBtn({
  text,
  outline,
  size,
  status,
  onClick,
}: CommonBtnProps) {
  return (
    <button
      type="button"
      className={cx('button', { outline, [size]: size, [status]: status })}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default UiCommonClickBtn