'use client'

import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiSelectTopShellProps } from '@/libs/shared/input-select-btn/types/type-select'

import styles from './ui-select-top-shell.module.scss'

const cx = classNames.bind(styles)

function UiSelectTopShell(
  {
    variant,
    isRequired,
    onChangeInput,
    selectedOption,
    isOpen = false,
  }: UiSelectTopShellProps,
  ref: ForwardedRef<HTMLInputElement | HTMLDivElement>,
) {
  return (
    <div>
      {variant === 'search' ? (
        <div className={cx('selectTopShellWrap')}>
          <input
            className={cx('inputBox')}
            required={isRequired}
            onChange={onChangeInput}
            value={selectedOption}
            placeholder="선택"
            ref={ref as ForwardedRef<HTMLInputElement>}
          />
          <Image
            src={isOpen ? '/images/dropdown-up.svg' : '/images/dropdown.svg'}
            className={cx('img', { [variant]: variant })}
            alt="dropdown icon"
            width={16}
            height={16}
          />
        </div>
      ) : (
        <div className={cx('button')} ref={ref as ForwardedRef<HTMLDivElement>}>
          {selectedOption}
          <Image
            src={isOpen ? '/images/dropdown-up.svg' : '/images/dropdown.svg'}
            className={cx('img', { [variant]: variant })}
            alt="dropdown icon"
            width={10}
            height={10}
          />
        </div>
      )}
    </div>
  )
}

export default forwardRef(UiSelectTopShell)
