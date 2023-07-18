import classNames from 'classnames/bind'

import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'

// import { MOCK_NOTICES_DATA } from '../data-access/data-access-mock'
import styles from './ui-recent-notices.module.scss'

const cx = classNames.bind(styles)

export default function UiRecentNotices({
  noticesList,
}: {
  noticesList: AllNoticesData[] | null
}) {
  return (
    <div className={cx('recentNotices')}>
      {noticesList && <NoticeCardItem data={noticesList} />}
    </div>
  )
}
