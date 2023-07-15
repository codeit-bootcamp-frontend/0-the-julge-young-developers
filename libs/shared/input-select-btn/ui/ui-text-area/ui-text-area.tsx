import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import {
  InputProps,
  Valid,
} from '@/libs/shared/input-select-btn/types/type-input'

import styles from './ui-text-area.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiTextArea(
  {
    variant,
    title,
    defaultValue,
    valid,
    isValid,
    isRequired,
    onChange,
  }: Valid &
    Omit<InputProps, 'onChange'> & {
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    },
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <div className={cx('wrap')}>
      {variant === 'explain' && <div className={cx('title')}>{title}</div>}
      <textarea
        className={cx('textArea', {
          underline: variant === 'explain-underline',
        })}
        placeholder={variant === 'explain' ? '입력' : title}
        required={isRequired}
        ref={ref}
        defaultValue={defaultValue}
        onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
      />
      {isValid && <div className={cx('validText')}>{valid}</div>}
    </div>
  )
})
