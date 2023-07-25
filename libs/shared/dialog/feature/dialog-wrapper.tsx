'use clinet'

import classNames from 'classnames/bind'

import styles from './dialog-wrapper.module.scss'

const cx = classNames.bind(styles)

interface IModalLayoutProps {
  children: React.ReactNode
}

function ModalLayout({ children }: IModalLayoutProps) {
  return <div className={cx('overlay')}>{children}</div>
}

export default ModalLayout
