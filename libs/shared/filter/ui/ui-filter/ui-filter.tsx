import classNames from 'classnames/bind'

import UiCommonLayout from '@/libs/shared/common-layout/ui/ui-common-layout/ui-common-layout'
import UiCommonModal from '@/libs/shared/common-modal/ui/ui-common-modal/ui-common-modal'
import { LOCATIONS } from '@/libs/shared/filter/data-access/data-access-location'
import UiDivider from '@/libs/shared/filter/ui/ui-divider/ui-divider'
import UiLocationContainer from '@/libs/shared/filter/ui/ui-location-container/ui-location-container'

import styles from './ui-filter.module.scss'

const cx = classNames.bind(styles)

export default function UiFilter() {
  return (
    <div className={cx('filterContainer')}>
      <UiCommonModal
        padding="24px 20px"
        closeButtonSize={24}
        backgroundColor="White"
      >
        <UiCommonLayout title="상세 필터" titleSize={20} gap={24}>
          <div className={cx('filterContent')}>
            <div>
              <h2 className={cx('subtitle')}>위치</h2>
              <UiLocationContainer locations={LOCATIONS} />
            </div>
            <UiDivider />
            <div>
              <h2 className={cx('subtitle')}>시작일</h2>
              <div className={cx('inputWrapper', 'startInput')}>
                <input placeholder="입력" />
              </div>
            </div>
            <UiDivider />
            <div>
              <h2 className={cx('subtitle')}>금액</h2>
              <div className={cx('inputContainer')}>
                <div className={cx('inputWrapper', 'priceInput')}>
                  <input placeholder="입력" />
                </div>
                이상부터
              </div>
            </div>
          </div>
          <div className={cx('buttonContainer')}>
            <button className={cx('initButton')} type="button">
              초기화
            </button>
            <button className={cx('applyButton')} type="button">
              적용하기
            </button>
          </div>
        </UiCommonLayout>
      </UiCommonModal>
    </div>
  )
}
