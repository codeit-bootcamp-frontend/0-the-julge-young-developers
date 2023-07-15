'use client'

import { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import { UiNoticeCardListProps } from '@/libs/shared/notice-card/type-notice-card'

import styles from './ui-notice-card-list.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiNoticeCardList(
  { title, filterElement, children }: UiNoticeCardListProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('titleHeader')}>
        <h2 className={cx('title')}>{title}</h2>
        <div className={cx('filterElementWrapper')}>{filterElement}</div>
      </div>
      <div className={cx('listWrapper')} ref={ref}>
        {children}
      </div>
    </div>
  )
})
