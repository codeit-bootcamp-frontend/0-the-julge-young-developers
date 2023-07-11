interface CommonBtnProps {
  text: string
  size: 'large' | 'medium' | 'mediumSmall' | 'small'
  status: 'active' | 'inactive'
  outline?: boolean
  confirm?: boolean
  onClick: () => void
}

type OmitCommonBtnProps = Omit<CommonBtnProps, 'outline' | 'status' | 'confirm'>
