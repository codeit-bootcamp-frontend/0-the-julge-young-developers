import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import MyNoticeList from '@/libs/my-shop/feature/my-notice/my-notice-list'
import MyShop from '@/libs/my-shop/feature/my-shop/my-shop'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

export default async function MyShopPage() {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value

  if (!userId) {
    // 에러처리
    redirect('/signin')
  }
  const userInfo = await getUserInfo(userId)

  if (typeof userInfo === 'string' || userInfo instanceof Error) {
    // 에러 처리
    return null
  }
  const shopId = userInfo.item.shop?.item.id
  console.log(shopId)
  return (
    <div>
      <MyShop shopId={shopId || ''} />
      {shopId && <MyNoticeList shopId={shopId || ''} />}
    </div>
  )
}
