'use client'

import classNames from 'classnames/bind'

import MyProfile from '@/libs/alba/my-profile/my-profile-alice2/feature/my-profile'
import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './my-profile-shell.module.scss'
import RegisterBtn from './register-btn'

const cx = classNames.bind(styles)

interface MyProfileShellProps {
  isRegistered: boolean
  userProfile?: {
    name: string
    phone: string
    address: string
    bio: string
  }
}

export default function MyProfileShell({
  isRegistered,
  userProfile,
}: MyProfileShellProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <div className={cx('profileWrapper')}>
      <UiSimpleLayout
        titleSize={isMobile ? 20 : 28}
        title="내 프로필"
        gap={isMobile ? 16 : 32}
      >
        {!isRegistered && (
          <UiRegisterLayout
            text="내 프로필을 등록하고 원하는 가게에 지원해 보세요."
            registerButton={<RegisterBtn />}
          />
        )}
        {isRegistered && userProfile && <MyProfile {...userProfile} />}
      </UiSimpleLayout>
    </div>
  )
}
