/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
import UiPaginationServer from '../ui/ui-pagination-server'

const PAGES_PER_PAGINATION = 2

export default function PaginationServer({
  page,
  endPage,
}: {
  page: number
  endPage: number
}) {
  // 페이지네이션 로직
  const paginationNum = Math.floor((page - 1) / PAGES_PER_PAGINATION) + 1

  return (
    <UiPaginationServer
      page={page}
      shownPages={[1, 2, 3, 4, 5, 6, 7]}
      prevAble={false}
      nextAble={true}
    />
  )
}
