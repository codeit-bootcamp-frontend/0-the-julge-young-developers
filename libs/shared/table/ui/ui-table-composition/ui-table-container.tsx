import classnames from 'classnames/bind'

import styles from './ui-table-container.module.scss'

const cx = classnames.bind(styles)

export default function UiTableContainer({
  children,
  paginationElement,
}: {
  children: React.ReactNode
  paginationElement: React.ReactNode
}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('contentWrapper')}>
        <table className={cx('table')}>{children}</table>
      </div>
      {paginationElement}
    </div>
  )
}
