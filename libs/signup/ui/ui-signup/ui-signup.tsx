'use client'

import classnames from 'classnames/bind'

import { CommonActiveBtn } from '@/libs/shared/common-click-btn/feature/common-btn'
import UiCommonLayout from '@/libs/shared/common-layout/ui/ui-common-layout/ui-common-layout'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiUsertypeSelection from '@/libs/signup/ui/ui-usertype-selection/ui-usertype-selection'

import styles from './ui-signup.module.scss'

const cx = classnames.bind(styles)

export default function UiSignUp({
  onClickSignUp,
}: {
  onClickSignUp: () => null
}) {
  const handleClickButton = () => {
    onClickSignUp()
  }

  return (
    <div className={cx('wrapper')}>
      <UiCommonLayout
        title="회원가입"
        titleAlign="center"
        titleSize={28}
        gap={40}
      >
        <form className={cx('form')}>
          <Input
            variant="input"
            title="이메일"
            valid="잘못된 이메일입니다."
            isValid={false}
            isRequired={true}
          />
          <Input
            variant="input"
            title="비밀번호"
            isValid={false}
            isRequired={true}
          />
          <Input
            variant="input"
            title="비밀번호 확인"
            valid="비밀번호가 일치하지 않습니다."
            isValid={false}
            isRequired={true}
          />
          <UiUsertypeSelection />
          <CommonActiveBtn
            text="가입하기"
            size="large"
            onClick={handleClickButton}
          />
        </form>
      </UiCommonLayout>
    </div>
  )
}
