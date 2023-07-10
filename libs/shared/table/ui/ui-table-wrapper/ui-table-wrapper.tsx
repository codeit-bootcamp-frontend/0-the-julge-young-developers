import classnames from 'classnames/bind'

import UiPagination from '@/libs/shared/table/ui/ui-pagination/ui-pagination'
import UiTable from '@/libs/shared/table/ui/ui-table/ui-table'

import styles from './ui-table-wrapper.module.scss'

const cx = classnames.bind(styles)

export default function UiTableWrapper() {
  return (
    <div className={cx('wrapper')}>
      <UiTable />
      <UiPagination />
    </div>
  )
}
