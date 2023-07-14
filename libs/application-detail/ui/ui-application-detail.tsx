'use client'

import classNames from 'classnames/bind'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-application-detail.module.scss'

const cx = classNames.bind(styles)

export default function UiApplicationDetail() {
  return (
    <div className={cx('container')}>
      <UiSimpleLayout title="신청 내역" gap={32}>
        <UiRegisterLayout
          text="아직 신청 내역이 없어요."
          registerButton={
            <div className={cx('buttonWrapper')}>
              <ActiveBtn
                text="공고 보러가기"
                size="large"
                onClick={() => console.log('공고 페이지 이동')}
              />
            </div>
          }
        />
      </UiSimpleLayout>
    </div>
  )
}
