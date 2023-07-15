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

  const loadApplicationData = () => {
    const result: NoticeUserApplicationItem[] = getUserApplicationData() // await getUserApplicationData()

    setApplicationData(result)
  }

  useEffect(() => {
    // 페이지네이션 진행
    // offset=pageNumber, limit=5
    loadApplicationData()
  }, []) // [pageNumber]

  return (
    <div>
      {applicationData.length === 0 ? (
        <UiRegisterApplication />
      ) : (
        <UiApplicationTable />
      )}
    </div>
  )
}
