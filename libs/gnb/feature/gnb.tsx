'use client'

import { useEffect, useState } from 'react'

import { setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import Searchbar from '@/libs/gnb/feature/searchbar'
import UiGnb from '@/libs/gnb/ui/ui-gnb/ui-gnb'

interface GnbClientProps {
  userType?: 'guest' | 'employee' | 'employer'
  sid?: string
}

export default function Gnb({ userType, sid }: GnbClientProps) {
  const [hasNotification, setHasNotification] = useState(false)

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
    console.log(userType, sid)
  }, [userType, sid])

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
