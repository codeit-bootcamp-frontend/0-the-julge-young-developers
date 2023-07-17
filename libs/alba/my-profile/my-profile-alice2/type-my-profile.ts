interface UiMyProfileProps {
  name: string
  phone: string
  address: string
  bio: string
  onClickEditButton: () => void
}

interface MyProfileProps {
  name: string
  phone: string
  address: string
  bio: string
}

export type { UiMyProfileProps, MyProfileProps }
