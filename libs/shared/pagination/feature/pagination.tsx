import UiPagination from '../ui/ui-pagination'

const PAGES_PER_PAGINATION = 7

/**
 * 
 * @param page page.tsx에서 받는 쿼리 파람스입니다. 아래 코드대로 page.tsx에서 가공을 거친 후 props로 내려줘야 합니다
 *   
 * const page =
    Number.isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1
      ? 1
      : Math.floor(Number(searchParams.page))
 * @param totalItems 총 데이터 갯수 (API의 count 프로퍼티)
 */
export default function Pagination({
  page,
  totalItems,
  itemsPerPage,
}: {
  page: number
  totalItems: number
  itemsPerPage: number
}) {
  const paginationNum = Math.floor((page - 1) / PAGES_PER_PAGINATION) + 1
  const endPage = Math.floor((totalItems - 1) / itemsPerPage) + 1

  const shownStart =
    Math.floor((page - 1) / PAGES_PER_PAGINATION) * PAGES_PER_PAGINATION + 1
  const shownEnd = Math.min(endPage, paginationNum * PAGES_PER_PAGINATION)
  const shownPages = Array.from(
    { length: shownEnd - shownStart + 1 },
    (_, i) => i + shownStart,
  )

  return (
    <UiPagination
      page={page}
      shownPages={shownPages}
      prevAble={page > 1}
      nextAble={page < endPage}
    />
  )
}
