import classnames from 'classnames/bind'

import styles from './ui-table-row.module.scss'
import UiTableStatusButton from './ui-table-status-button'

const cx = classnames.bind(styles)

export default function UiTableRow() {
  return (
    <tr className={cx('bodyRow')}>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>김연우</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>
          최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리
          보여드리겠습니다.
        </div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>010-1234-5678</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('statusCell')}>
          {/* <UiTableStatusChip status="rejected" /> */}
          <UiTableStatusButton />
          <UiTableStatusButton />
        </div>
      </td>
    </tr>
  )
}
