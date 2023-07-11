interface CommonBtnProps {
  text: string
  outline: booelan
  size: 'large' | 'medium' | 'small'
  status: 'active' | 'inactive'
  onClick: () => void
}

type OmitCommonBtnProps = Omit<CommonBtnProps, 'outline', 'status'>
