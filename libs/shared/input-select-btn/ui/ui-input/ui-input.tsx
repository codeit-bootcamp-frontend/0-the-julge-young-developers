import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import {
  InputProps,
  Valid,
} from '@/libs/shared/input-select-btn/types/type-input'

import styles from './ui-input.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiInput(
  {
    variant,
    title,
    isPassowrd,
    defaultValue,
    valid,
    isValid,
    suffix,
    onChange,
  }: Valid &
    Omit<InputProps, 'onChange'> & {
      onChange: (e: ChangeEvent<HTMLInputElement>) => void
    },
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={cx('wrap')}>
      {variant === 'input' && <div className={cx('title')}>{title}</div>}
      <div className={cx('inputWrap')}>
        <input
          onChange={onChange}
          className={cx('inputBox', {
            underline: variant === 'input-underline',
          })}
          type={isPassowrd ? 'password' : 'text'}
          placeholder={variant === 'input' ? '입력' : title}
          ref={ref}
          defaultValue={defaultValue}
        />
        {suffix && <span className={cx('suffix')}>{suffix}</span>}
      </div>
      {isValid && <div className={cx('validText')}>{valid}</div>}
    </div>
  )
})
