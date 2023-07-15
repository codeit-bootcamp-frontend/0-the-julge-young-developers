'use client'

import { useEffect, useState } from 'react'

import { getUserApplicationData } from '@/libs/application-detail/data-access/data-access-application'
import {
  UiApplicationTable,
  UiRegisterApplication,
} from '@/libs/application-detail/ui/ui-application-detail'
import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'

export default function ApplicationDetail() {
  // const [pageNumber, setPageNumber] = useState(1)
  const [applicationData, setApplicationData] = useState<
    NoticeUserApplicationItem[] | []
  >([] as unknown as NoticeUserApplicationItem[])
  const [loading, setLoading] = useState(true)

  // param: offset=pageNumber, limit=5
  const loadApplicationData = () => {
    const data = getUserApplicationData()
    if (data instanceof Error) {
      // 알 수 없는 에러 처리
      console.log(data)
    } else if (typeof data === 'string') {
      // 에러 메시지에 맞게 처리
      console.log(data)
    } else {
      setLoading(false)
      setApplicationData(data)
    }
  }

  useEffect(() => {
    loadApplicationData()
  }, []) // [pageNumber]

  return (
    <div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {loading ? (
        <div> 로딩 중... </div>
      ) : applicationData.length === 0 ? (
        <UiRegisterApplication />
      ) : (
        <UiApplicationTable />
      )}
    </div>
  )
}
