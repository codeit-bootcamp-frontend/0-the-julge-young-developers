'use client'

import { useEffect, useState } from 'react'

import UiCommonToast from '@/libs/shared/common-toast/ui/ui-common-toast/ui-common-toast'

export default function CommonToast({ onShow, children }: CommonToastProps) {
  const [animation, setAnimation] = useState<AnimationStatus>('fadeIn')

  useEffect(() => {
    const durationTimer = setTimeout(() => {
      onShow(false)
    }, 3000)

    const fadeOutTimer = setTimeout(() => {
      setAnimation('fadeOut')
    }, 2000)

    return () => {
      clearTimeout(durationTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [])

  return <UiCommonToast status={animation}>{children}</UiCommonToast>
}
