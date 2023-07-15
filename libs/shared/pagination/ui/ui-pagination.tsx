import classnames from 'classnames/bind'

import UiPaginationArrow from '@/libs/shared/pagination/ui/ui-pagination-arrow'
import { UiPaginationProps } from '@/libs/shared/table/type-table'

import styles from './ui-pagination.module.scss'

const cx = classnames.bind(styles)

export default function UiPagination({
  pageNum,
  shownPageNums,
}: UiPaginationProps) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <button type="button">
          <UiPaginationArrow disable={true} />
        </button>
        <div className={cx('numbers')}>
          {shownPageNums.map((num) => (
            <button
              className={cx('number', { isActive: pageNum === num })}
              type="button"
              key={num}
            >
              {num}
            </button>
          ))}
        </div>
        <button type="button">
          <UiPaginationArrow direction="right" />
        </button>
      </div>
    </div>
  )
}
