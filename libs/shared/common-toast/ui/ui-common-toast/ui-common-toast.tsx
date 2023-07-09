import classnames from 'classnames/bind'

import styles from './ui-common-toast.module.scss'

interface UiCommonToastProps {
  children: string
}

const cx = classnames.bind(styles)

export default function UiCommonToast({ children }: UiCommonToastProps) {
  return <div className={cx('toastContent')}>{children}</div>
}
