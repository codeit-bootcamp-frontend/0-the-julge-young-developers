'use client'

import { useState } from 'react'

import classNames from 'classnames/bind'

import UiTypeButton from '@/libs/signup/ui/ui-type-button/ui-type-button'

import styles from './ui-button-container.module.scss'

const cx = classNames.bind(styles)

export default function UiButtonContainer() {
  const [userType, setUserType] = useState('employee')

  const handleClickButton = (type: string) => {
    if (userType !== type) {
      setUserType(type)
    }
  }

  return (
    <div className={cx('buttonContainer')}>
      <UiTypeButton
        type="employee"
        isButtonClicked={userType === 'employee'}
        handleClick={handleClickButton}
      />
      <UiTypeButton
        type="employer"
        isButtonClicked={userType === 'employer'}
        handleClick={handleClickButton}
      />
    </div>
  )
}
