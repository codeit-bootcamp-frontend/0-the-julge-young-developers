import { Dispatch, SetStateAction } from 'react'

export interface PaginationProps {
  pageNum: number
  setPageNum: (page: number) => void
}

export interface UiPaginationProps {
  pageNum: number
  shownPageNums: number[]
  setPageNum: Dispatch<SetStateAction<number>>
  prevAble: boolean
  nextAble: boolean
}

export interface UiPaginationArrowProps {
  able: boolean
  direction: 'prev' | 'next'
}
