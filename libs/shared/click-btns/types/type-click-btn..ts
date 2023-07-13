export interface BtnProps {
  text: string
  size: 'large' | 'medium' | 'mediumSmall' | 'small'
  status: 'active' | 'inactive'
  outline?: boolean
  confirm?: boolean
  onClick: () => void
}
export type OmitBtnProps = Omit<BtnProps, 'outline' | 'status' | 'confirm'>
