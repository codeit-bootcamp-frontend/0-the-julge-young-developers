import { RefObject } from 'react'

import { FilterDatas } from '@/libs/notice-list/type-notice-list'

interface UiLocationContainerProps {
  locations: string[]
  onSelect: (location: string) => void
}

interface UiDetailFilterProps {
  selectedLocations: Set<string>
  onSelectLocation: (Location: string) => void
  onCancelLocation: (Location: string) => void
  onClickInitButton: () => void
  onClickApplyButton: () => void
  onClickCloseButton: () => void
  onSelectStartDate: (selectDate: Date) => void
  startDate: Date
  priceInputRef: RefObject<HTMLInputElement>
  isPriceValid: boolean
}

interface DetailFilterProps {
  onClickCloseButton: (isShow: boolean) => void
  onClickApplyButton: ({
    startDate,
    price,
    locations,
  }: FilterDatas) => Promise<void>
}

export type { UiLocationContainerProps, UiDetailFilterProps, DetailFilterProps }
