'use client'

import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react'

import UiSelect from '@/libs/shared/input-select-btn/ui/ui-select/ui-select'

export default forwardRef(function Select(
  { title, options, isRequired }: InputProps & Options,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setSelectedOption('')
  }

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSelectedOption(inputValue)

    setIsOpen(true)
  }

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(selectedOption.toLowerCase()),
  )

  return (
    <UiSelect
      title={title}
      isOpen={isOpen}
      selectedOption={selectedOption}
      toggleDropdown={toggleDropdown}
      handleOptionSelect={handleOptionSelect}
      handleInputChange={handleInputChange}
      options={filteredOptions}
      isRequired={isRequired}
      dropdownRef={dropdownRef}
      ref={ref}
    />
  )
})
