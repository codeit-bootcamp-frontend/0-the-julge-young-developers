'use client'

import { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import styles from './ui-notice-card-list.module.scss'

const cx = classNames.bind(styles)

interface UiNoticeCardListProps {
  title: string
  filterElement?: React.ReactNode
  children: React.ReactNode
}

export default forwardRef(function UiNoticeCardList(
  { title, filterElement, children }: UiNoticeCardListProps,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('titleHeader')}>
        <h2 className={cx('title')}>{title}</h2>
        {filterElement}
      </div>
      <div className={cx('listWrapper')} ref={ref}>
        {children}
      </div>
    </div>
  )
})
