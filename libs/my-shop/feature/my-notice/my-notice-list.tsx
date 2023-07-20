import { getShopNotices } from '@/libs/shared/api/data-access/request/noticeRequest'

import MyNoticeListAddedScrolling from './my-notice-list-added-scrolling'
import UnregisteredMyNotice from './unregistered-notice'

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
    <MyNoticeListAddedScrolling shopId={shopId} initialNoticeData={response} />
  ) : (
    <UnregisteredMyNotice />
  )
}
