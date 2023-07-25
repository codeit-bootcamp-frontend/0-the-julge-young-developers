import { META_HOME } from '@/app/_meta'

import CustomNoticeList from '@/libs/custom-notice-list/feature/custom-notice-list'
import NoticeList from '@/libs/notice-list/feature/notice-list'
import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'

export const metadata = META_HOME

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  let itemArray
  let initTotalItems

  const page =
    Number.isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1
      ? 1
      : Math.floor(Number(searchParams.page))

  const TABLES_ITEMS_PER_PAGE = 6
  const offset = (page - 1) * TABLES_ITEMS_PER_PAGE
  const limit = TABLES_ITEMS_PER_PAGE

  const response = await getNotices({ limit, offset })
  if (response instanceof Error) {
    // 알 수 없는 에러 처리
    throw new Error()
  } else if (typeof response === 'string') {
    // 에러 메시지에 맞게 처리
    throw new Error(response)
  } else {
    // response 데이터 가공
    const { items, count } = response
    initTotalItems = count
    itemArray = items.map((item) => item.item)
  }

  return (
    <main>
      <CustomNoticeList />
      {itemArray && (
        <NoticeList
          page={page}
          initTotalItems={initTotalItems as number}
          initData={itemArray}
        />
      )}
    </main>
  )
}
