'use client'

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  MAX_APPLICATIONS_PER_PAGE,
  getUserApplicationData,
} from '@/libs/application-detail/data-access/data-access-application'
import {
  UiApplicationTable,
  UiRegisterApplication,
} from '@/libs/application-detail/ui/ui-application-detail'
import UiLoading from '@/libs/application-detail/ui/ui-loading'
import { useUserContext } from '@/libs/shared/providers/context/feature/user-provider'

import { UserApplicationItem } from '../type-application-detail'

export default function ApplicationDetail() {
  const [pageNum, setPageNum] = useState(1)
  const [applicationData, setApplicationData] = useState<
    UserApplicationItem[] | []
  >([] as unknown as UserApplicationItem[])
  const [loading, setLoading] = useState(true)
  const { userId } = useUserContext()

  const loadApplicationData = (id: string, offset: number, limit: number) => {
    setLoading(true)
    const data = getUserApplicationData()
    setLoading(false)

    console.log(data)
    setApplicationData(data)
  }

  useEffect(() => {
    loadApplicationData(userId, pageNum, MAX_APPLICATIONS_PER_PAGE)
  }, [pageNum])

  return (
    <div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {loading ? (
        <UiLoading />
      ) : applicationData.length === 0 ? (
        <UiRegisterApplication />
      ) : (
        <UiApplicationTable />
      )}
    </div>
  )
}
