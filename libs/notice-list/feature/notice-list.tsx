'use client'

import { useState } from 'react'

import { FilterDatas } from '@/libs/notice-list/type-notice-list'
import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import UiFilterElement from '@/libs/shared/notice-card/ui/ui-filter-element/ui-filter-element'
import Pagination from '@/libs/shared/pagination/feature/pagination'

import UiNoticeList from '../ui/ui-notice-list/ui-notice-list'

export default function NoticeList({
  title = '공고목록',
  keyword,
  page,
  initTotalItems,
  initData,
}: {
  title?: string
  keyword?: string | undefined
  page: number
  initTotalItems: number
  initData: AllNoticesData[]
}) {
  const [data, setData] = useState<AllNoticesData[]>(initData)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [sortData, setSortData] = useState<'time' | 'pay' | 'hour' | 'shop'>(
    'time',
  )
  const [filterData, setFilterData] = useState<FilterDatas>({} as FilterDatas)
  const [totalItems, setTotalItems] = useState<number>(initTotalItems)

  const handleClickModalOpen = () => {
    setIsModalOpen(true)
  }

  // 검색 필터에 연결될 이벤트 핸들러 함수
  const handleApplyFilterData = async ({
    startDate,
    price,
    locations,
  }: FilterDatas) => {
    setFilterData({ startDate, price, locations })

    const CARD_ITEMS_PER_PAGE = 6
    const offset = (page - 1) * CARD_ITEMS_PER_PAGE
    const limit = CARD_ITEMS_PER_PAGE
    const response = await getNotices({
      limit,
      offset,
      address: locations,
      startsAtGte: startDate,
      hourlyPayGte: price,
      sort: sortData,
      keyword,
    })
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      const { items, count } = response
      const itemArray = items.map((item) => item.item)
      setTotalItems(count)
      setData(itemArray)
    }
  }

  // 정렬 버튼에 연결될 이벤트 핸들러 함수
  const handleApplySortData = async (sort: string) => {
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
        break
      default:
        sortStr = 'time'
        break
    }

    setSortData(sortStr)
    const { price, locations } = filterData

    const TABLES_ITEMS_PER_PAGE = 6
    const offset = (page - 1) * TABLES_ITEMS_PER_PAGE
    const limit = TABLES_ITEMS_PER_PAGE
    const response = await getNotices({
      limit,
      offset,
      sort: sortStr,
      keyword,
      hourlyPayGte: price,
      address: locations,
    })
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      const { items, count } = response
      const itemArray = items.map((item) => item.item)
      setTotalItems(count)
      setData(itemArray)
    }
  }

  return (
    <div style={{ paddingBottom: '60px' }}>
      <UiNoticeList
        title={title}
        data={data}
        isModalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        onClickGetFilteredData={handleApplyFilterData}
        filterElement={
          <UiFilterElement
            onClickModalOpen={handleClickModalOpen}
            onSelectSortData={handleApplySortData}
          />
        }
        paginationElement={
          <Pagination itemsPerPage={6} page={page} totalItems={totalItems} />
        }
      />
    </div>
  )
}
