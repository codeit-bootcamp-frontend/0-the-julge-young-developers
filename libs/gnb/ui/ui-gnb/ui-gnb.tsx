import classNames from 'classnames/bind'

import Image from 'next/image'
import Link from 'next/link'

import NotiButton from '@/libs/gnb/feature/noti-button'
import UiButton from '@/libs/gnb/ui/ui-button/ui-button'

import styles from './ui-gnb.module.scss'

const cx = classNames.bind(styles)

export default function UiGnb({
  userType,
  hasNotification,
  searchbarElement,
  handleClickMovePage,
  onCheckNotification,
}: GnbProps) {
  return (
    <div>
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
          <div className={cx('searchbar')}>{searchbarElement}</div>

          {userType === 'guest' && (
            <div className={cx('buttons')}>
              <UiButton
                name="로그인"
                id="login"
                handleClickButton={() => handleClickMovePage('signin')}
              />
              <UiButton
                name="회원가입"
                id="signup"
                handleClickButton={() => handleClickMovePage('signup')}
              />
            </div>
          )}
          {userType === 'employee' && (
            <div className={cx('buttons')}>
              <UiButton
                name="내 프로필"
                handleClickButton={() => handleClickMovePage('my-profile')}
              />
              <NotiButton
                onCheckNotification={onCheckNotification}
                activeStatus={hasNotification ? 'active' : 'inactive'}
              />
            </div>
          )}

          {userType === 'employer' && (
            <div className={cx('buttons')}>
              <UiButton
                name="내 가게"
                handleClickButton={handleClickMovePage}
              />
              <NotiButton
                onCheckNotification={onCheckNotification}
                activeStatus={hasNotification ? 'active' : 'inactive'}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
