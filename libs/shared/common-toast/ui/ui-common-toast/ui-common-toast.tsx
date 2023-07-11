import classNames from 'classnames/bind'

import styles from './ui-common-toast.module.scss'

interface UiCommonToastProps {
  children: string
}

const cx = classNames.bind(styles)

export default function UiCommonToast({ children }: UiCommonToastProps) {
  return <div className={cx('toastContent')}>{children}</div>
}
