'use client'

import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'

export default function EditBtn() {
  const handleClickEditButton = () => {
    console.log(1)
  }

  return (
    <ActiveOutlineBtn
      text="편집하기"
      size="large"
      onClick={handleClickEditButton}
    />
  )
}
