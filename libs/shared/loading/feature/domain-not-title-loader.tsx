import classNames from 'classnames/bind'

import styles from './domain-not-title-loader.module.scss'

const cx = classNames.bind(styles)

export default function DomainNotTitleLoader() {
  return (
    <div className={cx('loaderContainer')}>
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
