'use client'

import { useEffect, useRef, useState } from 'react'

import { SelectProps } from '@/libs/shared/input-select-btn/types/type-select'

export default function useSelect({
  options,
  defaultValue,
  onClick,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue || '')
  const [searchedOption, setSearchedOption] = useState(defaultValue || '')

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
    setSearchedOption('')
  }

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
    if (onClick) {
      onClick(value)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setSelectedOption(inputValue)
    setSearchedOption(inputValue)
    setIsOpen(true)
  }

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(searchedOption.toLowerCase()),
  )

  return {
    isOpen,
    selectedOption,
    searchedOption,
    toggleDropdown,
    onClickOptionSelect: handleOptionSelect,
    onChangeInput: handleInputChange,
    filteredOptions,
    dropdownRef,
  }
}
