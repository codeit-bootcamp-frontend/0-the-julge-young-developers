import { Options } from './type-select'

export interface InputProps {
  title: string
  defaultValue?: string
  isRequired: boolean
  suffix?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface Valid {
  valid: string
  isValid: boolean
}

export interface UiImageInputProps {
  title: string
  selectedImage: string
  onDropImgae: (e: React.DragEvent<HTMLDivElement>) => void
  onClickButton: () => void
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}

export type Variant = {
  variant: 'input' | 'explain'
}
export type FeatureInputProps = Variant &
  InputProps &
  Partial<Options> &
  Partial<Valid>
