import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getShopIdData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import MyShopNoticeDetail from '@/libs/my-shop-notice/feature/my-shop-notice-detail'

export default async function MyShopNoticeDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const userId = cookies().get('uid')?.value
  if (!userId) return redirect('/')

  const shopId = await getShopIdData(userId)
  if (!shopId) return redirect('/my-shop')
  return (
    <>
      <MyShopNoticeDetail shopId={shopId} noticeId={params.id} />
      {children}
    </>
  )
}
