import classnames from 'classnames/bind'

import styles from './ui-table-status-button.module.scss'

const cx = classnames.bind(styles)

interface UiTableStatusButtonProps {
  action: 'reject' | 'accept'
}

export default function UiTableStatusButton({
  action,
}: UiTableStatusButtonProps) {
  return (
    <button
      className={cx('button', {
        accept: action === 'accept',
        reject: action === 'reject',
      })}
      type="button"
    >
      {action === 'reject' ? '거절하기' : '승인하기'}
    </button>
  )
}
