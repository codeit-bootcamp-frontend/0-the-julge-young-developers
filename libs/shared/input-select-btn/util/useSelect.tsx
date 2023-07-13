'use client'

import { useEffect, useRef, useState } from 'react'

import { SelectProps } from '@/libs/shared/input-select-btn/types/type-select'

export default function useSelect({
  title,
  isRequired,
  options,
  defaultValueIdx,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(
    options[defaultValueIdx]?.value || '',
  )
  const [searchedOption, setSearchedOption] = useState(
    options[defaultValueIdx]?.value || '',
  )

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
    // setSelectedOption('')
    setSearchedOption('')
  }

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    // setSelectedOption(inputValue)
    setSearchedOption(inputValue)
    setIsOpen(true)
  }

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(searchedOption.toLowerCase()),
  )

  return {
    title,
    isOpen,
    selectedOption,
    searchedOption,
    toggleDropdown,
    handleOptionSelect,
    handleInputChange,
    filteredOptions,
    isRequired,
    dropdownRef,
  }
}
