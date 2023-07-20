'use client'

import { useEffect, useState } from 'react'

import { getCookie, setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import Searchbar from '@/libs/gnb/feature/searchbar'
import UiGnb from '@/libs/gnb/ui/ui-gnb/ui-gnb'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

interface GnbClientProps {
  userType?: 'guest' | 'employee' | 'employer'
  sid?: string
}

export default function Gnb({ userType, sid }: GnbClientProps) {
  const [hasNotification, setHasNotification] = useState(false)
  const [uType, setUType] = useState<
    'guest' | 'employee' | 'employer' | undefined
  >(userType)

  const router = useRouter()

  const handleCheckNotification = () => {
    setHasNotification(true)
  }

  const handleClickMovePage = (pathname?: string) => {
    router.push(`/${pathname}`)
  }

  useEffect(() => {
    setCookie('sid', sid)
  }, [sid])

  useEffect(() => {
    const fetchData = async () => {
      const isLogin = getCookie('isLogin')
      if (userType === 'guest' && isLogin) {
        const userId = getCookie('uid')
        const userInfo = await getUserInfo(userId as string)
        console.log(1)
        if (userInfo instanceof Error) {
          throw new Error()
        } else if (typeof userInfo === 'string') {
          throw new Error(userInfo)
        } else {
          setUType(userInfo.item.type)
          if (userInfo.item.type === 'employer' && userInfo.item.shop) {
            setCookie('sid', userInfo.item.shop.item.id)
          }
        }
      }
    }
    fetchData()
  }, [userType])

  return (
    <UiGnb
      userType={uType}
      hasNotification={hasNotification}
      searchbarElement={<Searchbar />}
      handleClickMovePage={handleClickMovePage}
      onCheckNotification={handleCheckNotification}
    />
  )
}
