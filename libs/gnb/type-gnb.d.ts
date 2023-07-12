interface GnbProps {
  isLogin: boolean
  hasNotification: boolean
  handleClickMovePage: (pathname?: string) => void
  handleClickOpenModal: () => void
}

interface ButtonProps {
  name?: string
  activeStatus?: string
  id?: string
  handleClickButton: (pathname?: string) => void
}
