import classNames from 'classnames/bind'

import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import NoticeCardItem from '@/libs/shared/notice-card/feature/notice-card-item'

import styles from './ui-recent-notices.module.scss'

const cx = classNames.bind(styles)

export default function UiRecentNotices({
  noticesList,
}: {
  noticesList: AllNoticesData[] | null
}) {
  return (
    <div className={cx('recentNotices')}>
      {noticesList && (
        <NoticeCardItem title="최근에 본 공고" data={noticesList} />
      )}
    </div>
  )
}
