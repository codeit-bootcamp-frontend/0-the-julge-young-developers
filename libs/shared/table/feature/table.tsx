import {
  MOCK_APPLICANT_LISTS,
  MOCK_APPLICATION_HISTORIES,
} from '@/libs/shared/table/data-access/data-access-mock'
import { TableData, UserType } from '@/libs/shared/table/type-table'
import UiTable from '@/libs/shared/table/ui/ui-table/ui-table'

export default function Table() {
  const userType: UserType = 'employer'
  const tableData: TableData[] =
    userType === 'employer'
      ? MOCK_APPLICANT_LISTS.map((item) => ({
          id: item.id,
          status: item.status,
          first: item.userName,
          second: item.description,
          third: item.phone,
        }))
      : MOCK_APPLICATION_HISTORIES.map((item) => ({
          id: item.id,
          status: item.status,
          first: item.shopName,
          second: item.duration,
          third: item.hourlyPay,
        }))

  const pageNum = 1
  const shownPageNums = [1, 2, 3, 4, 5, 6, 7]

  return (
    <UiTable
      userType={userType}
      data={tableData}
      pageNum={pageNum}
      shownPageNums={shownPageNums}
    />
  )
}
