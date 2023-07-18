import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiNotificationModalProps } from '@/libs/shared/notification-modal/type-notification-modal'
import {
  UiAcceptedNotificationItem,
  UiRejectedNotificationItem,
} from '@/libs/shared/notification-modal/ui/ui-notification-item/ui-notification-item'

import styles from './ui-notification-modal.module.scss'

const cx = classNames.bind(styles)

/**
 * @param itemList 알림 정보가 들어있는 배열 데이터
 * @param onClose 알림창 close하는 이벤트 핸들러 함수
 * @returns 알림창 리턴
 */
export default function UiNotificationModal({
  itemList,
  onClose,
  onClickNotiItem,
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

      <h1 className={cx('modalHeader')}>{`알림 ${itemList.length}개`}</h1>
      <div className={cx('notificationList')}>
        {itemList.map((item) =>
          item.result === 'accepted' ? (
            <UiAcceptedNotificationItem
              key={item.id}
              id={item.id}
              name={item.storeName}
              duration={item.duration}
              createdAt={item.createdAt}
              onClickNotiItem={onClickNotiItem}
            />
          ) : (
            <UiRejectedNotificationItem
              key={item.id}
              id={item.id}
              name={item.storeName}
              duration={item.duration}
              createdAt={item.createdAt}
              onClickNotiItem={onClickNotiItem}
            />
          ),
        )}
      </div>
    </div>
  )
}
