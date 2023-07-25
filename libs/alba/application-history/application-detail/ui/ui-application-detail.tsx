'use client'

import classNames from 'classnames/bind'

import { useRouter } from 'next/navigation'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-application-detail.module.scss'

const cx = classNames.bind(styles)

function UiRegisterApplication() {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleClickMoveNoticeList = () => {
    router.push('/')
  }

  return (
    <div className={cx('container')}>
      <UiSimpleLayout
        titleSize={isMobile ? 20 : 28}
        title="신청 내역"
        gap={isMobile ? 16 : 32}
      >
        <UiRegisterLayout
          text="아직 신청 내역이 없어요."
          registerButton={
            <div className={cx('buttonWrapper')}>
              <ActiveBtn
                text="공고 보러가기"
                size={isMobile ? 'mediumSmall' : 'large'}
                onClick={handleClickMoveNoticeList}
              />
            </div>
          }
        />
      </UiSimpleLayout>
    </div>
  )
}

function UiApplicationTable({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={cx('container')}>
      <UiSimpleLayout
        title="신청 내역"
        titleSize={isMobile ? 20 : 28}
        gap={isMobile ? 16 : 32}
      >
        {children}
      </UiSimpleLayout>
    </div>
  )
}

export { UiRegisterApplication, UiApplicationTable }
