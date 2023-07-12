import classnames from 'classnames/bind'

import { COL_NAMES } from '@/libs/shared/table/data-access/data-access-mock'
import { UiTableProps } from '@/libs/shared/table/type-table'
import UiPagination from '@/libs/shared/table/ui/ui-pagination/ui-pagination'
import TableRow from '@/libs/shared/table/ui/ui-table/ui-table-row'
import UiTableStatusCell from '@/libs/shared/table/ui/ui-table/ui-table-status-cell'

import styles from './ui-table.module.scss'

const cx = classnames.bind(styles)

export default function UiTable({
  userType,
  data,
  pageNum,
  shownPageNums,
}: UiTableProps) {
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
            {data.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                statusCell={
                  <UiTableStatusCell userType={userType} status={item.status} />
                }
              />
            ))}
          </tbody>
        </table>
      </div>
      <UiPagination pageNum={pageNum} shownPageNums={shownPageNums} />
    </div>
  )
}
