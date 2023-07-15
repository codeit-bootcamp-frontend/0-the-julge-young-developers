import { Options } from './type-select'

export interface InputProps {
  variant: string
  title: string
  defaultValue?: string
  isRequired: boolean
  suffix?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
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
  variant: 'input' | 'explain' | 'input-underline' | 'explain-underline'
}
export type FeatureInputProps = Variant &
  InputProps &
  Partial<Options> &
  Partial<Valid>
