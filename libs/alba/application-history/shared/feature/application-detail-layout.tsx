'use client'

import { useEffect, useState } from 'react'

import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import PaginationPrev from '@/libs/shared/pagination/feature/pagination-prev'
import { ApplicationHistoryTable } from '@/libs/shared/table/feature/tables'

import {
  UiApplicationTable,
  UiRegisterApplication,
} from '../../application-detail/ui/ui-application-detail'
import UiLoading from '../../application-detail/ui/ui-loading'

interface ApplicationHistory {
  id: string
  status: 'pending' | 'accepted' | 'rejected'
  name: string
  hourlyPay: number
  startsAt: string
  workhour: number
}

interface ApplicationDetailLayoutProps {
  serverActionApplicationList: (
    ofst: number,
    lmt: number,
  ) => Promise<
    | { items: NoticeUserApplicationItem[]; offset: number; limit: number }
    | undefined
  >
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

      const data = await serverActionApplicationList(
        pageNum === 1 ? pageNum - 1 : (pageNum - 1) * 5,
        5,
      )
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

        setApplicationData(trimmedData as ApplicationHistory[])
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
          <ApplicationHistoryTable
            data={applicationData}
            paginationElement={
              <PaginationPrev pageNum={pageNum} setPageNum={setPageNum} />
            }
          />
        </UiApplicationTable>
      )}
    </div>
  )
}
