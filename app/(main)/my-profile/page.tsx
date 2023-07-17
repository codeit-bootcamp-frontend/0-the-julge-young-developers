import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import ApplicationDetailShell from '@/libs/alba/application-history/shared/feature/application-detail-shell'
import MyProfileShell from '@/libs/alba/my-profile/my-profile-h/feature/my-profile-shell'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

export const revalidate = 3600
export default async function MyProfilePage() {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value

  let userProfile = {
    name: '',
    phone: '',
    address: '',
    bio: '',
  }

  let isRegistered = false
  const response = await getUserInfo(userId as string)

  if (response instanceof Error) {
    // console.error(response)
  } else if (typeof response === 'string') {
    // console.error(response)
  } else {
    if (response.item.type === 'employer') {
      redirect('/my-shop')
    }

    userProfile = {
      name: response.item.name as string,
      phone: response.item.phone as string,
      address: response.item.address as string,
      bio: response.item.bio as string,
    }

    if (Object.keys(userProfile).length) {
      isRegistered = true
    }
  }

  return (
    <div>
      <MyProfileShell isRegistered={isRegistered} userProfile={userProfile} />
      {isRegistered && <ApplicationDetailShell />}
    </div>
  )
}
