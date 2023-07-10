import classnames from 'classnames/bind'

import Image from 'next/image'
import Link from 'next/link'

import styles from '@/libs/footer/ui/ui-footer/ui-footer.module.scss'

const cx = classnames.bind(styles)

export default function UiFooter() {
  return (
    <footer className={cx('footer')}>
      <div className={cx('wrapper')}>
        <p className={cx('copyright')}>©codeit - 2023</p>
        <div className={cx('links')}>
          <Link href="/" className={cx('link')}>
            <span>Privacy Policy</span>
          </Link>
          <Link href="/" className={cx('link')}>
            <span>FAQ</span>
          </Link>
        </div>
        <div className={cx('socials')}>
          <div className={cx('socialWrapper')}>
            <Image
              src="/images/envelop-square.svg"
              alt="email"
              width={21.88}
              height={21.88}
            />
          </div>
          <div className={cx('socialWrapper')}>
            <Image
              src="/images/facebook-square.svg"
              alt="facebook"
              width={21.88}
              height={21.88}
            />
          </div>
          <div className={cx('socialWrapper')}>
            <Image
              src="/images/instagram.svg"
              alt="instagram"
              width={21.88}
              height={21.88}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
