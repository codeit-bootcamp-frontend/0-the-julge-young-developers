import { cookies } from 'next/headers'

import { getShopIdData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import MyShopNoticeApplicant from '@/libs/my-shop-notice/feature/my-shop-notice-applicant'
import MyShopNoticeDetail from '@/libs/my-shop-notice/feature/my-shop-notice-detail'

export default async function MyShopNotice({ noticeId }: { noticeId: string }) {
  const userId = cookies().get('uid')?.value
  if (!userId) return null

  const shopId = await getShopIdData(userId)
  if (!shopId) return null

  return (
    <>
      <MyShopNoticeDetail shopId={shopId} noticeId={noticeId} />
      <MyShopNoticeApplicant shopId={shopId} noticeId={noticeId} />
    </>
  )
}
