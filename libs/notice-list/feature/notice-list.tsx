'use client'

import { useEffect, useState } from 'react'

import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import UiFilterElement from '@/libs/shared/notice-card/ui/ui-filter-element/ui-filter-element'
// import Pagination from '@/libs/shared/pagination/feature/pagination'
import PaginationPrev from '@/libs/shared/pagination/feature/pagination-prev'

import UiNoticeList from '../ui/ui-notice-list/ui-notice-list'

// interface FilterDatas {
//   startDate: string
//   price: number
//   locations: string[]
// }

export default function NoticeList({
  keyword,
}: {
  keyword: string | undefined
}) {
  const [data, setData] = useState<AllNoticesData[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  // const [sortData, setSortData] = useState<string>('마감임박순')
  // const [filterData, setFilterData] = useState<FilterDatas>({} as FilterDatas)
  const [pageNum, setPageNum] = useState(1)

  const handleClickModalOpen = () => {
    setIsModalOpen(true)
  }

  // const handleApplyFilterData = async ({
  //   startDate,
  //   price,
  //   locations,
  // }: FilterDatas) => {
  //   setFilterData({ startDate, price, locations })
  //   const response = await getNotices({
  //     limit: 6,
  //     address: locations,
  //     startsAtGte: startDate,
  //     hourlyPayGte: price,
  //     keyword,
  //   })
  //   if (response instanceof Error) {
  //     // 알 수 없는 에러 처리
  //   } else if (typeof response === 'string') {
  //     // 에러 메시지에 맞게 처리
  //   } else {
  //     const { items } = response
  //     const itemArray = items.map((item) => item.item)
  //     setData(itemArray)
  //     console.log(filterData)
  //   }
  // }

  // 정렬 버튼에 연결될 이벤트 핸들러 함수
  const handleSelectSortData = async (sort: string) => {
    let sortStr: 'time' | 'pay' | 'hour' | 'shop'
    switch (sort) {
      case '마감임박순':
        sortStr = 'time'
        break
      case '시급많은순':
        sortStr = 'pay'
        break
      case '시간적은순':
        sortStr = 'hour'
        break
      case '가나다순':
        sortStr = 'shop'
        console.log(sortStr)
        break
      default:
        sortStr = 'time'
        break
    }

    const response = await getNotices({ limit: 6, sort: sortStr, keyword })
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      const { items } = response
      const itemArray = items.map((item) => item.item)
      setData(itemArray)
    }
  }

  // 검색 필터에 연결될 이벤트 핸들러 함수
  const handleGetFilteredData = async (
    selectedLocations: string[],
    start: string | undefined,
    price: number | undefined,
  ) => {
    const response = await getNotices({
      limit: 6,
      address: selectedLocations,
      startsAtGte: start,
      hourlyPayGte: price,
      keyword,
    })
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      const { items } = response
      const itemArray = items.map((item) => item.item)
      setData(itemArray)
    }
  }

  useEffect(() => {
    const getDatas = async () => {
      const response = await getNotices({ limit: 6, keyword })
      if (response instanceof Error) {
        // 알 수 없는 에러 처리
      } else if (typeof response === 'string') {
        // 에러 메시지에 맞게 처리
      } else {
        // response 데이터 가공
        const { items } = response
        const itemArray = items.map((item) => item.item)
        setData(itemArray)
      }
    }
    getDatas()
    return undefined
  }, [keyword])
  return (
    <UiNoticeList
      data={data}
      isModalOpen={isModalOpen}
      setModalOpen={setIsModalOpen}
      onClickGetFilteredData={handleGetFilteredData}
      filterElement={
        <UiFilterElement
          onClickModalOpen={handleClickModalOpen}
          onSelectSortData={handleSelectSortData}
        />
      }
      paginationElement={
        <PaginationPrev pageNum={pageNum} setPageNum={setPageNum} />
      }
    />
  )
}
