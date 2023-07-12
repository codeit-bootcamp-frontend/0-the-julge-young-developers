'use client'

import { useEffect, useState } from 'react'

import { AnimationStatus, ToastProps } from '@/libs/shared/toast/type-toast'
import UiToast from '@/libs/shared/toast/ui/ui-toast/ui-toast'

export default function CommonToast({ onShow, children }: ToastProps) {
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

  return <UiToast status={animation}>{children}</UiToast>
}
