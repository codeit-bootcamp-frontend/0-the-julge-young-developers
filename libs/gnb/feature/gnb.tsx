'use client'

import { useEffect, useState } from 'react'

import { getCookie, setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import Searchbar from '@/libs/gnb/feature/searchbar'
import UiGnb from '@/libs/gnb/ui/ui-gnb/ui-gnb'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

export default function Gnb() {
  const [hasNotification, setHasNotification] = useState(false)
  const [userType, setUserType] = useState<
    'employee' | 'employer' | 'guest' | null
  >(null)
  const router = useRouter()
  const userId = getCookie('uid') as string

  const handleCheckNotification = () => {
    setHasNotification(true)
  }

  const getUserType = async (uid: string) => {
    const userInfo = await getUserInfo(uid)
    if (userInfo instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof userInfo === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // res 데이터 가공
      setUserType(userInfo.item.type)
      if (userInfo.item.type === 'employer' && userInfo.item.shop) {
        setCookie('sid', userInfo.item.shop.item.id)
      }
    }
  }

  useEffect(() => {
    const fetchUserType = async () => {
      if (!userId) {
        setUserType('guest')
      } else {
        await getUserType(userId)
      }
    }

    fetchUserType()
  }, [userId])

  const handleClickMovePage = (pathname?: string) => {
    router.push(`/${pathname}`)
  }

  return (
    <UiGnb
      userType={userType}
      hasNotification={hasNotification}
      searchbarElement={<Searchbar />}
      handleClickMovePage={handleClickMovePage}
      onCheckNotification={handleCheckNotification}
    />
  )
}
