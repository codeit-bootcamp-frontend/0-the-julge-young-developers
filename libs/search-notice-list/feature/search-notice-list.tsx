'use client'

// import { useSearchParams } from 'next/navigation'
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
  // const searchParams = useSearchParams()
  // const keyword = searchParams.get('keyword') as string

  return (
    <div>
      <NoticeList
        title={`${keyword}에 대한 공고목록`}
        keyword={keyword}
        page={page}
        initTotalItems={initTotalItems}
        initData={initData}
      />
    </div>
  )
}
