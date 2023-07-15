import classNames from 'classnames/bind'

import styles from './ui-filter-button.module.scss'

const cx = classNames.bind(styles)

// 이후 필터 선택 개수 표시 기능 추가 예정
export default function UiFilterButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} type="button" className={cx('filterButton')}>
      상세 필터
    </button>
  )
}
