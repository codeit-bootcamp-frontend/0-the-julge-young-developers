import classnames from 'classnames/bind'

import styles from './ui-common-toast.module.scss'

const cx = classnames.bind(styles)

export default function UiCommonToast({
  status,
  children,
}: UiCommonToastProps) {
  return <div className={cx('toastContent', status)}>{children}</div>
}
