'use client'

import { useRef, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import Image from 'next/image'

import {
  clearAlerts,
  getUserAlertsList,
} from '@/libs/shared/api/data-access/request/alertsRequest'
import { UiNotificationItem } from '@/libs/shared/notification-modal/type-notification-modal'
import UiNotificationModal from '@/libs/shared/notification-modal/ui/ui-notification-modal/ui-notification-modal'
import useOutsideClick from '@/libs/shared/shared/util/useOutsideClick'
import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'

import styles from './noti-button.module.scss'

const cx = classNames.bind(styles)

export default function NotiButton({
  activeStatus,
  onCheckNotification,
}: {
  activeStatus: string
  onCheckNotification: () => void
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notiData, setNotiData] = useState<UiNotificationItem[]>([])

  const modalRef = useRef<HTMLDivElement>(null)

  const userId = getCookie('uid') as string

  const handleClickNoti = async () => {
    const response = await getUserAlertsList(userId)
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      const { items } = response

      const notiItems = items
        .map((noticeItem) => {
          const { item } = noticeItem
          const { read } = item
          if (read) {
            return
          }
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
        .filter((item) => item !== undefined) as UiNotificationItem[]
      if (notiItems.length > 0) {
        onCheckNotification()
      }
      setNotiData([...notiItems])
    }
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  useOutsideClick(modalRef, handleCloseModal)

  const handleClickNotiItem = async (alertId: string) => {
    const response = await clearAlerts(userId, alertId)
    if (response instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof response === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // console.log(response)
    }
  }

  return (
    <div className={cx('wrapper')}>
      <div>
        <button type="button" onClick={handleClickNoti}>
          <Image
            src={`/images/notification-${activeStatus}.svg`}
            alt="notification"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div ref={modalRef}>
        {isModalOpen && (
          <UiNotificationModal
            itemList={notiData}
            onClose={handleCloseModal}
            onClickNotiItem={handleClickNotiItem}
          />
        )}
      </div>
    </div>
  )
}
