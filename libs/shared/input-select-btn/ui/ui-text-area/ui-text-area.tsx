import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import {
  InputProps,
  Valid,
} from '@/libs/shared/input-select-btn/types/type-input'

import styles from './ui-text-area.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiTextArea(
  { title, valid, isValid, isRequired }: Valid & InputProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <div className={cx('wrap')}>
      <div className={cx('title')}>{title}</div>
      <textarea
        className={cx('textArea')}
        placeholder="입력"
        required={isRequired}
        ref={ref}
      />
      {isValid && <div className={cx('validText')}>{valid}</div>}
    </div>
  )
})
