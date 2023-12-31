import { ChangeEvent, ForwardedRef } from 'react'

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
  defaultValue?: string
  onClick?: (value: string) => void
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
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
  title?: 'string'
  variant: 'search' | 'filter'
  isRequired?: boolean
  isOpen: boolean
  selectedOption: string
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}
