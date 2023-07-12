import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiNotificationModalProps } from '@/libs/shared/notification-modal/type-notification-modal'
import {
  UiAcceptedNotificationItem,
  UiRejectedNotificationItem,
} from '@/libs/shared/notification-modal/ui/ui-notification-item/ui-notification-item'
import UiTitleContentLayout from '@/libs/shared/title-content-layout/ui/ui-title-content-layout/ui-title-content-layout'

import styles from './ui-notification-modal.module.scss'

const cx = classNames.bind(styles)

export default function UiNotificationModal({
  itemList,
  onClose,
}: UiNotificationModalProps) {
  const handleCloseModal = () => {
    onClose(false)
  }

  return (
    <div className={cx('modalContainer')}>
      <button
        className={cx('closeButton')}
        type="button"
        onClick={handleCloseModal}
      >
        <Image src="/images/close.svg" alt="닫기" width={24} height={24} />
      </button>
      <UiTitleContentLayout
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
      </UiTitleContentLayout>
    </div>
  )
}
