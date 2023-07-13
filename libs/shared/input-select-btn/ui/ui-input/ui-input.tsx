import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import {
  InputProps,
  Valid,
} from '@/libs/shared/input-select-btn/types/type-input'

import styles from './ui-input.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiInput(
  { title, defaultValue, valid, isValid, suffix, onChange }: Valid & InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={cx('wrap')}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('inputWrap')}>
        <input
          onChange={onChange}
          className={cx('inputBox')}
          type="text"
          placeholder="입력"
          ref={ref}
          defaultValue={defaultValue}
        />
        {suffix && <span className={cx('suffix')}>{suffix}</span>}
      </div>
      {isValid && <div className={cx('validText')}>{valid}</div>}
    </div>
  )
})
