export interface BtnProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  size: 'large' | 'medium' | 'mediumSmall' | 'small'
  status: 'active' | 'inactive'
  outline?: boolean
  confirm?: boolean
  onClick?: () => void
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export type OmitBtnProps = Omit<BtnProps, 'outline' | 'status' | 'confirm'>
