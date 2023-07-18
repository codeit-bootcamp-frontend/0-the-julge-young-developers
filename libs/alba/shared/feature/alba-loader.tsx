import classNames from 'classnames/bind'

import styles from './alba-loader.module.scss'

const cx = classNames.bind(styles)

export default function AlbaLoading() {
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
