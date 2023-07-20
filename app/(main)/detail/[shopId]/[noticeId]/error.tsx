'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import styles from './error.module.scss'

const cx = classNames.bind(styles)

export default function ErrorPage({
  reset,
  error,
}: {
  error: Error
  reset: () => void
}) {
  const router = useRouter()
  console.log(error.message)
  return (
    <div className={cx('errorContainer')}>
      <div className={cx('errorContent')}>
        <div className={cx('messageBox')}>
          <h1 className={cx('description')}>
            페이지에 알 수 없는 오류가 발생했습니다.
          </h1>
          <div className={cx('buttonContainer')}>
            <button
              className={cx('refreshButton')}
              type="button"
              onClick={() => reset()}
            >
              새로 고침
            </button>
            <button
              className={cx('homeButton')}
              type="button"
              onClick={() => router.push('/')}
            >
              홈으로 이동
            </button>
          </div>
        </div>
        <Image
          className={cx('errorContentImage')}
          src="/images/error-hero.svg"
          alt="error-hero"
          width={600}
          height={322}
        />
        <Image
          className={cx('oops')}
          src="/images/oops.svg"
          alt="oops"
          width={347}
          height={217}
        />
      </div>
    </div>
  )
}
