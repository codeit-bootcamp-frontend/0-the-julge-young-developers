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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface Valid {
  valid: string
  isValid: boolean
}
