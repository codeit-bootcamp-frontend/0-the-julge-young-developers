'use client'

import UiRecentNotices from '@/libs/notice-detail-alice/ui/ui-recent-notices'
import { ShopNoticeData } from '@/libs/shared/api/types/type-notice'
import { useNewRecentNoticesContext } from '@/libs/shared/providers/context/feature/notice-provider'

interface RecentNoticeShellProps {
  noticeDetail: ShopNoticeData
}

export default function RecentNoticeShell({
  noticeDetail,
}: RecentNoticeShellProps) {
  const recentNotices = useNewRecentNoticesContext()

  const recentNoticeList = recentNotices.getRecentNoticeList()

  if (recentNoticeList) {
    const filteredList = [
      noticeDetail.item,
      ...recentNoticeList.filter(
        (recentNotice) => recentNotice.id !== noticeDetail.item.id,
      ),
    ]

    if (filteredList.length > 6) {
      filteredList.pop()
    }

    recentNotices.setRecentNoticeList(filteredList)
  } else {
    recentNotices.setRecentNoticeList([noticeDetail.item])
  }

  return <UiRecentNotices noticesList={recentNotices.getRecentNoticeList()} />
}
