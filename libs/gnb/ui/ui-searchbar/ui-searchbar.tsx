import classNames from 'classnames/bind'

import styles from './ui-searchbar.module.scss'

const cx = classNames.bind(styles)

export default function UiSearchbar() {
  return (
    <input placeholder="가게 이름으로 찾아보세요" className={cx('searchbar')} />
  )
}
