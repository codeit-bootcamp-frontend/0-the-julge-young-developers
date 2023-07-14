import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import RegisterBtn from './register-btn'

export default function UnregisteredMyProfile({
  userProfileData,
}: {
  userProfileData: object | undefined // 임시 데이터 typescript
}) {
  return (
    <UiSimpleLayout title="내 프로필" gap={24}>
      {!userProfileData && (
        <UiRegisterLayout
          text="내 프로필을 등록하고 원하는 가게에 지원해 보세요."
          registerButton={<RegisterBtn />}
        />
      )}
    </UiSimpleLayout>
  )
}
