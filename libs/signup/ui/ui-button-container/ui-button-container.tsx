'use client'

import { useState } from 'react'

import classNames from 'classnames/bind'

import UiTypeButton from '@/libs/signup/ui/ui-type-button/ui-type-button'

import styles from './ui-button-container.module.scss'
import { UserType } from '../../type-signup'

const cx = classNames.bind(styles)

export default function UiButtonContainer() {
  const [userType, setUserType] = useState('employee')

  const handleClickSelectUserType = (type: UserType) => {
    if (userType !== type) {
      setUserType(type)
    }
  }

  return (
    <div className={cx('buttonContainer')}>
      <UiTypeButton
        type="employee"
        isButtonClicked={userType === 'employee'}
        onClick={handleClickSelectUserType}
      />
      <UiTypeButton
        type="employer"
        isButtonClicked={userType === 'employer'}
        onClick={handleClickSelectUserType}
      />
    </div>
  )
}
