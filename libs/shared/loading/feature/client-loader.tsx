import classNames from 'classnames/bind'

import AlbaClientLoaderWrapper from './client-loader-wrapper'
import styles from './client-loader.module.scss'

const cx = classNames.bind(styles)

export default function CommonClientLoader() {
  return (
    <AlbaClientLoaderWrapper id="loader-portal">
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
    </AlbaClientLoaderWrapper>
  )
}
