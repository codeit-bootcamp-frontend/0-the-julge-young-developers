type Option = {
  value: string
}

interface Options {
  options: Option[]
}

interface InputProps {
  title: string
  isRequired: boolean
  suffix?: string
}

interface Valid {
  valid: string
  isValid: boolean
}

interface UiImageInputProps {
  title: string
  selectedImage: string
  onDropImgae: (e: React.DragEvent<HTMLDivElement>) => void
  onClickButton: () => void
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  children: React.ReactNode
}
