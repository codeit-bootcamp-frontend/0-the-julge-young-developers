import classNames from 'classnames/bind'

import { FilterDatas } from '@/libs/notice-list/type-notice-list'
import styles from '@/libs/notice-list/ui/ui-notice-list/ui-notice-list.module.scss'
import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import DetailFilter from '@/libs/shared/detail-filter/feature/detail-filter'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'

const cx = classNames.bind(styles)

export default function UiNoticeList({
  data,
  filterElement,
  paginationElement,
  isModalOpen,
  setModalOpen,
  onClickGetFilteredData,
}: {
  data: AllNoticesData[]
  filterElement: React.ReactNode
  paginationElement: React.ReactNode
  isModalOpen: boolean
  setModalOpen: (isModalOpen: boolean) => void
  onClickGetFilteredData: ({
    startDate,
    price,
    locations,
  }: FilterDatas) => Promise<void>
}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('noticeCardWrapper')}>
        <NoticeCardItem data={data} filterElement={filterElement} />
      </div>
      {paginationElement}
      {isModalOpen && (
        <div className={cx('filterWrapper')}>
          <DetailFilter
            onClickApplyButton={onClickGetFilteredData}
            onClickCloseButton={() => setModalOpen(false)}
          />
        </div>
      )}
    </div>
  )
}
