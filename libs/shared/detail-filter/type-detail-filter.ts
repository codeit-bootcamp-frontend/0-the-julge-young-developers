import { RefObject } from 'react'

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
  startInputRef: RefObject<HTMLInputElement>
  priceInputRef: RefObject<HTMLInputElement>
  isPriceValid: boolean
}

interface DetailFilterProps {
  onClickCloseButton: (isShow: boolean) => void
  onClickApplyButton: (
    selectedLocations: string[],
    start: string | undefined,
    price: number | undefined,
  ) => void
}

export type { UiLocationContainerProps, UiDetailFilterProps, DetailFilterProps }
