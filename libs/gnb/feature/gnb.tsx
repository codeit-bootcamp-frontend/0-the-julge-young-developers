import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import UiGnb from '../ui/ui-gnb/ui-gnb'

export default function Gnb() {
  const [isLogin, setIsLogin] = useState(false)
  const [hasNotification, setHasNotification] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const router = useRouter()
  const userSecStr = localStorage.getItem('userSecStr') // 쿠키에 있는지 검사하는 방식으로 변경 필요

  if (userSecStr) {
    setIsLogin(true)
  }

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
      isLogin={isLogin}
      hasNotification={hasNotification}
      handleClickMovePage={handleClickMovePage}
      handleClickOpenModal={handleClickOpenModal}
    />
  )
}
