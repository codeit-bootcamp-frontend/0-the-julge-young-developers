'use client'

import { useEffect, useState } from 'react'

import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import Pagination from '@/libs/shared/pagination/feature/pagination'
import { ApplicationHistoryTable } from '@/libs/shared/table/feature/tables'

import {
  UiApplicationTable,
  UiRegisterApplication,
} from '../../application-detail/ui/ui-application-detail'
import UiLoading from '../../application-detail/ui/ui-loading'

interface ApplicationDetailLayoutProps {
  serverActionApplicationList: (
    ofst: number,
    lmt: number,
  ) => Promise<
    | { items: NoticeUserApplicationItem[]; offset: number; limit: number }
    | undefined
  >
}

interface ApplicationHistory {
  id: string
  status: 'pending' | 'accepted' | 'rejected'
  name: string
  hourlyPay: number
  startsAt: string
  workhour: number
}

export default function ApplicationDetailLayout({
  serverActionApplicationList,
}: ApplicationDetailLayoutProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [pageNum, setPageNum] = useState<number>(1)
  const [applicationData, setApplicationData] = useState<
    ApplicationHistory[] | undefined
  >([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await serverActionApplicationList(pageNum - 1, 5)
      setLoading(false)

      if (data) {
        const trimmedData = data.items.map((item) => ({
          id: item.item.id,
          status: item.item.status,
          name: item.item.shop.item.name,
          hourlyPay: item.item.notice.item.hourlyPay,
          startsAt: item.item.notice.item.startsAt,
          workhour: item.item.notice.item.workhour,
        }))

        setApplicationData(trimmedData)
      }
    }
    fetchData()
  }, [serverActionApplicationList, pageNum])

  return (
    <div>
      {loading && <UiLoading />}
      {!loading && applicationData?.length === 0 && <UiRegisterApplication />}
      {!loading && applicationData?.length && (
        <UiApplicationTable>
          <ApplicationHistoryTable data={applicationData}>
            <Pagination pageNum={pageNum} setPageNum={setPageNum} />
          </ApplicationHistoryTable>
        </UiApplicationTable>
      )}
    </div>
  )
}
