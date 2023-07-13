'use client'

import { useRef, useState } from 'react'

import classNames from 'classnames/bind'

import Image from 'next/image'

import {
  CommonActiveBtn,
  CommonActiveOutlineBtn,
} from '@/libs/shared/common-click-btn/feature/common-btn'
import { LOCATIONS } from '@/libs/shared/detail-filter/data-access/data-access-location'
import UiDivider from '@/libs/shared/detail-filter/ui/ui-divider/ui-divider'
import UiLocationContainer from '@/libs/shared/detail-filter/ui/ui-location-container/ui-location-container'
import UiSelectedChip from '@/libs/shared/detail-filter/ui/ui-selected-chip/ui-selected-chip'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-detail-filter.module.scss'

const cx = classNames.bind(styles)

export default function UiDetailFilter() {
  const [selectedLocations, setSelectedLocations] = useState<Set<string>>(
    new Set(),
  )
  const startInputRef = useRef<HTMLInputElement>(null)
  const priceInputRef = useRef<HTMLInputElement>(null)

  const handleInit = () => {
    setSelectedLocations(new Set<string>())
    if (startInputRef.current) {
      startInputRef.current.value = ''
    }
    if (priceInputRef.current) {
      priceInputRef.current.value = ''
    }
  }

  const handleApply = () => {
    console.log('선택 위치:', selectedLocations)
    console.log('시작일:', startInputRef.current?.value)
    console.log('금액:', priceInputRef.current?.value)
  }

  const handleSelectLocation = (location: string) => {
    selectedLocations.add(location)
    setSelectedLocations(new Set(selectedLocations))
  }

  const handleCancelLocation = (location: string) => {
    selectedLocations.delete(location)
    setSelectedLocations(new Set(selectedLocations))
  }

  return (
    <div className={cx('filterContainer')}>
      <button className={cx('closeButton')} type="button">
        <Image src="/images/close.svg" alt="닫기" width={24} height={24} />
      </button>
      <UiSimpleLayout title="상세 필터" titleSize={20} gap={24}>
        <div className={cx('filterContent')}>
          <div className={cx('section')}>
            <h2 className={cx('subtitle')}>위치</h2>
            <UiLocationContainer
              locations={LOCATIONS}
              onSelect={handleSelectLocation}
            />
            {selectedLocations.size !== 0 && (
              <div className={cx('selectedChipContainer')}>
                {Array.from(selectedLocations).map((location) => (
                  <UiSelectedChip
                    key={location}
                    onCancel={handleCancelLocation}
                  >
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
                ref={priceInputRef}
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
              onClick={handleInit}
            />
          </div>
          <div className={cx('applyButton')}>
            <CommonActiveBtn
              text="적용하기"
              size="large"
              onClick={handleApply}
            />
          </div>
        </div>
      </UiSimpleLayout>
    </div>
  )
}
