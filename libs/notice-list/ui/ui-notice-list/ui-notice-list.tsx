import classNames from 'classnames/bind'

import styles from '@/libs/notice-list/ui/ui-notice-list/ui-notice-list.module.scss'
import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import DetailFilter from '@/libs/shared/detail-filter/feature/detail-filter'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'
import UiPagination from '@/libs/shared/table/ui/ui-pagination/ui-pagination'

const cx = classNames.bind(styles)

export default function UiNoticeList({
  data,
  filterElement,
  isModalOpen,
  setModalOpen,
  onClickGetFilteredData,
}: {
  data: AllNoticesData[]
  filterElement: React.ReactNode
  isModalOpen: boolean
  setModalOpen: (isModalOpen: boolean) => void
  onClickGetFilteredData: (
    selectedLocations: string[],
    start: string | undefined,
    price: number | undefined,
  ) => void
}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('noticeCardWrapper')}>
        <NoticeCardItem data={data} filterElement={filterElement} />
      </div>
      <UiPagination pageNum={1} shownPageNums={[1, 2]} />
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
