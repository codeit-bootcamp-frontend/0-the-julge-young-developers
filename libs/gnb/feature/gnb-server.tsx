import dynamic from 'next/dynamic'
import { cookies } from 'next/headers'

import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

const Gnb = dynamic(() => import('./gnb'), {
  ssr: false,
})

// import Gnb from './gnb'

export const revalidate = 10
export default async function GnbServer() {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value

  let userType
  let sid

  if (!userId) {
    userType = 'guest'
  } else {
    const userInfo = await getUserInfo(userId)

    if (userInfo instanceof Error) {
      throw new Error()
    } else if (typeof userInfo === 'string') {
      throw new Error(userInfo)
    } else {
      userType = userInfo.item.type
      if (userType === 'employer' && userInfo.item.shop) {
        sid = userInfo.item.shop.item.id
      }
    }
  }

  return (
    <Gnb
      userType={userType as 'guest' | 'employee' | 'employer' | undefined}
      sid={sid}
    />
  )
}
