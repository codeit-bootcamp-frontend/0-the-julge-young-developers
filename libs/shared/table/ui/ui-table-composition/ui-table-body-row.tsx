import classnames from 'classnames/bind'

import styles from './ui-table-body-row.module.scss'

const cx = classnames.bind(styles)

export default function UiTableBodyRow({
  children,
}: {
  children: React.ReactNode
}) {
  return <tr className={cx('bodyRow')}>{children}</tr>
}
