import classnames from 'classnames/bind'

import styles from './data-access-modal-content-mock.module.scss'

const cx = classnames.bind(styles)

export default function MockModalContent() {
  return (
    <>
      <h1 className={cx('title')}>가게 정보</h1>
      <form>
        <h3 className={cx('subTitle')}>가게 이름</h3>
        <div className={cx('inputWrapper')}>
          <input className={cx('input')} type="text" placeholder="입력" />
        </div>
        <h3 className={cx('subTitle')}>주소</h3>
        <div className={cx('inputWrapper')}>
          <input className={cx('input')} type="text" placeholder="입력" />
        </div>
        <h3 className={cx('subTitle')}>기본 시급</h3>
        <div className={cx('inputWrapper')}>
          <input className={cx('input')} type="text" placeholder="입력" />
        </div>
        <h3 className={cx('subTitle')}>가게 설명</h3>
        <div className={cx('inputWrapper')}>
          <input className={cx('input')} type="text" placeholder="입력" />
        </div>
        <h3 className={cx('subTitle')}>공고 설명</h3>
        <div className={cx('inputWrapper')}>
          <input className={cx('input')} type="text" placeholder="입력" />
        </div>
        <button className={cx('register')} type="button">
          등록하기
        </button>
      </form>
    </>
  )
}
