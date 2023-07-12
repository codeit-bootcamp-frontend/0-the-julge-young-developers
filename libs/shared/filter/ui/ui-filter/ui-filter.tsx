'use client'

import { useRef } from 'react'

import classNames from 'classnames/bind'

import {
  CommonActiveBtn,
  CommonActiveOutlineBtn,
} from '@/libs/shared/common-click-btn/feature/common-btn'
import UiCommonLayout from '@/libs/shared/common-layout/ui/ui-common-layout/ui-common-layout'
import UiCommonModal from '@/libs/shared/common-modal/ui/ui-common-modal/ui-common-modal'
import { LOCATIONS } from '@/libs/shared/filter/data-access/data-access-location'
import { MOCK_SELECTED_LOCATIONS } from '@/libs/shared/filter/data-access/data-access-mock'
import UiDivider from '@/libs/shared/filter/ui/ui-divider/ui-divider'
import UiLocationContainer from '@/libs/shared/filter/ui/ui-location-container/ui-location-container'
import UiSelectedChip from '@/libs/shared/filter/ui/ui-selected-chip/ui-selected-chip'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'

import styles from './ui-filter.module.scss'

const cx = classNames.bind(styles)

export default function UiFilter() {
  const inputRef = useRef(null)
  return (
    <div className={cx('filterContainer')}>
      <UiCommonModal
        padding="24px 20px"
        closeButtonSize={24}
        backgroundColor="White"
      >
        <UiCommonLayout title="상세 필터" titleSize={20} gap={24}>
          <div className={cx('filterContent')}>
            <div className={cx('section')}>
              <h2 className={cx('subtitle')}>위치</h2>
              <UiLocationContainer locations={LOCATIONS} />
              {MOCK_SELECTED_LOCATIONS.length !== 0 && (
                <div className={cx('selectedChipContainer')}>
                  {MOCK_SELECTED_LOCATIONS.map((location) => (
                    <UiSelectedChip key={location}>{location}</UiSelectedChip>
                  ))}
                </div>
              )}
            </div>
            <UiDivider />
            <div className={cx('section')}>
              <Input
                variant="input"
                title="시작일"
                isRequired={true}
                // ref={inputRef}
              />
            </div>
            <UiDivider />
            <div className={cx('section')}>
              {/* <h2 className={cx('subtitle')}>금액</h2>
              <div className={cx('inputContainer')}>
                <div className={cx('inputWrapper', 'priceInput')}>
                  <input placeholder="입력" />
                  <span>원</span>
                </div>
                이상부터
              </div> */}
              <div className={cx('priceInput')}>
                <Input
                  variant="input"
                  title="금액"
                  isRequired={true}
                  ref={inputRef}
                  suffix="원"
                />
                <span className={cx('sideText')}>이상부터</span>
              </div>
            </div>
          </div>
          <div className={cx('buttonContainer')}>
            <div className={cx('initButton')}>
              <CommonActiveOutlineBtn
                text="초기화"
                size="large"
                onClick={() => {
                  console.log('초기화')
                }}
              />
            </div>
            <div className={cx('applyButton')}>
              <CommonActiveBtn
                text="적용하기"
                size="large"
                onClick={() => {
                  console.log('적용하기')
                }}
              />
            </div>
            {/* <button className={cx('initButton')} type="button">
              초기화
            </button>
            <button className={cx('applyButton')} type="button">
              적용하기
            </button> */}
          </div>
        </UiCommonLayout>
      </UiCommonModal>
    </div>
  )
}
