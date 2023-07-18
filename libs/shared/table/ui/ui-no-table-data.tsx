'use client'

import classnames from 'classnames/bind'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { UserType } from '@/libs/shared/table/type-table'

import styles from './ui-no-table-data.module.scss'

const cx = classnames.bind(styles)

const TEXT_MAP = {
  checkPage: '데이터를 찾지 못했습니다. 페이지를 확인해 주세요.',
  noData: {
    employee: '아직 신청 내역이 없어요.',
    employer: '아직 신청자가 없어요.',
  },
}

export default function UiNoTableData({
  checkPage = true,
  userType,
}: {
  checkPage?: boolean
  userType: UserType
}) {
  const pathname = usePathname()
  return (
    <div className={cx('wrapper')}>
      <span>{checkPage ? TEXT_MAP.checkPage : TEXT_MAP.noData[userType]}</span>
      {checkPage && (
        <Link href={`${pathname}?page=1`}>1번 페이지로 이동하기</Link>
      )}
    </div>
  )
}
