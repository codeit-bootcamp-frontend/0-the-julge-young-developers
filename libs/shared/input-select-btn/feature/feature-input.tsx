import React, { ForwardedRef, forwardRef } from 'react'

import UiInput from '@/libs/shared/input-select-btn/ui/ui-input/ui-input'
import UiTextArea from '@/libs/shared/input-select-btn/ui/ui-text-area/ui-text-area'

import { FeatureInputProps } from '../types/type-input'

export default forwardRef(function Input(
  {
    onChange,
    variant = 'input',
    title,
    defaultValue,
    valid,
    isValid,
    isRequired,
    suffix,
  }: FeatureInputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) {
  if (variant === 'input') {
    return (
      <UiInput
        onChange={onChange}
        title={title}
        defaultValue={defaultValue}
        valid={valid as string}
        isValid={isValid as boolean}
        isRequired={isRequired}
        suffix={suffix}
        ref={ref as ForwardedRef<HTMLInputElement>}
      />
    )
  }

  if (variant === 'explain') {
    return (
      <UiTextArea
        title={title}
        defaultValue={defaultValue}
        valid={valid as string}
        isValid={isValid as boolean}
        isRequired={isRequired}
        ref={ref as ForwardedRef<HTMLTextAreaElement>}
      />
    )
  }
})
