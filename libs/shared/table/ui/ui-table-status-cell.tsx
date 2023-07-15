'use client'

import classnames from 'classnames/bind'

import {
  ActiveOutlineBtn,
  ActiveOutlineConfirmBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { UiTableStatusCellProps } from '@/libs/shared/table/type-table'

import styles from './ui-table-status-cell.module.scss'

const cx = classnames.bind(styles)

export default function UiTableStatusCell({
  userType,
  status,
}: UiTableStatusCellProps) {
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
            size="mediumSmall"
            onClick={() => null}
          />
          <ActiveOutlineConfirmBtn
            text="승인하기"
            size="mediumSmall"
            onClick={() => null}
          />
        </>
      )
  }
}
