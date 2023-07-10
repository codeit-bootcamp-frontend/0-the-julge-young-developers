import classnames from 'classnames/bind'

import styles from './ui-table-status-button.module.scss'

const cx = classnames.bind(styles)

// interface UiTableStatusButtonProps {}

export default function UiTableStatusButton() {
  return (
    <button className={cx('button')} type="button">
      거절하기
    </button>
  )
}
