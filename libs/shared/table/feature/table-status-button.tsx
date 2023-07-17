'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  ActiveOutlineBtn,
  ActiveOutlineConfirmBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

export default function TableStatusButton({
  shopId,
  noticeId,
  applicationId,
}: {
  shopId: string
  noticeId: string
  applicationId: string
}) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)

  useEffect(() => {
    if (isMobile) {
      setIsMobileSize(true)
    } else {
      setIsMobileSize(false)
    }
  }, [isMobile])
  return (
    <>
      <ActiveOutlineBtn
        text="거절하기"
        size={isMobileSize ? 'small' : 'mediumSmall'}
        onClick={() => null}
      />
      <ActiveOutlineConfirmBtn
        text="승인하기"
        size={isMobileSize ? 'small' : 'mediumSmall'}
        onClick={() => null}
      />
    </>
  )
}
