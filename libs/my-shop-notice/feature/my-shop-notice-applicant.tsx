'use client'

import { useEffect, useState } from 'react'

import { getNoticeApplicantsData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import Pagination from '@/libs/shared/pagination/feature/pagination'
import UiSimpleLayoutResponsive from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout-responsive'
import { ApplicantListTable } from '@/libs/shared/table/feature/tables'
import { ApplicantList } from '@/libs/shared/table/type-table'

export default function MyShopNoticeApplicant({
  shopId,
  noticeId,
}: {
  shopId: string
  noticeId: string
}) {
  const [pageNum, setPageNum] = useState(1)
  const [data, setData] = useState<ApplicantList[]>()

  useEffect(() => {
    const getTableData = async () =>
      setData(await getNoticeApplicantsData(shopId, noticeId, pageNum))

    getTableData()
  }, [noticeId, shopId, pageNum])

  if (!data) return <div>신청자 목록 테이블 로딩 중...</div>
  return (
    <UiSimpleLayoutResponsive title="신청자 목록">
      <ApplicantListTable data={data}>
        <Pagination pageNum={pageNum} setPageNum={setPageNum} />
      </ApplicantListTable>
    </UiSimpleLayoutResponsive>
  )
}
