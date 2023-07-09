import React from 'react'

import classNames from 'classnames/bind'

import styles from './ui-input.module.scss'

const cx = classNames.bind(styles)

export default function UiInput({
  title,
  valid,
  isValid,
}: {
  title: string
  valid: string
  isValid: boolean
}) {
  return (
    <div className={cx('inputWrap')}>
      <div className={cx('title')}>{title}</div>
      <input className={cx('inputBox')} type="text" placeholder="입력" />
      <div className={cx('validText', { isValid })}>{valid}</div>
    </div>
  )
}
