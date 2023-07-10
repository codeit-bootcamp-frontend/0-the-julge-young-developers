import classnames from 'classnames/bind'

import UiPaginationArrow from './ui-pagination-arrow'
import styles from './ui-pagination.module.scss'

const cx = classnames.bind(styles)

export default function UiPagination() {
  const isActive = true
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <button type="button">
          <UiPaginationArrow disable={true} />
        </button>
        <div className={cx('numbers')}>
          <button className={cx('number', { isActive })} type="button">
            1
          </button>
          <button className={cx('number')} type="button">
            2
          </button>
          <button className={cx('number')} type="button">
            3
          </button>
          <button className={cx('number')} type="button">
            4
          </button>
          <button className={cx('number')} type="button">
            5
          </button>
          <button className={cx('number')} type="button">
            6
          </button>
          <button className={cx('number')} type="button">
            7
          </button>
        </div>
        <button type="button">
          <UiPaginationArrow direction="right" />
        </button>
      </div>
    </div>
  )
}
