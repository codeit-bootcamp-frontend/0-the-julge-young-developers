import classNames from 'classnames/bind'

import styles from './ui-usertype-selection.module.scss'
import UiButtonContainer from '../ui-button-container/ui-button-container'

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
