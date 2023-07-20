'use client'

import { MutableRefObject } from 'react'

import classnames from 'classnames/bind'

import { ActiveBtn } from '@/libs/shared/click-btns/feature/click-btns'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-signin.module.scss'

const cx = classnames.bind(styles)

export default function UiSignIn({
  userInputRefs,
  handleClickButton,
}: {
  userInputRefs: MutableRefObject<HTMLInputElement[]>
  handleClickButton: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <div className={cx('wrapper')}>
      <UiSimpleLayout
        title="로그인"
        titleAlign="center"
        titleSize={28}
        gap={40}
      >
        <form className={cx('form')} onSubmit={handleClickButton}>
          <Input
            variant="input"
            title="이메일"
            isValid={false}
            isRequired={true}
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[0] = el)}
          />
          <Input
            isPassowrd={true}
            variant="input"
            title="비밀번호"
            isValid={false}
            isRequired={true}
            // eslint-disable-next-line no-return-assign, no-param-reassign
            ref={(el: HTMLInputElement) => (userInputRefs.current[1] = el)}
          />
          <ActiveBtn text="로그인 하기" size="large" type="submit" />
        </form>
      </UiSimpleLayout>
    </div>
  )
}
