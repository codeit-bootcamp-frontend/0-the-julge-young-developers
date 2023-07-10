import React, { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-select.module.scss'

const cx = classNames.bind(styles)

interface UiSelectProps {
  isOpen: boolean
  selectedOption: string
  toggleDropdown: () => void
  handleOptionSelect: (value: string) => void
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type UiSelectAllProps = UiSelectProps & Options & InputRequiredProps

export default forwardRef(function UiSelect(
  {
    title,
    isOpen,
    selectedOption,
    toggleDropdown,
    handleOptionSelect,
    handleInputChange,
    options,
    isRequired,
  }: UiSelectAllProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div className={cx('selectWrap')} ref={ref}>
      <div className={cx('title')}>{title}</div>
      <button type="button" className={cx('select')}>
        <input
          className={cx('inputBox')}
          required={isRequired}
          onChange={handleInputChange}
          onClick={toggleDropdown}
          value={selectedOption}
          placeholder="선택"
        />
        <Image
          src={isOpen ? '/images/dropdown-up.svg' : '/images/dropdown.svg'}
          className={cx('img')}
          alt="dropdown icon"
          width={16}
          height={16}
        />
      </button>
      {isOpen && (
        <ul className={cx('options')}>
          {options.map((option) => (
            <li key={option.value} className={cx('option')}>
              <button
                type="button"
                onClick={() => handleOptionSelect(option.value)}
                className={cx('optionButton')}
              >
                {option.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})
