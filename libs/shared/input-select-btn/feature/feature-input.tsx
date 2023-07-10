import React from 'react'

import UiInput from '@/libs/shared/input-select-btn/ui/ui-input/ui-input'

import Select from './feature-select'

type Variant = {
  variant: string
}
type FeatureInputProps = Variant & InputRequiredProps & Options & Partial<Valid>

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
  if (variant === 'select') {
    return <Select title={title} options={options} isRequired={isRequired} />
  }

  // if(variant==="")
}

export default Input
