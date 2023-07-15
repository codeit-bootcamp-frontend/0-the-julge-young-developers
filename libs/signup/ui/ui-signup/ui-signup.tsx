'use client'

import { MutableRefObject } from 'react'

import classnames from 'classnames/bind'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'
import { UserType } from '@/libs/signup/type-signup'
import UiUsertypeSelection from '@/libs/signup/ui/ui-usertype-selection/ui-usertype-selection'

import styles from './ui-signup.module.scss'

const cx = classnames.bind(styles)

export default function UiSignUp({
  userInputRefs,
  validEmail,
  validPw,
  validPwRepeat,
  userType,
  utilCheck,
  handleClickButton,
  handleClickSelectUserType,
}: {
  userInputRefs: MutableRefObject<HTMLInputElement[]>
  validEmail: boolean
  validPw: boolean
  validPwRepeat: boolean
  userType: UserType
  utilCheck: (type: string, value: string) => void
  handleClickButton: () => void
  handleClickSelectUserType: (type: UserType) => void
}) {
  return (
    <div className={cx('wrapper')}>
      <UiSimpleLayout
        title="회원가입"
        titleAlign="center"
        titleSize={28}
        gap={40}
      >
        <form className={cx('form')}>
          <Input
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => utilCheck('email', e.currentTarget.value)}
            variant="input"
            title="이메일"
            valid="잘못된 이메일입니다."
            isValid={!validEmail}
            isRequired={true}
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[0] = el)}
          />
          <Input
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => utilCheck('pw', e.currentTarget.value)}
            variant="input"
            title="비밀번호"
            valid="비밀번호는 영문+숫자 조합해서 8자리 이상이어야 합니다."
            isValid={!validPw}
            isRequired={true}
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[1] = el)}
          />
          <Input
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            ) => utilCheck('pwRepeat', e.currentTarget.value)}
            variant="input"
            title="비밀번호 확인"
            valid="비밀번호가 일치하지 않습니다."
            isValid={!validPwRepeat}
            isRequired={true}
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[2] = el)}
          />
          <UiUsertypeSelection
            userType={userType}
            onClick={handleClickSelectUserType}
          />
          <ActiveBtn text="가입하기" size="large" onClick={handleClickButton} />
        </form>
      </UiSimpleLayout>
    </div>
  )
}
