import classNames from 'classnames/bind'

import styles from './application-detail-blank.module.scss'

const cx = classNames.bind(styles)

export default function ApplicationDetailBlank() {
  return <div className={cx('blankWrapper')} />
}
