import classnames from 'classnames/bind'

import { UiToastProps } from '@/libs/shared/toast/type-toast'

import styles from './ui-toast.module.scss'

const cx = classnames.bind(styles)

export default function UiToast({ status, children }: UiToastProps) {
  return <div className={cx('toastContent', status)}>{children}</div>
}
