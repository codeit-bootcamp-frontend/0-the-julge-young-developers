import classNames from 'classnames/bind'

import AlbaClientLoaderWrapper from './alba-client-loader-wrapper'
import styles from './alba-client-loader.module.scss'

const cx = classNames.bind(styles)

export default function AlbaClientLoader() {
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
