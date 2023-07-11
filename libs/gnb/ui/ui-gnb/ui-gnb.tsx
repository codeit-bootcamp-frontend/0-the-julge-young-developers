import classNames from 'classnames/bind'

import Image from 'next/image'
import Link from 'next/link'

import styles from './ui-gnb.module.scss'
import UiButton from '../ui-button/ui-button'
import UiSearchbar from '../ui-searchbar/ui-searchbar'

const cx = classNames.bind(styles)

export default function UiGnb({
  isLogin,
  hasNotification,
  handleClickMovePage,
  handleClickOpenModal,
}: Props) {
  return (
    <nav className={cx('gnb')}>
      <div className={cx('wrapper')}>
        <Link href="/" className={cx('logo')}>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={112}
            height={40}
            priority={true}
            className={cx('logo')}
          />
        </Link>
        <div className={cx('searchbar')}>
          <UiSearchbar />
        </div>

        {isLogin ? (
          <div className={cx('buttons')}>
            <UiButton name="내 가게" handleClickButton={handleClickMovePage} />
            <UiButton
              activeStatus={hasNotification ? 'active' : 'inactive'}
              handleClickButton={handleClickOpenModal}
            />
          </div>
        ) : (
          <div className={cx('buttons')}>
            <UiButton name="로그인" handleClickButton={handleClickMovePage} />
            <UiButton name="회원가입" handleClickButton={handleClickMovePage} />
          </div>
        )}
      </div>
    </nav>
  )
}
