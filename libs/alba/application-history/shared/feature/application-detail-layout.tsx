import Pagination from '@/libs/shared/pagination/feature/pagination'
import { ApplicationHistoryTable } from '@/libs/shared/table/feature/tables'

import {
  UiApplicationTable,
  UiRegisterApplication,
} from '../../application-detail/ui/ui-application-detail'

interface ApplicationHistory {
  id: string
  status: 'pending' | 'accepted' | 'rejected'
  name: string
  hourlyPay: number
  startsAt: string
  workhour: number
}

interface ApplicationDetailLayoutProps {
  data: ApplicationHistory[]
  totalItems: number
  page: number
}

export default function ApplicationDetailLayout({
  data,
  totalItems,
  page,
}: ApplicationDetailLayoutProps) {
  return (
    <div>
      {page === 1 && data?.length === 0 && <UiRegisterApplication />}
      {data?.length && (
        <UiApplicationTable>
          <ApplicationHistoryTable
            data={data}
            paginationElement={
              <Pagination page={page} totalItems={totalItems} />
            }
          />
        </UiApplicationTable>
      )}
    </div>
  )
}
