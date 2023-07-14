interface UiMyProfileProps {
  name: string
  phone: string
  address: string
  description: string
  onClickEditButton: () => void
}

interface MyProfileProps {
  name: string
  phone: string
  address: string
  description: string
}

export type { UiMyProfileProps, MyProfileProps }
