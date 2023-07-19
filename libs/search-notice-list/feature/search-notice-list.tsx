'use client'

import { useSearchParams } from 'next/navigation'

import NoticeList from '@/libs/notice-list/feature/notice-list'

export default function SearchNoticeList() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') as string

  return (
    <div>
      <NoticeList title={`${keyword}에 대한 공고목록`} keyword={keyword} />
    </div>
  )
}
