'use client'

import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import { UiSelectTopShellProps } from '@/libs/shared/input-select-btn/types/type-select'

import styles from './ui-select-top-shell.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiSelectTopShell(
  { variant, isRequired, onChangeInput, selectedOption }: UiSelectTopShellProps,
  ref: ForwardedRef<HTMLInputElement | HTMLDivElement>,
) {
  return variant === 'search' ? (
    <input
      className={cx('inputBox')}
      required={isRequired}
      onChange={onChangeInput}
      value={selectedOption}
      placeholder="선택"
      ref={ref as ForwardedRef<HTMLInputElement>}
    />
  ) : (
    <div className={cx('button')} ref={ref as ForwardedRef<HTMLDivElement>}>
      {selectedOption}
    </div>
  )
})
