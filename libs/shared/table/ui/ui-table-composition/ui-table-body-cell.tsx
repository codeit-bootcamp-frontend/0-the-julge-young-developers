import classnames from 'classnames/bind'

import styles from './ui-table-body-cell.module.scss'

const cx = classnames.bind(styles)

export default function UiTableBodyCell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <td className={cx('bodyCell')}>
      <div className={cx('content')}>{children}</div>
    </td>
  )
}
