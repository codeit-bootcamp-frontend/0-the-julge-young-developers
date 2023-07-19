interface GnbProps {
  userType: 'employee' | 'employer' | 'guest' | null
  hasNotification: boolean
  searchbarElement: React.ReactNode
  handleClickMovePage: (pathname?: string) => void
  onCheckNotification: () => void
}

interface ButtonProps {
  name?: string
  activeStatus?: string
  id?: string
  handleClickButton: (pathname?: string) => void
}
