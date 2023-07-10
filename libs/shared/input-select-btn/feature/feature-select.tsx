'use client'

import { useEffect, useRef, useState } from 'react'

import UiSelect from '../ui/ui-select/ui-select'

function Select({ title, options, isRequired }: InputRequiredProps & Options) {
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
      ref={dropdownRef}
    />
  )
}

export default Select
