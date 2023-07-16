import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'
import {
  ApplicantListTableProps,
  ApplicationHistoryTableProps,
  TableData,
} from '@/libs/shared/table/type-table'
import UiTable from '@/libs/shared/table/ui/ui-table'

function ApplicationHistoryTable({
  data,
  children,
}: ApplicationHistoryTableProps) {
  const tableData: TableData[] = data.map((item) => ({
    id: item.id,
    status: item.status,
    first: item.name,
    second: utilFormatDuration(item.startsAt, item.workhour),
    third: `${item.hourlyPay.toLocaleString()}원`,
  }))

  return (
    <UiTable userType="employee" data={tableData}>
      {children}
    </UiTable>
  )
}

function ApplicantListTable({ data, children }: ApplicantListTableProps) {
  const tableData: TableData[] = data.map((item) => ({
    id: item.id,
    status: item.status,
    first: item.name,
    second: item.description,
    third: item.phone,
  }))

  return (
    <UiTable userType="employer" data={tableData}>
      {children}
    </UiTable>
  )
}

export { ApplicationHistoryTable, ApplicantListTable }
