import classNames from 'classnames/bind'

import styles from './page-loader.module.scss'

const cx = classNames.bind(styles)

export default function CommonPageLoader() {
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
