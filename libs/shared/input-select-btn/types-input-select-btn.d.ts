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
