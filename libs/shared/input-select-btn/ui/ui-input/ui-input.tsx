import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import styles from './ui-input.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiInput(
  { title, valid, isValid, suffix }: Valid & InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={cx('wrap')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('inputWrap')}>
        <input
          className={cx('inputBox')}
          type="text"
          placeholder="입력"
          ref={ref}
        />
        {suffix && <span className={cx('suffix')}>{suffix}</span>}
      </div>
      {isValid && <div className={cx('validText')}>{valid}</div>}
    </div>
  )
})
