'use client'

import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-application-detail.module.scss'

const cx = classNames.bind(styles)

function UiRegisterApplication() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)

  useEffect(() => {
    if (isMobile) {
      setIsMobileSize(true)
    } else {
      setIsMobileSize(false)
    }
  }, [isMobile])

  return (
    <div className={cx('container')}>
      <UiSimpleLayout
        title="신청 내역"
        titleSize={isMobileSize ? 20 : 28}
        gap={isMobileSize ? 16 : 32}
      >
        <UiRegisterLayout
          text="아직 신청 내역이 없어요."
          registerButton={
            <div className={cx('buttonWrapper')}>
              <ActiveBtn
                text="공고 보러가기"
                size={isMobileSize ? 'mediumSmall' : 'large'}
                onClick={() => console.log('공고 페이지 이동')}
              />
            </div>
          }
        />
      </UiSimpleLayout>
    </div>
  )
}

function UiApplicationTable() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)

  useEffect(() => {
    if (isMobile) {
      setIsMobileSize(true)
    } else {
      setIsMobileSize(false)
    }
  }, [isMobile])

  return (
    <div className={cx('container')}>
      <UiSimpleLayout
        title="신청 내역"
        titleSize={isMobileSize ? 20 : 28}
        gap={isMobileSize ? 16 : 32}
      >
        <div>테이블 넣는 곳</div>
      </UiSimpleLayout>
    </div>
  )
}

export { UiRegisterApplication, UiApplicationTable }
