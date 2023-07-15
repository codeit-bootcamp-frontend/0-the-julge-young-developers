'use client'

import { useEffect, useState } from 'react'

import classnames from 'classnames/bind'

import {
  ActiveOutlineBtn,
  ActiveOutlineConfirmBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import { UiTableStatusCellProps } from '@/libs/shared/table/type-table'

import styles from './ui-table-status-cell.module.scss'

const cx = classnames.bind(styles)

export default function UiTableStatusCell({
  userType,
  status,
}: UiTableStatusCellProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)

  useEffect(() => {
    if (isMobile) {
      setIsMobileSize(true)
    } else {
      setIsMobileSize(false)
    }
  }, [isMobile])

  switch (status) {
    case 'accepted':
      return <div className={cx('chip', { [status]: status })}>승인완료</div>
    case 'rejected':
      return <div className={cx('chip', { [status]: status })}>거절</div>
    default:
      if (userType === 'employee') {
        return <div className={cx('chip', { [status]: status })}>대기중</div>
      }
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
}
