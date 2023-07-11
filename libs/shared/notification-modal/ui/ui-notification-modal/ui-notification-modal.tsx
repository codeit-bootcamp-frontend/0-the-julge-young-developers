import classNames from 'classnames/bind'

import UiCommonLayout from '@/libs/shared/common-layout/ui/ui-common-layout/ui-common-layout'
import {
  UiAcceptedNotificationItem,
  UiRejectedNotificationItem,
} from '@/libs/shared/notification-modal/ui/ui-notification-item/ui-notification-item'

import styles from './ui-notification-modal.module.scss'

export interface UiNotificationItem {
  id: number
  name: string
  duration: string
  startsAt: string
  workhour: number
  createdAt: string
  result: string
}

interface UiNotificationModalProps {
  itemList: UiNotificationItem[]
}

const cx = classNames.bind(styles)

export default function UiNotificationModal({
  itemList,
}: UiNotificationModalProps) {
  return (
    <div className={cx('modalContainer')}>
      <UiCommonLayout
        title={`알림 ${itemList.length}개`}
        titleSize={20}
        gap={16}
      >
        <div className={cx('notificationList')}>
          {itemList.map((item) =>
            item.result === 'accepted' ? (
              <UiAcceptedNotificationItem
                key={item.id}
                name={item.name}
                duration={item.duration}
                createdAt={item.createdAt}
              />
            ) : (
              <UiRejectedNotificationItem
                key={item.id}
                name={item.name}
                duration={item.duration}
                createdAt={item.createdAt}
              />
            ),
          )}
        </div>
      </UiCommonLayout>
    </div>
  )
}
