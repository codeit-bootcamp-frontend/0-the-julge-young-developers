'use client'

import { ForwardedRef, forwardRef } from 'react'

import UiSelect from '@/libs/shared/input-select-btn/ui/ui-select/ui-select'
import useSelect from '@/libs/shared/input-select-btn/util/useSelect'

import { SelectProps } from '../types/type-select'
import UiSelectTopShell from '../ui/ui-select/ui-select-top-shell'

export default forwardRef(function Select(
  props: SelectProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { variant, title, isRequired } = props
  const {
    isOpen,
    selectedOption,
    toggleDropdown,
    onClickOptionSelect,
    onChangeInput,
    filteredOptions,
    dropdownRef,
  } = useSelect(props)

  return (
    <UiSelect
      variant={variant}
      title={title}
      isOpen={isOpen}
      toggleDropdown={toggleDropdown}
      onClickOptionSelect={onClickOptionSelect}
      options={filteredOptions}
      dropdownRef={dropdownRef}
    >
      <UiSelectTopShell
        variant={variant}
        isOpen={isOpen}
        isRequired={isRequired}
        selectedOption={selectedOption}
        onChangeInput={onChangeInput}
        ref={ref}
      />
    </UiSelect>
  )
})
