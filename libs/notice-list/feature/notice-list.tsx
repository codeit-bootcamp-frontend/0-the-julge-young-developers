'use client'

import { useEffect, useState } from 'react'

import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import UiFilterElement from '@/libs/shared/notice-card/ui/ui-filter-element/ui-filter-element'
import Pagination from '@/libs/shared/pagination/feature/pagination'

import UiNoticeList from '../ui/ui-notice-list/ui-notice-list'

export default function NoticeList({
  keyword,
}: {
  keyword: string | undefined
}) {
  const [data, setData] = useState<AllNoticesData[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [pageNum, setPageNum] = useState(1)

  const handleClickModalOpen = () => {
    setIsModalOpen(true)
  }

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
      console.log(items) // API에 hourlyPayGte 파라미터 붙여 보낼 때 이상한 데이터가 response 돼서 질문했고, 확인 끝나면 삭제하겠습니다.
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
        <Pagination pageNum={pageNum} setPageNum={setPageNum} />
      }
    />
  )
}
