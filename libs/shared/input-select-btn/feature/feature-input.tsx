import React from 'react'

import UiInput from '@/libs/shared/input-select-btn/ui/ui-input/ui-input'
import UiTextArea from '@/libs/shared/input-select-btn/ui/ui-text-area/ui-text-area'

import Select from './feature-select'

type Variant = {
  variant: string
}
type FeatureInputProps = Variant &
  InputRequiredProps &
  Partial<Options> &
  Partial<Valid>

function Input({
  variant = 'input',
  title,
  valid,
  isValid,
  options,
  isRequired,
}: FeatureInputProps) {
  if (variant === 'input') {
    return (
      <UiInput
        title={title}
        valid={valid as string}
        isValid={isValid as boolean}
        isRequired={isRequired}
      />
    )
  }
  if (variant === 'select' && options) {
    return <Select title={title} options={options} isRequired={isRequired} />
  }

  if (variant === 'explain') {
    return (
      <UiTextArea
        title={title}
        valid={valid as string}
        isValid={isValid as boolean}
        isRequired={isRequired}
      />
    )
  }
}

export default Input
