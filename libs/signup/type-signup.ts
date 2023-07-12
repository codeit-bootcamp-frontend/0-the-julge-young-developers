export interface TypeButtonProps {
  type: UserType
  isButtonClicked: boolean
  handleClick: (type: UserType) => void
}

export type UserType = 'employee' | 'employer'
