interface UiNotificationItemProps {
  id: string
  name: string
  duration: string
  createdAt: string
  onClickNotiItem: (alertId: string) => void
}

interface UiNotificationItem {
  id: string
  storeName: string
  duration: string
  startsAt: string
  workhour: number
  createdAt: string
  result: string
}

interface UiNotificationModalProps {
  itemList: UiNotificationItem[]
  onClose: (isOpen: boolean) => void
  onClickNotiItem: (alertId: string) => void
}

export type {
  UiNotificationItemProps,
  UiNotificationItem,
  UiNotificationModalProps,
}
