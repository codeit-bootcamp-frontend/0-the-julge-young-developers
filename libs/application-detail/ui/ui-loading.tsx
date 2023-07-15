'use client'

import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './ui-loading.module.scss'

const cx = classNames.bind(styles)

export default function UiLoading() {
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
    <div className={cx('container')}>
      <UiSimpleLayout
        title="신청 내역"
        titleSize={isMobileSize ? 20 : 28}
        gap={isMobileSize ? 16 : 32}
      >
        <div className={cx('loadingContainer')}>
          <div className={cx('ldsDefault')}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </UiSimpleLayout>
    </div>
  )
}
