import classNames from 'classnames/bind'

import styles from './ui-searchbar.module.scss'

const cx = classNames.bind(styles)

export default function UiSearchbar({
  searchInput,
  onChangeInput,
  onPressEnter,
}: {
  searchInput: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      value={searchInput}
      onChange={onChangeInput}
      onKeyDown={onPressEnter}
      placeholder="가게 이름으로 찾아보세요"
      className={cx('searchbar')}
    />
  )
}
