export interface TypeButtonProps {
  type: UserType
  isButtonClicked: boolean
  onClick: (type: UserType) => void
}

export type UserType = 'employee' | 'employer'

export interface UserTypeProps {
  userType: UserType
  onClick: (type: UserType) => void
}
