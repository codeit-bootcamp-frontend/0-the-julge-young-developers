'use client'

import { useEffect, useState } from 'react'

import { getCookie, setCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import Searchbar from '@/libs/gnb/feature/searchbar'
import UiGnb from '@/libs/gnb/ui/ui-gnb/ui-gnb'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

export default function Gnb() {
  const [hasNotification, setHasNotification] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userType, setUserType] = useState<
    'employee' | 'employer' | 'guest' | null
  >(null)
  const router = useRouter()
  const userId = getCookie('uid') as string

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
        console.log(userId)
        await getUserType(userId)
      }
    }

    fetchUserType()
  }, [userId])

  const handleClickMovePage = (pathname?: string) => {
    router.push(`/${pathname}`)
  }

  const handleClickOpenModal = () => {
    setIsModalOpen(true)
  }

  useEffect(() => {
    if (isModalOpen) {
      // 일단 Modal이 열리면 Notification을 본 상태로 변경되기 때문에 false로 변경해 놓도록 했는데, 이후에 Noti 불러오는 API 함수 사용하면서 수정이 필요할 것 같습니다.
      setHasNotification(false)
    }
  }, [isModalOpen])

  return (
    <UiGnb
      userType={userType}
      hasNotification={hasNotification}
      searchbarElement={<Searchbar />}
      handleClickMovePage={handleClickMovePage}
      handleClickOpenModal={handleClickOpenModal}
    />
  )
}
