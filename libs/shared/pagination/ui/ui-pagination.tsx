'use client'

import classnames from 'classnames/bind'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import UiPaginationArrow from '@/libs/shared/pagination/ui/ui-pagination-arrow'

import styles from './ui-pagination.module.scss'

const cx = classnames.bind(styles)

export default function UiPagination({
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
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword') as string

  const url = keyword
    ? `${pathname}?keyword=${keyword}&page=`
    : `${pathname}?page=`

  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <Link
          href={`${url}${page - 1}`}
          className={cx({ disabled: !prevAble })}
        >
          <UiPaginationArrow direction="prev" able={prevAble} />
        </Link>
        <div className={cx('numbers')}>
          {shownPages.map((num) => (
            <Link
              key={num}
              href={`${url}${num}`}
              className={cx({ disabled: page === num })}
            >
              <span className={cx('number', { isActive: page === num })}>
                {num}
              </span>
            </Link>
          ))}
        </div>
        <Link
          href={`${url}${page + 1}`}
          className={cx({ disabled: !nextAble })}
        >
          <UiPaginationArrow direction="next" able={nextAble} />
        </Link>
      </div>
    </div>
  )
}
