import { ForwardedRef } from 'react'

export type Option = {
  value: string
}

export interface Options {
  options: Option[]
}

export interface SelectProps {
  title: string
  isRequired: boolean
  options: Option[]
  defaultValueIdx: number
}

export interface UiSearchSelectProps {
  isOpen: boolean
  selectedOption: string
  dropdownRef: ForwardedRef<HTMLDivElement>
  toggleDropdown: () => void
  onClickOptionSelect: (value: string) => void
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}
