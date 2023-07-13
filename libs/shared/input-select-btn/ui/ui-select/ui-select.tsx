import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import Image from 'next/image'

import { InputProps } from '@/libs/shared/input-select-btn/types/type-input'
import { Options } from '@/libs/shared/input-select-btn/types/type-select'

import styles from './ui-select.module.scss'

const cx = classNames.bind(styles)

interface UiSelectProps {
  isOpen: boolean
  selectedOption: string
  dropdownRef: ForwardedRef<HTMLDivElement>
  toggleDropdown: () => void
  onClickOptionSelect: (value: string) => void
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default forwardRef(function UiSelect(
  {
    title,
    isRequired = false,
    isOpen = false,
    selectedOption,
    dropdownRef,
    toggleDropdown,
    onClickOptionSelect,
    onChangeInput,
    options,
  }: UiSelectProps & Options & InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div className={cx('selectWrap')} ref={dropdownRef}>
      <div className={cx('title')}>{title}</div>
      <button type="button" className={cx('select')} onClick={toggleDropdown}>
        <input
          className={cx('inputBox')}
          required={isRequired}
          onChange={onChangeInput}
          value={selectedOption}
          placeholder="선택"
          ref={ref}
        />
        <Image
          src={isOpen ? '/images/dropdown-up.svg' : '/images/dropdown.svg'}
          className={cx('img')}
          alt="dropdown icon"
          width={16}
          height={16}
        />
      </button>
      <div className={cx('optionsWrap')}>
        <div className={cx('options')}>
          {isOpen && (
            <ul className={cx('optionsUl')}>
              {options.map((option) => (
                <li key={option.value} className={cx('option')}>
                  <button
                    type="button"
                    onClick={() => onClickOptionSelect(option.value)}
                    className={cx('optionButton')}
                  >
                    {option.value}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
})
