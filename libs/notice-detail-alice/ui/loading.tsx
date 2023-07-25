import classNames from 'classnames/bind'

import styles from './loading.module.scss'

const cx = classNames.bind(styles)

export default function Loading() {
  return (
    <div className={cx('container')}>
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
