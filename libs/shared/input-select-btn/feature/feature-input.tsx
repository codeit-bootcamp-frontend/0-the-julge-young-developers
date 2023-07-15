import React, { ChangeEvent, ForwardedRef, forwardRef } from 'react'

import UiInput from '@/libs/shared/input-select-btn/ui/ui-input/ui-input'
import UiTextArea from '@/libs/shared/input-select-btn/ui/ui-text-area/ui-text-area'

import { FeatureInputProps } from '../types/type-input'

/**
 * @param variant ("input"| "input-underline"|"explain")
 * @param title (string)
 * @param isRequired (boolean)
 * @param ref input 태그에 붙는 ref
 * @param onChange input value가 변경되면 실행할 함수(option)
 * @param defaultValue (string(option))
 * @param valid (string(option))
 * @param isValid (boolean(option))
 * @param suffix (string(option))
 */
export default forwardRef(function Input(
  {
    onChange,
    variant = 'input',
    title,
    isRequired,
    defaultValue,
    valid,
    isValid,
    suffix,
  }: FeatureInputProps,
  ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>,
) {
  if (variant === 'input') {
    return (
      <UiInput
        variant={variant}
        onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
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
        onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
        ref={ref as ForwardedRef<HTMLTextAreaElement>}
      />
    )
  }

  if (variant === 'input-underline') {
    return (
      <UiInput
        variant={variant}
        onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
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
})
