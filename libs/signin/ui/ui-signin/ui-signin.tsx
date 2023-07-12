'use client'

import classnames from 'classnames/bind'

import { CommonActiveBtn } from '@/libs/shared/common-click-btn/feature/common-btn'
import UiCommonLayout from '@/libs/shared/common-layout/ui/ui-common-layout/ui-common-layout'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'

import styles from './ui-signin.module.scss'

const cx = classnames.bind(styles)

export default function UiSignIn({
  onClickSignIn,
}: {
  onClickSignIn: () => null
}) {
  const handleClickButton = () => {
    onClickSignIn()
  }

  return (
    <div className={cx('wrapper')}>
      <UiCommonLayout
        title="로그인"
        titleAlign="center"
        titleSize={28}
        gap={40}
      >
        <form className={cx('form')}>
          <Input
            variant="input"
            title="이메일"
            isValid={false}
            isRequired={true}
          />
          <Input
            variant="input"
            title="비밀번호"
            isValid={false}
            isRequired={true}
          />
          <CommonActiveBtn
            text="로그인 하기"
            size="large"
            onClick={handleClickButton}
          />
        </form>
      </UiCommonLayout>
    </div>
  )
}
