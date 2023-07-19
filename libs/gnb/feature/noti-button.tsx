'use client'

import { useState } from 'react'

import { getCookie } from 'cookies-next'

import Image from 'next/image'

import {
  clearAlerts,
  getUserAlertsList,
} from '@/libs/shared/api/data-access/request/alertsRequest'
import { UiNotificationItem } from '@/libs/shared/notification-modal/type-notification-modal'
import UiNotificationModal from '@/libs/shared/notification-modal/ui/ui-notification-modal/ui-notification-modal'
import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'

export default function NotiButton({ activeStatus }: { activeStatus: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notiData, setNotiData] = useState<UiNotificationItem[]>([])

  const exUserId = '4e560aa8-ae5a-40e1-a6e0-2a1e8b866d17'

  const handleClickNoti = async () => {
    const response = await getUserAlertsList(exUserId)
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      const { items } = response

      const notiItems = items.map((noticeItem) => {
        const { item } = noticeItem
        console.log(item)
        const { id, createdAt, result, notice, shop } = item
        return {
          id,
          storeName: shop.item.name,
          duration: utilFormatDuration(
            notice.item.startsAt,
            notice.item.workhour,
          ),
          startsAt: notice.item.startsAt,
          workhour: notice.item.workhour,
          createdAt,
          result,
        }
      })
      setNotiData(notiItems)
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleClickNotiItem = async (alertId: string) => {
    const userId = getCookie('uid') as string
    const response = await clearAlerts(userId, alertId)
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      console.log(response)
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClickNoti}>
        <Image
          src={`/images/notification-${activeStatus}.svg`}
          alt="notification"
          width={20}
          height={20}
        />
      </button>
      {isModalOpen && (
        <UiNotificationModal
          itemList={notiData}
          onClose={handleCloseModal}
          onClickNotiItem={handleClickNotiItem}
        />
      )}
    </div>
  )
}
