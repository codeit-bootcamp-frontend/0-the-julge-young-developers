import { ReactNode } from 'react'

const STATUS = {
  Pending: 'pending',
  Accepted: 'accepted',
  Rejected: 'rejected',
} as const
export type Status = (typeof STATUS)[keyof typeof STATUS]

const USER_TYPE = {
  Employer: 'employer',
  Employee: 'employee',
} as const
export type UserType = (typeof USER_TYPE)[keyof typeof USER_TYPE]

export interface ApplicantList {
  id: string
  status: Status
  name?: string
  description?: string
  phone?: string
}

export interface ApplicationHistory {
  id: string
  status: Status
  name: string
  hourlyPay: number
  startsAt: string
  workhour: number
}

export interface ApplicationHistoryTableProps {
  data: ApplicationHistory[]
  paginationElement: ReactNode
}

export interface ApplicantListTableProps {
  data: ApplicantList[]
  shopId: string
  noticeId: string
  paginationElement: ReactNode
}

export interface TableData {
  id: string
  status: Status
  first?: string
  second?: string
  third?: string
}

export interface UiTableProps {
  userType: UserType
  data: TableData[]
  children: ReactNode
}

export interface UiTableRowProps {
  item: TableData
  statusCell: ReactNode
}

export interface UiTableStatusCellProps {
  userType: UserType
  status: Status
}

export interface TableStatusButtonProps {
  shopId: string
  noticeId: string
  applicationId: string
}
