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
  userName: string
  description: string
  phone: string
}

export interface ApplicationHistory {
  id: string
  status: Status
  shopName: string
  duration: string
  hourlyPay: string
}

export interface TableData {
  id: string
  status: Status
  first: string
  second: string
  third: string
}

export interface UiTableProps {
  userType: UserType
  data: TableData[]
  pageNum: number
  shownPageNums: number[]
}

export interface UiPaginationProps {
  pageNum: number
  shownPageNums: number[]
}

export interface UiTableRowProps {
  item: TableData
  statusCell: ReactNode
}

export interface UiTableStatusCellProps {
  userType: UserType
  status: Status
}
