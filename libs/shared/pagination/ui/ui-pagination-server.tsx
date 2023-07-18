'use client'

import classnames from 'classnames/bind'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UiPaginationArrow from '@/libs/shared/pagination/ui/ui-pagination-arrow'

import styles from './ui-pagination.module.scss'

const cx = classnames.bind(styles)

export default function UiPaginationServer({
  page,
  shownPages,
  prevAble,
  nextAble,
}: {
  page: number
  shownPages: number[]
  prevAble: boolean
  nextAble: boolean
}) {
  const pathname = usePathname()

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <Link href={`${pathname}?page=${page - 1}`}>
          <UiPaginationArrow direction="prev" able={prevAble} />
        </Link>
        <div className={cx('numbers')}>
          {shownPages.map((num) => (
            <Link key={num} href={`${pathname}?page=${num}`}>
              <span className={cx('number', { isActive: page === num })}>
                {num}
              </span>
            </Link>
          ))}
        </div>
        <Link href={`${pathname}?page=${page + 1}`}>
          <UiPaginationArrow direction="next" able={nextAble} />
        </Link>
      </div>
    </div>
  )
}
