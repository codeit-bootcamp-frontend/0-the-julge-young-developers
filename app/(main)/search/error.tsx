'use client'

import classNames from 'classnames/bind'

import styles from './error.module.scss'

const cx = classNames.bind(styles)

export default function Error({
  reset,
  error,
}: {
  error: Error
  reset: () => void
}) {
  console.log(error.message)
  return (
    <div className={cx('errorContainer')}>
      <div className={cx('messageContainer')}>
        <div className={cx('headerContainer')}>
          <h2>검색 페이지에 알 수 없는 오류가 발생했습니다.</h2>
        </div>
        <div className={cx('buttonContainer')}>
          <button
            className={cx('button')}
            type="button"
            onClick={() => reset()}
          >
            페이지 새로 고침하기
          </button>
        </div>
      </div>
    </div>
  )
}
