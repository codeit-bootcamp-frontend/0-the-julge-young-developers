'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import UiPagination from '@/libs/shared/pagination/ui/ui-pagination'

export default function Pagination({
  pageNum,
  setPageNum,
}: {
  pageNum: number
  setPageNum: Dispatch<SetStateAction<number>>
}) {
  // 1) shownPageNums 계산을 위한 데이터 fetch
  // case1: /my-shop/{공고Id}
  // fetch에 필요: shopId, 공고Id
  // How get? shopId - context / 공고Id - usePathName
  // case2: /my-profile/{userId}
  // fetch에 필요: userId, 토큰
  // How get? userId - usePathName

  const [shownPageNums, setShownPageNums] = useState<number[]>([])
  const [paginationNum, setPaginationNum] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [lastPagination, setLastPagination] = useState(true)

  // 추후 삭제
  useEffect(() => setShownPageNums([1, 2, 3, 4, 5, 6, 7]), [])

  useEffect(() => {
    if (pageNum % 7 === 1) {
      setPaginationNum(pageNum / 7 + 1)
    }

    setShownPageNums([1, 2, 3, 4, 5, 6, 7])
  }, [pageNum])

  return (
    <UiPagination
      pageNum={pageNum}
      setPageNum={setPageNum}
      shownPageNums={shownPageNums}
      prevAble={paginationNum > 1}
      nextAble={!lastPagination}
    />
  )
}
