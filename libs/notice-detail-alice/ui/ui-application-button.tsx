'use client'

import {
  ActiveBtn,
  ActiveOutlineBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'

export default function ApplicationButton({
  onClickOpenDialog,
  type,
}: {
  onClickOpenDialog?: () => void
  type: 'application' | 'cancel' | 'disabled'
}) {
  if (type === 'application') {
    return (
      <ActiveBtn text="신청하기" size="large" onClick={onClickOpenDialog} />
    )
  }

  if (type === 'cancel') {
    return (
      <ActiveOutlineBtn
        text="취소하기"
        size="large"
        onClick={onClickOpenDialog}
      />
    )
  }

  if (type === 'disabled') {
    return <InactiveBtn text="신청 불가" size="large" onClick={() => {}} />
  }
}
