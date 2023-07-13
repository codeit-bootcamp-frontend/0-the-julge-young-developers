import React, { ForwardedRef, forwardRef } from 'react'

import { Options } from 'next/dist/server/base-server'

import UiInput from '@/libs/shared/input-select-btn/ui/ui-input/ui-input'
import UiTextArea from '@/libs/shared/input-select-btn/ui/ui-text-area/ui-text-area'

import { InputProps, Valid } from '../types/type-input'

type Variant = {
  variant: string
}
type FeatureInputProps = Variant &
  InputProps &
  Partial<Options> &
  Partial<Valid>

export default forwardRef(function Input(
  {
    onChange,
    variant = 'input',
    title,
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
        valid={valid as string}
        isValid={isValid as boolean}
        isRequired={isRequired}
        ref={ref as ForwardedRef<HTMLTextAreaElement>}
      />
    )
  }
})
