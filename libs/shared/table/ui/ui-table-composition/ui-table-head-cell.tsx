import classnames from 'classnames/bind'

import styles from './ui-table-head-cell.module.scss'

const cx = classnames.bind(styles)

export default function UiTableHeadCell({
  children,
}: {
  children: React.ReactNode
}) {
  return <th className={cx('headCell')}>{children}</th>
}
