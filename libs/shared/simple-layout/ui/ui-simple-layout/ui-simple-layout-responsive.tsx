'use client'

import { useEffect, useState } from 'react'

import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import { UiSimpleLayoutResponsiveProps } from '@/libs/shared/simple-layout/type-simple-layout'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

const tabletPcSize = {
  titleSize: 28,
  gap: 32,
}

const mobileSize = {
  titleSize: 20,
  gap: 16,
}

export default function UiSimpleLayoutResponsive({
  title,
  children,
}: UiSimpleLayoutResponsiveProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [responsiveSize, setResponsiveSize] = useState<{
    titleSize: number
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
      title={title}
      titleSize={responsiveSize.titleSize}
      gap={responsiveSize.gap}
    >
      {children}
    </UiSimpleLayout>
  )
}
