import classNames from 'classnames/bind'

import styles from './ui-button.module.scss'

const cx = classNames.bind(styles)

interface Props {
  name: string
  handleClickButton: () => void
}

export default function UiButton({ name, handleClickButton }: Props) {
  return (
    <button type="button" onClick={handleClickButton} className={cx('button')}>
      {name}
    </button>
  )
}
