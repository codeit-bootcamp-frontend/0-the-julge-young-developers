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
