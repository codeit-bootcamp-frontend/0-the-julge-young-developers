import classnames from 'classnames/bind'

import styles from './ui-table-head-row.module.scss'

const cx = classnames.bind(styles)

export default function UiTableHeadRow({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <thead>
      <tr className={cx('headRow')}>{children}</tr>
    </thead>
  )
}
