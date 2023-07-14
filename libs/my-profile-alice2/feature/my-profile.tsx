'use client'

import { MyProfileProps } from '@/libs/my-profile-alice2/type-my-profile'
import UiMyProfile from '@/libs/my-profile-alice2/ui/ui-my-profile'

export default function MyProfile({
  name,
  phone,
  address,
  description,
}: MyProfileProps) {
  const handleClickEditButton = () => {
    console.log('편집하기 페이지 이동')
  }

  return (
    <UiMyProfile
      name={name}
      phone={phone}
      address={address}
      description={description}
      onClickEditButton={handleClickEditButton}
    />
  )
}
