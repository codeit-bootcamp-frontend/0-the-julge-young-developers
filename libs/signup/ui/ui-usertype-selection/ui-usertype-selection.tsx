import classNames from 'classnames/bind'

import { UserTypeProps } from '@/libs/signup/type-signup'
import UiButtonContainer from '@/libs/signup/ui/ui-button-container/ui-button-container'

import styles from './ui-usertype-selection.module.scss'

const cx = classNames.bind(styles)

export default function UiUsertypeSelection({
  userType,
  onClick,
}: UserTypeProps) {
  return (
    <div className={cx('userTypeSelection')}>
      <div>
        <span className={cx('label')}>회원 유형</span>
      </div>
      <UiButtonContainer userType={userType} onClick={onClick} />
    </div>
  )
}
