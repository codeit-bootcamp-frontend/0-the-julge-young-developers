import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'
import TableStatusButton from '@/libs/shared/table/feature/table-status-button'
import {
  ApplicantListTableProps,
  ApplicationHistoryTableProps,
  TableData,
} from '@/libs/shared/table/type-table'
import UiTableBody from '@/libs/shared/table/ui/ui-table-composition/ui-table-body'
import UiTableBodyCell from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-cell'
import UiTableBodyRow from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-row'
import UiTableBodyStatusChip from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-status-chip'
import UiTableContainer from '@/libs/shared/table/ui/ui-table-composition/ui-table-container'
import UiTableHeadCell from '@/libs/shared/table/ui/ui-table-composition/ui-table-head-cell'
import UiTableHeadRow from '@/libs/shared/table/ui/ui-table-composition/ui-table-head-row'
import { utilFormatPhone } from '@/libs/shared/table/util/util-format-phone'

function ApplicationHistoryTable({
  data,
  paginationElement,
}: ApplicationHistoryTableProps) {
  const tableData: TableData[] = data.map((item) => ({
    id: item.id,
    status: item.status,
    first: item.name,
    second: utilFormatDuration(item.startsAt, item.workhour),
    third: `${item.hourlyPay.toLocaleString()}원`,
  }))

  return (
    <UiTableContainer paginationElement={paginationElement}>
      <UiTableHeadRow>
        <UiTableHeadCell>가게</UiTableHeadCell>
        <UiTableHeadCell>일자</UiTableHeadCell>
        <UiTableHeadCell>시급</UiTableHeadCell>
        <UiTableHeadCell>상태</UiTableHeadCell>
      </UiTableHeadRow>
      <UiTableBody>
        {tableData.map((item) => (
          <UiTableBodyRow key={item.id}>
            <UiTableBodyCell>{item.first}</UiTableBodyCell>
            <UiTableBodyCell>{item.second}</UiTableBodyCell>
            <UiTableBodyCell>{item.third}</UiTableBodyCell>
            <UiTableBodyCell>
              <UiTableBodyStatusChip status={item.status} />
            </UiTableBodyCell>
          </UiTableBodyRow>
        ))}
      </UiTableBody>
    </UiTableContainer>
  )
}

function ApplicantListTable({
  data,
  shopId,
  noticeId,
  paginationElement,
}: ApplicantListTableProps) {
  const tableData: TableData[] = data.map((item) => ({
    id: item.id,
    status: item.status,
    first: item.name,
    second: item.description,
    third: item.phone && utilFormatPhone(item.phone),
  }))

  return (
    <UiTableContainer paginationElement={paginationElement}>
      <UiTableHeadRow>
        <UiTableHeadCell>신청자</UiTableHeadCell>
        <UiTableHeadCell>소개</UiTableHeadCell>
        <UiTableHeadCell>전화번호</UiTableHeadCell>
        <UiTableHeadCell>상태</UiTableHeadCell>
      </UiTableHeadRow>
      <UiTableBody>
        {tableData.map((item) => (
          <UiTableBodyRow key={item.id}>
            <UiTableBodyCell>{item.first}</UiTableBodyCell>
            <UiTableBodyCell>{item.second}</UiTableBodyCell>
            <UiTableBodyCell>{item.third}</UiTableBodyCell>
            <UiTableBodyCell>
              {item.status === 'pending' ? (
                <TableStatusButton
                  shopId={shopId}
                  noticeId={noticeId}
                  applicationId={item.id}
                />
              ) : (
                <UiTableBodyStatusChip status={item.status} />
              )}
            </UiTableBodyCell>
          </UiTableBodyRow>
        ))}
      </UiTableBody>
    </UiTableContainer>
  )
}

export { ApplicationHistoryTable, ApplicantListTable }
