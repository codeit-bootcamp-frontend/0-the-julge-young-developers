import React from 'react'

import classNames from 'classnames/bind'

import styles from './ui-loading.module.scss'

const cx = classNames.bind(styles)
export default function UiLoading() {
  return (
    <div className={cx('loadingContainer')}>
      <div className={cx('ldsDefault')}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
