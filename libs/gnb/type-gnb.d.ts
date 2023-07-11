interface GnbProps {
  isLogin: boolean
  hasNotification: boolean
  handleClickMovePage: () => void
  handleClickOpenModal: () => void
}

interface ButtonProps {
  name?: string
  activeStatus?: string
  handleClickButton: () => void
}
