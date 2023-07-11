import classnames from 'classnames/bind'

import {
  COL_NAMES,
  MOCK_APPLICANT_LISTS,
} from '@/libs/shared/table/data-access/data-access-mock'
import UiPagination from '@/libs/shared/table/ui/ui-pagination/ui-pagination'
import TableRow from '@/libs/shared/table/ui/ui-table/ui-table-row'

import styles from './ui-table.module.scss'

const cx = classnames.bind(styles)

export default function UiTable() {
  const userType = 'employer'

  return (
    <div className={cx('tableWrapper')}>
      <div className={cx('tableContentWrapper')}>
        <table className={cx('table')}>
          <thead>
            <tr className={cx('headRow')}>
              {COL_NAMES[userType].map((colName) => (
                <th key={colName} className={cx('headCell')}>
                  {colName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOCK_APPLICANT_LISTS.map((list) => (
              <TableRow key={list.id} content={list} />
            ))}
          </tbody>
        </table>
      </div>
      <UiPagination />
    </div>
  )
}
