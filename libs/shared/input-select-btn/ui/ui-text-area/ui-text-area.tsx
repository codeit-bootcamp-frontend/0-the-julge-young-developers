import React from 'react'

import classNames from 'classnames/bind'

import styles from './ui-text-area.module.scss'

const cx = classNames.bind(styles)

export default function UiTextArea({
  title,
  valid,
  isValid,
  isRequired,
}: Valid & InputRequiredProps) {
  return (
    <div className={cx('wrap')}>
      <div className={cx('title')}>{title}</div>
      <textarea
        className={cx('textArea')}
        placeholder="입력"
        required={isRequired}
      />
      {isValid && <div className={cx('validText')}>{valid}</div>}
    </div>
  )
}
