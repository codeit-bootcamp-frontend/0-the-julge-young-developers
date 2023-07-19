'use client'

import { useRef, useState } from 'react'

import { DetailFilterProps } from '@/libs/shared/detail-filter/type-detail-filter'
import UiDetailFilter from '@/libs/shared/detail-filter/ui/ui-detail-filter/ui-detail-filter'

/**
 * @param onClickCloseButton 상세 필터 close 이벤트 핸들러 함수
 * @param onClickApplyButton 상세 필터 옵션값을 이용해 api 요청하는 이벤트 핸들러 함수
 * @returns 상세 필터 리턴
 */
export default function DetailFilter({
  onClickCloseButton,
  onClickApplyButton,
}: DetailFilterProps) {
  const [selectedLocations, setSelectedLocations] = useState<Set<string>>(
    new Set(),
  )

  const [isNumber, setIsNumber] = useState<boolean>(false)
  const startInputRef = useRef<HTMLInputElement>(null)
  const priceInputRef = useRef<HTMLInputElement>(null)

  const handleClickInitButton = () => {
    setSelectedLocations(new Set<string>())
    if (startInputRef.current) {
      startInputRef.current.value = ''
    }
    if (priceInputRef.current) {
      priceInputRef.current.value = ''
    }
  }

  const handleClickApplyButton = () => {
    if (priceInputRef.current?.value) {
      if (!Number(priceInputRef.current?.value)) {
        setIsNumber(true)
        return
      }
      setIsNumber(false)
    }
    const locationsArray = Array.from(selectedLocations)
    const numberPrice = Number(priceInputRef.current?.value)
    if (startInputRef.current) {
      onClickApplyButton({
        startDate: startInputRef.current.value,
        price: numberPrice,
        locations: locationsArray,
      })
    }
    onClickCloseButton(false)
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
    <UiDetailFilter
      selectedLocations={selectedLocations}
      onSelectLocation={handleSelectLocation}
      onCancelLocation={handleCancelLocation}
      onClickInitButton={handleClickInitButton}
      onClickApplyButton={handleClickApplyButton}
      onClickCloseButton={() => onClickCloseButton(false)}
      startInputRef={startInputRef}
      priceInputRef={priceInputRef}
      isPriceValid={isNumber}
    />
  )
}
