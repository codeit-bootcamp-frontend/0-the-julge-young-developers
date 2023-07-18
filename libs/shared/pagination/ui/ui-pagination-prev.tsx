import classnames from 'classnames/bind'

import { UiPaginationProps } from '@/libs/shared/pagination/type-pagination'
import UiPaginationArrow from '@/libs/shared/pagination/ui/ui-pagination-arrow'

import styles from './ui-pagination.module.scss'

const cx = classnames.bind(styles)

export default function UiPaginationPrev({
  pageNum,
  setPageNum,
  shownPageNums,
  prevAble,
  nextAble,
}: UiPaginationProps) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <button type="button">
          <UiPaginationArrow direction="prev" able={prevAble} />
        </button>
        <div className={cx('numbers')}>
          {shownPageNums.map((num) => (
            <button
              className={cx('number', { isActive: pageNum === num })}
              type="button"
              key={num}
              onClick={() => setPageNum(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button type="button">
          <UiPaginationArrow direction="next" able={nextAble} />
        </button>
      </div>
    </div>
  )
}
