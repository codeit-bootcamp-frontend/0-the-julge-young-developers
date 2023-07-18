'use client'

import {
  ActiveBtn,
  ActiveOutlineBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'

export default function ApplicationButton({
  type,
}: {
  type: 'application' | 'cancel' | 'disabled'
}) {
  if (type === 'application') {
    return (
      <ActiveBtn
        text="신청하기"
        size="large"
        onClick={() => {
          console.log('신청하기~!')
        }}
      />
    )
  }

  if (type === 'cancel') {
    return (
      <ActiveOutlineBtn
        text="취소하기"
        size="large"
        onClick={() => console.log('취소하기')}
      />
    )
  }

  if (type === 'disabled') {
    return (
      <InactiveBtn
        text="신청 불가"
        size="large"
        onClick={() => console.log('신청 불가')}
      />
    )
  }
}
