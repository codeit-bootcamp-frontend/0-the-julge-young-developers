'use client'

import NoticeList from '@/libs/notice-list/feature/notice-list'

export default function SearchNoticeList({
  searchParams,
}: {
  searchParams: { keyword: string }
}) {
  const { keyword } = searchParams

  return (
    <div>
      <NoticeList keyword={keyword} />
    </div>
  )
}
