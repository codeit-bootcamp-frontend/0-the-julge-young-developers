'use client'

import { useEffect, useState } from 'react'

import { UiNoticeDetailCardLayoutProps } from '@/libs/shared/notice-card/type-notice-card'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

const tabletPcSize = {
  titleSize: 28,
  subtitleSize: 16,
  gap: 24,
}

const mobileSize = {
  titleSize: 20,
  subtitleSize: 14,
  gap: 16,
}

export default function UiNoticeDetailCardLayout({
  name,
  category,
  children,
}: UiNoticeDetailCardLayoutProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [responsiveSize, setResponsiveSize] = useState<{
    titleSize: number
    subtitleSize: number
    gap: number
  }>(tabletPcSize)

  useEffect(() => {
    if (isMobile) {
      setResponsiveSize(mobileSize)
    } else {
      setResponsiveSize(tabletPcSize)
    }
  }, [isMobile])

  return (
    <UiSimpleLayout
      title={name}
      subtitle={category}
      titleSize={responsiveSize.titleSize}
      subtitleSize={responsiveSize.subtitleSize}
      gap={responsiveSize.gap}
    >
      {children}
    </UiSimpleLayout>
  )
}
