export interface InputProps {
  title: string
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
