'use client'

import NoticeList from '@/libs/notice-list/feature/notice-list'
import { AllNoticesData } from '@/libs/shared/api/types/type-notice'

export default function SearchNoticeList({
  keyword,
  page,
  initTotalItems,
  initData,
}: {
  keyword: string
  page: number
  initTotalItems: number
  initData: AllNoticesData[]
}) {
  const title = keyword ? `${keyword}에 대한 공고목록` : '전체 공고목록'
  return (
    <div>
      <NoticeList
        title={title}
        keyword={keyword}
        page={page}
        initTotalItems={initTotalItems}
        initData={initData}
      />
    </div>
  )
}
