'use client'

import { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import { UiNoticeCardListProps } from '@/libs/shared/notice-card/type-notice-card'

import styles from './ui-notice-card-list.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiNoticeCardList(
  { isHome, title, filterElement, children }: UiNoticeCardListProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div className={cx('wrapper')}>
      {(title || filterElement) && (
        <div
          className={cx('titleHeader', {
            isHome,
          })}
        >
          {title && <h2 className={cx('title')}>{title}</h2>}
          {filterElement && (
            <div className={cx('filterElementWrapper')}>{filterElement}</div>
          )}
        </div>
      )}
      <div className={cx('listWrapper')} ref={ref}>
        {children}
      </div>
    </div>
  )
})
