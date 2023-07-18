import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getShopIdData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import MyShopNoticeApplicant from '@/libs/my-shop-notice/feature/my-shop-notice-applicant'

export default async function MyShopNoticeDetailPage({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { page: string }
}) {
  const userId = cookies().get('uid')?.value
  if (!userId) return redirect('/')

  const shopId = await getShopIdData(userId)
  if (!shopId) return redirect('/my-shop')

  const page =
    Number.isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1
      ? 1
      : Math.floor(Number(searchParams.page))

  return (
    <MyShopNoticeApplicant shopId={shopId} noticeId={params.id} page={page} />
  )
}
