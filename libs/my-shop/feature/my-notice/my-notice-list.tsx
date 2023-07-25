import MyNoticeListClient from '@/libs/my-shop/feature/my-notice/my-notice-list-client'
import UnregisteredMyNotice from '@/libs/my-shop/feature/my-notice/unregistered-notice'
import { getShopNotices } from '@/libs/shared/api/data-access/request/noticeRequest'

const INITIAL_CARDS = 6
export default async function MyNoticeList({ shopId }: { shopId: string }) {
  const response = await getShopNotices({
    shopId,
    offset: 0,
    limit: INITIAL_CARDS,
  })
  if (response instanceof Error) {
    throw new Error()
  }
  if (typeof response === 'string') {
    throw new Error(response)
  }

  return response.items.length > 0 ? (
    <MyNoticeListClient shopId={shopId} initialNoticeData={response} />
  ) : (
    <UnregisteredMyNotice />
  )
}
