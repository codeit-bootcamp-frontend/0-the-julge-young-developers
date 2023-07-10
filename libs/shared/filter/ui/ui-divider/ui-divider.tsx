import classNames from 'classnames/bind'

import styles from './ui-divider.module.scss'

const cx = classNames.bind(styles)

export default function UiDivider() {
  return <div className={cx('divider')} />
}
