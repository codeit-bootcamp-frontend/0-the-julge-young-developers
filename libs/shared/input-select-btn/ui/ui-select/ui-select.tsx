'use client'

import classNames from 'classnames/bind'

import {
  Options,
  UiSearchSelectProps,
} from '@/libs/shared/input-select-btn/types/type-select'

import styles from './ui-select.module.scss'

const cx = classNames.bind(styles)

export default function UiSearchSelect({
  variant,
  title,
  isOpen = false,
  dropdownRef,
  toggleDropdown,
  onClickOptionSelect,
  options,
  children,
}: UiSearchSelectProps & Options) {
  return (
    <div className={cx('selectWrap')} ref={dropdownRef}>
      <div className={cx('title')}>{title}</div>
      <button type="button" className={cx('select')} onClick={toggleDropdown}>
        {children}
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
                    className={cx('optionButton', { [variant]: variant })}
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
}
