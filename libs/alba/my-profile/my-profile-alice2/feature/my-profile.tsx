'use client'

import { MyProfileProps } from '@/libs/alba/my-profile/my-profile-alice2/type-my-profile'
import UiMyProfile from '@/libs/alba/my-profile/my-profile-alice2/ui/ui-my-profile'

export default function MyProfile({
  name,
  phone,
  address,
  bio,
}: MyProfileProps) {
  const handleClickEditButton = () => {
    console.log('편집하기 페이지 이동')
  }

  return (
    <UiMyProfile
      name={name}
      phone={phone}
      address={address}
      bio={bio}
      onClickEditButton={handleClickEditButton}
    />
  )
}
