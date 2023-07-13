'use client'

import { MutableRefObject } from 'react'

import classnames from 'classnames/bind'

import { CommonActiveBtn } from '@/libs/shared/common-click-btn/feature/common-btn'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-signin.module.scss'

const cx = classnames.bind(styles)

export default function UiSignIn({
  userInputRefs,
  handleClickButton,
}: {
  userInputRefs: MutableRefObject<HTMLInputElement[]>
  handleClickButton: () => void
}) {
  return (
    <div className={cx('wrapper')}>
      <UiSimpleLayout
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
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[0] = el)}
          />
          <Input
            variant="input"
            title="비밀번호"
            isValid={false}
            isRequired={true}
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[1] = el)}
          />
          <CommonActiveBtn
            text="로그인 하기"
            size="large"
            onClick={handleClickButton}
          />
        </form>
      </UiSimpleLayout>
    </div>
  )
}
