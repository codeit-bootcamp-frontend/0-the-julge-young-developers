import classNames from 'classnames/bind'

// import { SortType } from '@/libs/notice-list/feature/notice-list'
import UiFilterButton from '@/libs/notice-list/ui/ui-filter-button/ui-filter-button'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'

import styles from './ui-filter-element.module.scss'

const cx = classNames.bind(styles)

export default function UiFilterElement({
  onSelectSortData,
  onClickModalOpen,
}: {
  onClickModalOpen: () => void
  onSelectSortData: (sortData: string) => void
}) {
  return (
    <>
      <div className={cx('filterWrapper')}>
        <Select
          variant="filter"
          defaultValue="마감임박순"
          options={[
            { value: '마감임박순' },
            { value: '시급많은순' },
            { value: '시간적은순' },
            { value: '가나다순' },
          ]}
          onClick={onSelectSortData}
        />
      </div>
      <UiFilterButton
        onClick={() => {
          onClickModalOpen()
        }}
      />
    </>
  )
}
