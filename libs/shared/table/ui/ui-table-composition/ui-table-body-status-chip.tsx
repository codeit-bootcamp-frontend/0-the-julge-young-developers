import classnames from 'classnames/bind'

import { Status } from '@/libs/shared/table/type-table'

import styles from './ui-table-body-status-chip.module.scss'

const cx = classnames.bind(styles)

export default function UiTableBodyStatusChip({ status }: { status: Status }) {
  switch (status) {
    case 'accepted':
      return <div className={cx('chip', { [status]: status })}>승인완료</div>
    case 'rejected':
      return <div className={cx('chip', { [status]: status })}>거절</div>
    case 'canceled':
      return <div className={cx('chip', { [status]: status })}>취소</div>
    case 'pending':
      return <div className={cx('chip', { [status]: status })}>대기중</div>
    default:
  }
}
