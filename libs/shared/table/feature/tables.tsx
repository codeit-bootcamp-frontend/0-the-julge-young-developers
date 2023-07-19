import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'
import TableStatusButton from '@/libs/shared/table/feature/table-status-button'
import {
  ApplicantListTableProps,
  ApplicationHistoryTableProps,
  TableData,
} from '@/libs/shared/table/type-table'
import UiNoTableData from '@/libs/shared/table/ui/ui-no-table-data'
import UiTableBody from '@/libs/shared/table/ui/ui-table-composition/ui-table-body'
import UiTableBodyCell from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-cell'
import UiTableBodyRow from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-row'
import UiTableBodyStatusChip from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-status-chip'
import UiTableContainer from '@/libs/shared/table/ui/ui-table-composition/ui-table-container'
import UiTableHeadCell from '@/libs/shared/table/ui/ui-table-composition/ui-table-head-cell'
import UiTableHeadRow from '@/libs/shared/table/ui/ui-table-composition/ui-table-head-row'
import { utilFormatPhone } from '@/libs/shared/table/util/util-format-phone'

/**
 * 
 * @param data 테이블에 들어갈 신청 내역 데이터. 형태는 아래와 같습니다.
 * 
 * {
  id: string
  status: Status
  name: string
  hourlyPay: number
  startsAt: string
  workhour: number
}
 * @param paginationElement 페이지네이션 컴포넌트
 */
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

  if (!(tableData.length > 0)) return <UiNoTableData userType="employee" />
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

/**
 * 
 * @param data 테이블에 들어갈 신청 목록 데이터. 형태는 아래와 같습니다.
 * 
 * {
  id: string
  status: Status
  name?: string
  description?: string
  phone?: string
}
 * @param paginationElement 페이지네이션 컴포넌트
 */
function ApplicantListTable({
  data,
  shopId,
  noticeId,
  paginationElement,
  page,
}: ApplicantListTableProps) {
  const tableData: TableData[] = data.map((item) => ({
    id: item.id,
    status: item.status,
    first: item.name,
    second: item.description,
    third: item.phone && utilFormatPhone(item.phone),
  }))

  if (!(tableData.length > 0)) {
    return <UiNoTableData userType="employer" checkPage={page !== 1} />
  }
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
