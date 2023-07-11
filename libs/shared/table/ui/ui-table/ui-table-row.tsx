import classnames from 'classnames/bind'

import { TableData } from '@/libs/shared/table/type-table'
import UiTableStatusButton from '@/libs/shared/table/ui/ui-table/ui-table-status-button'
import UiTableStatusChip from '@/libs/shared/table/ui/ui-table/ui-table-status-chip'

import styles from './ui-table-row.module.scss'

const cx = classnames.bind(styles)

export default function UiTableRow({ item }: { item: TableData }) {
  return (
    <tr className={cx('bodyRow')}>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{item.first}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{item.second}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{item.third}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('statusCell')}>
          {item.status === 'pending' ? (
            <>
              <UiTableStatusButton action="reject" />
              <UiTableStatusButton action="accept" />
            </>
          ) : (
            <UiTableStatusChip status={item.status} />
          )}
        </div>
      </td>
    </tr>
  )
}
