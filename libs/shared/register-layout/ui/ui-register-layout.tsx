import classNames from 'classnames/bind'

import { UiRegisterLayoutProps } from '@/libs/shared/register-layout/type-register-layout'

import styles from './ui-register-layout.module.scss'

const cx = classNames.bind(styles)

export default function UiRegisterLayout({
  text,
  registerButton,
}: UiRegisterLayoutProps) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('text')}>{text}</p>
      <div className={cx('buttonWrapper')}>{registerButton}</div>
    </div>
  )
}
