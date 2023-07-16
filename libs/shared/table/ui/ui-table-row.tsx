import classnames from 'classnames/bind'

import { UiTableRowProps } from '@/libs/shared/table/type-table'

import styles from './ui-table-row.module.scss'

const cx = classnames.bind(styles)

export default function UiTableRow({ item, statusCell }: UiTableRowProps) {
  return (
    <tr className={cx('bodyRow')}>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{item.first}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{item.second}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('contentCell')}>{item.third}</div>
      </td>
      <td className={cx('bodyCell')}>
        <div className={cx('statusCell')}>{statusCell}</div>
      </td>
    </tr>
  )
}
