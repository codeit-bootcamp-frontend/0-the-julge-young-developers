import classnames from 'classnames/bind'

import { ApplicantList } from '@/libs/shared/table/data-access/data-access-mock'
import UiTableStatusButton from '@/libs/shared/table/ui/ui-table/ui-table-status-button'
import UiTableStatusChip from '@/libs/shared/table/ui/ui-table/ui-table-status-chip'

import styles from './ui-table-row.module.scss'

const cx = classnames.bind(styles)

interface UiTableRowProps {
  content: ApplicantList
}

export default function UiTableRow({ content }: UiTableRowProps) {
  return (
    <tr className={cx('bodyRow')}>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{content.userName}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{content.description}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{content.phone}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('statusCell')}>
          {content.status === 'pending' ? (
            <>
              <UiTableStatusButton action="reject" />
              <UiTableStatusButton action="accept" />
            </>
          ) : (
            <UiTableStatusChip status={content.status} />
          )}
        </div>
      </td>
    </tr>
  )
}
