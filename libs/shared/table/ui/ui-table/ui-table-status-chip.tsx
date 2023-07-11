import classnames from 'classnames/bind'

import { Status } from '@/libs/shared/table/type-table'

import styles from './ui-table-status-chip.module.scss'

const cx = classnames.bind(styles)

export default function UiTableStatusChip({ status }: { status: Status }) {
  const MESSAGE = {
    pending: '대기중',
    accepted: '승인완료',
    rejected: '거절',
  }

  return (
    <div
      className={cx('chip', {
        [status]: status,
      })}
    >
      {MESSAGE[status]}
    </div>
  )
}
