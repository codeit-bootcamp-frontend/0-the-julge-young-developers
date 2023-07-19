import { Suspense } from 'react'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import ApplicationDetailShell from '@/libs/alba/application-history/shared/feature/application-detail-shell'
import MyProfileShell from '@/libs/alba/my-profile/my-profile-h/feature/my-profile-shell'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import CommonDomainLoader from '@/libs/shared/loading/feature/domain-loader'

export const revalidate = 3600
export default async function MyProfilePage({
  searchParams,
}: {
  searchParams: { page: string }
}) {
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
    throw new Error()
  } else if (typeof response === 'string') {
    // console.error(response)
    throw new Error(response)
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

    if (
      userProfile.name &&
      userProfile.phone &&
      userProfile.address &&
      userProfile.bio
    ) {
      isRegistered = true
    }
  }

  const page =
    Number.isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1
      ? 1
      : Math.floor(Number(searchParams.page))

  return (
    <div>
      <MyProfileShell isRegistered={isRegistered} userProfile={userProfile} />

      <Suspense
        fallback={
          <CommonDomainLoader
            title="신청 내역"
            text="테이블 정보를 불러오고 있어요"
          />
        }
      >
        {isRegistered && <ApplicationDetailShell page={page} />}
      </Suspense>
    </div>
  )
}
