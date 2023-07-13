'use client'

import { ForwardedRef, forwardRef } from 'react'

import UiSearchSelect from '@/libs/shared/input-select-btn/ui/ui-select/ui-search-select'
import useSelect from '@/libs/shared/input-select-btn/util/useSelect'

import { SelectProps } from '../types/type-select'

export default forwardRef(function Select(
  props: SelectProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const {
    title,
    isOpen,
    selectedOption,
    toggleDropdown,
    onClickOptionSelect,
    onChangeInput,
    filteredOptions,
    isRequired,
    dropdownRef,
  } = useSelect(props)

  return (
    <UiSearchSelect
      title={title}
      isOpen={isOpen}
      selectedOption={selectedOption}
      toggleDropdown={toggleDropdown}
      onClickOptionSelect={onClickOptionSelect}
      onChangeInput={onChangeInput}
      options={filteredOptions}
      isRequired={isRequired}
      dropdownRef={dropdownRef}
      ref={ref}
    />
  )
})
