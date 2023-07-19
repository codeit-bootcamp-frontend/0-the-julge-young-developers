import { cookies } from 'next/dist/client/components/headers'

import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { ApplicationHistory } from '@/libs/shared/table/type-table'

import ApplicationDetailLayout from './application-detail-layout'

export const revalidate = 3600
export default async function ApplicationDetailShell({
  page,
}: {
  page: number
}) {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value as string
  const token = cookieInstance.get('token')?.value

  const TABLES_ITEMS_PER_PAGE = Number(process.env.TABLE_ITEMS_PER_PAGE)
  const offset = (page - 1) * TABLES_ITEMS_PER_PAGE
  const limit = TABLES_ITEMS_PER_PAGE
  const res = await getNoticeUserApplication(userId, {
    token,
    offset,
    limit,
  })

  let data
  let totalItems

  if (res instanceof Error) {
    throw new Error()
  } else if (typeof res === 'string') {
    throw new Error(res)
  } else {
    const applications = res.items

    data = applications.map((application) => ({
      id: application.item.id,
      status: application.item.status,
      name: application.item.shop.item.name,
      hourlyPay: application.item.notice.item.hourlyPay,
      startsAt: application.item.notice.item.startsAt,
      workhour: application.item.notice.item.workhour,
    }))
    totalItems = res.count
  }

  // eslint-disable-next-line react/jsx-no-bind
  return (
    <ApplicationDetailLayout
      data={data as ApplicationHistory[]}
      totalItems={totalItems as number}
      page={page}
    />
  )
}
