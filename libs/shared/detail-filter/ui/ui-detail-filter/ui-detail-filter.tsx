'use client'

import classNames from 'classnames/bind'

import Image from 'next/image'

import {
  ActiveBtn,
  ActiveOutlineBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { LOCATIONS } from '@/libs/shared/detail-filter/data-access/data-access-location'
import { UiDetailFilterProps } from '@/libs/shared/detail-filter/type-detail-filter'
import UiDivider from '@/libs/shared/detail-filter/ui/ui-divider/ui-divider'
import UiLocationContainer from '@/libs/shared/detail-filter/ui/ui-location-container/ui-location-container'
import UiSelectedChip from '@/libs/shared/detail-filter/ui/ui-selected-chip/ui-selected-chip'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-detail-filter.module.scss'

const cx = classNames.bind(styles)

export default function UiDetailFilter({
  selectedLocations,
  onSelectLocation,
  onCancelLocation,
  onClickInitButton,
  onClickApplyButton,
  onClickCloseButton,
  startInputRef,
  priceInputRef,
}: UiDetailFilterProps) {
  return (
    <div className={cx('filterContainer')}>
      <button
        className={cx('closeButton')}
        type="button"
        onClick={onClickCloseButton}
      >
        <Image src="/images/close.svg" alt="닫기" width={24} height={24} />
      </button>
      <UiSimpleLayout title="상세 필터" titleSize={20} gap={24}>
        <div className={cx('filterContent')}>
          <div className={cx('section')}>
            <h2 className={cx('subtitle')}>위치</h2>
            <UiLocationContainer
              locations={LOCATIONS}
              onSelect={onSelectLocation}
            />
            {selectedLocations.size !== 0 && (
              <div className={cx('selectedChipContainer')}>
                {Array.from(selectedLocations).map((location) => (
                  <UiSelectedChip key={location} onCancel={onCancelLocation}>
                    {location}
                  </UiSelectedChip>
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
              ref={startInputRef}
            />
          </div>
          <UiDivider />
          <div className={cx('section')}>
            <div className={cx('priceInput')}>
              <Input
                variant="input"
                title="금액"
                isRequired={true}
                suffix="원"
                ref={priceInputRef}
              />
              <span className={cx('sideText')}>이상부터</span>
            </div>
          </div>
        </div>
        <div className={cx('buttonContainer')}>
          <div className={cx('initButton')}>
            <ActiveOutlineBtn text="초기화" size="large" onClick={onClickInitButton} />
          </div>
          <div className={cx('applyButton')}>
            <ActiveBtn text="적용하기" size="large" onClick={onClickApplyButton} />
          </div>
        </div>
      </UiSimpleLayout>
    </div>
  )
}
