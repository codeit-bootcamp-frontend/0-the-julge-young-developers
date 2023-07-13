'use client'

import { useEffect, useState } from 'react'

import { AnimationStatus, ToastProps } from '@/libs/shared/toast/type-toast'
import UiToast from '@/libs/shared/toast/ui/ui-toast/ui-toast'

/**
 * @param onShow Toast 노출 이벤트 핸들러 함수
 * @param children Toast 메시지 (string)
 * @returns Toast 리턴
 */
export default function Toast({ onShow, children }: ToastProps) {
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
