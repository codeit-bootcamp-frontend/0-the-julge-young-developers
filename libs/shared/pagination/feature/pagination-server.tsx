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
  const endPage = Math.floor(totalItems / TABLE_ITEMS_PER_PAGE)
  const endPaginationNum = Math.floor((endPage - 1) / PAGES_PER_PAGINATION) + 1

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
      prevAble={paginationNum > 1}
      nextAble={paginationNum < endPaginationNum}
    />
  )
}
