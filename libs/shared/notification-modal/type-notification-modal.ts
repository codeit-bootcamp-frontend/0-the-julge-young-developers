interface UiNotificationItemProps {
  name: string
  duration: string
  createdAt: string
}

interface UiNotificationItem {
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
  onClose: (isOpen: boolean) => void
}

export type {
  UiNotificationItemProps,
  UiNotificationItem,
  UiNotificationModalProps,
}
