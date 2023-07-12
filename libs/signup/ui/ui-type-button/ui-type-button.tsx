import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-type-button.module.scss'
import { TypeButtonProps } from '../../type-signup'

const cx = classNames.bind(styles)

export default function UiTypeButton({
  type,
  isButtonClicked,
  handleClick,
}: TypeButtonProps) {
  return (
    <button
      type="button"
      onClick={() => handleClick(type)}
      className={cx(
        'typeButton',
        isButtonClicked ? 'clickedButton' : 'unclickedButton',
      )}
    >
      <div className={cx('contentWrapper')}>
        <div
          className={cx(
            'checker',
            isButtonClicked ? 'clickedChecker' : 'unclickedChecker',
          )}
        >
          <Image
            src="/images/checked.svg"
            width={14}
            height={14}
            alt="checkmark"
          />
        </div>
        <span className={cx('buttonName')}>
          {type === 'employee' ? '알바님' : '사장님'}
        </span>
      </div>
    </button>
  )
}