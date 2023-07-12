import classNames from 'classnames/bind'

import UiButtonContainer from '@/libs/signup/ui/ui-button-container/ui-button-container'

import styles from './ui-usertype-selection.module.scss'

const cx = classNames.bind(styles)

export default function UiUsertypeSelection() {
  return (
    <div className={cx('userTypeSelection')}>
      <div>
        <span className={cx('label')}>회원 유형</span>
      </div>
      <UiButtonContainer />
    </div>
  )
}
