type Option = {
  value: string
}

interface Options {
  options: Option[]
}

interface InputRequiredProps {
  title: string
  isRequired: boolean
}

interface Valid {
  valid: string
  isValid: boolean
}
