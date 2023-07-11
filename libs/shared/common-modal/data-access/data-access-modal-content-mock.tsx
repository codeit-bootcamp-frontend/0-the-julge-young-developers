import classNames from 'classnames/bind'

import UiCommonLayout from '@/libs/shared/common-layout/ui/ui-common-layout/ui-common-layout'

import styles from './data-access-modal-content-mock.module.scss'

const cx = classNames.bind(styles)

export default function MockModalContent() {
  return (
    <UiCommonLayout
      title="가게 정보"
      titleSize={28}
      titleAlign="start"
      gap={32}
    >
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
    </UiCommonLayout>
  )
}

/**
 * CommonModal의 예시 content mock 데이터입니다.
 * 
 * 사용 예시
 * <UiCommonModal padding="60px 32px">
      <MockModalContent />
    </UiCommonModal>
 */
