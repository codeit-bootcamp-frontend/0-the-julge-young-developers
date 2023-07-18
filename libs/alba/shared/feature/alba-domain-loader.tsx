import classNames from 'classnames/bind'

import styles from './alba-page-loader.module.scss'

const cx = classNames.bind(styles)
export default function AlbaDomainLoader() {
  return (
    <div className={cx('loadingContainer')}>
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
    </div>
  )
}
