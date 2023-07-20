import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import ApplicationDetailBlank from '@/libs/alba/application-history/shared/feature/application-detail-blank'
import MyNoticeList from '@/libs/my-shop/feature/my-notice/my-notice-list'
import MyShop from '@/libs/my-shop/feature/my-shop/my-shop'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

import { META_MY_SHOP } from '../../_meta'

export const metadata = META_MY_SHOP

export default async function MyShopPage() {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value

  if (!userId) {
    redirect('/signin')
  }

  let shopId
  const userInfo = await getUserInfo(userId)
  if (userInfo instanceof Error) {
    throw new Error()
  } else if (typeof userInfo === 'string') {
    throw new Error(userInfo)
  } else {
    if (userInfo.item.type === 'employee') {
      redirect('/')
    }
    shopId = userInfo.item.shop?.item.id
  }

  return (
    <div>
      <MyShop shopId={shopId || ''} />
      {shopId && <MyNoticeList shopId={shopId || ''} />}
      {!shopId && <ApplicationDetailBlank />}
    </div>
  )
}
