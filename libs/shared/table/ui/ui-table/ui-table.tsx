import classnames from 'classnames/bind'

import TableRow from './ui-table-row'
import styles from './ui-table.module.scss'

const cx = classnames.bind(styles)

export default function UiTable() {
  const colNames = {
    employer: ['신청자', '소개', '전화번호', '상태'],
    employee: ['가게', '일자', '시급', '상태'],
  }

  const userType = 'employer'

  return (
    <div className={cx('wrapper')}>
      <table className={cx('table')}>
        <thead>
          <tr className={cx('headRow')}>
            {colNames[userType].map((colName) => (
              <th key={colName} className={cx('headCell')}>
                {colName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  )
}
