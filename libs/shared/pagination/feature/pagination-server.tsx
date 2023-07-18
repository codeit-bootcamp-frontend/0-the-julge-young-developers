import UiPaginationServer from '../ui/ui-pagination-server'

const PAGES_PER_PAGINATION = Number(process.env.PAGES_PER_PAGINATION)
const TABLE_ITEMS_PER_PAGE = Number(process.env.TABLE_ITEMS_PER_PAGE)

export default function PaginationServer({
  page,
  totalItems,
}: {
  page: number
  totalItems: number
}) {
  const paginationNum = Math.floor((page - 1) / PAGES_PER_PAGINATION) + 1
  const endPage = Math.floor((totalItems + 1) / TABLE_ITEMS_PER_PAGE)

  const shownStart =
    Math.floor((page - 1) / PAGES_PER_PAGINATION) * PAGES_PER_PAGINATION + 1
  const shownEnd = Math.min(endPage, paginationNum * PAGES_PER_PAGINATION)
  const shownPages = Array.from(
    { length: shownEnd - shownStart + 1 },
    (_, i) => i + shownStart,
  )
  return (
    <UiPaginationServer
      page={page}
      shownPages={shownPages}
      prevAble={page > 1}
      nextAble={page < endPage}
    />
  )
}
