'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import UiSearchbar from '../ui/ui-searchbar/ui-searchbar'

export default function Searchbar() {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?keyword=${searchInput}`)
    }
  }

  return (
    <UiSearchbar
      searchInput={searchInput}
      onChangeInput={handleChangeInput}
      onPressEnter={handlePressEnter}
    />
  )
}
