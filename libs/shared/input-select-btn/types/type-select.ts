import { ForwardedRef } from 'react'

export type Option = {
  value: string
}

export interface Options {
  options: Option[]
}

export interface SelectProps {
  variant: 'search' | 'filter'
  title?: string
  isRequired?: boolean
  options: Option[]
  defaultValueIdx: number
}

export interface UiSearchSelectProps {
  variant: 'search' | 'filter'
  title?: string
  isOpen: boolean
  dropdownRef: ForwardedRef<HTMLDivElement>
  toggleDropdown: () => void
  onClickOptionSelect: (value: string) => void
  children: React.ReactNode
}

export interface UiSelectTopShellProps {
  variant: 'search' | 'filter'
  isRequired?: boolean
  selectedOption: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}
