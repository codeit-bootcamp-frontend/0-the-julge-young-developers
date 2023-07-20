import { cookies } from 'next/headers'

import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

import Gnb from './gnb'

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
      // 알 수 없는 에러 처리
      throw new Error()
    } else if (typeof userInfo === 'string') {
      // 에러 메시지에 맞게 처리
      throw new Error(userInfo)
    } else {
      // res 데이터 가공
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
