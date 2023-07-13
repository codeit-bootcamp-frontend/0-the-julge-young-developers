'use client'

import classNames from 'classnames/bind'

import { UserTypeProps } from '@/libs/signup/type-signup'
import UiTypeButton from '@/libs/signup/ui/ui-type-button/ui-type-button'

import styles from './ui-button-container.module.scss'

const cx = classNames.bind(styles)

export default function UiButtonContainer({
  userType,
  onClick,
}: UserTypeProps) {
  return (
    <div className={cx('buttonContainer')}>
      <UiTypeButton
        type="employee"
        isButtonClicked={userType === 'employee'}
        onClick={onClick}
      />
      <UiTypeButton
        type="employer"
        isButtonClicked={userType === 'employer'}
        onClick={onClick}
      />
    </div>
  )
}
