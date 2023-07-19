import { useEffect, useState } from 'react'

import { NoticeEditData } from '@/libs/shared/notice-card/type-notice-card'

export default function useRegisterNoticeState({
  variant = 'default',
  notice,
}: {
  variant?: string
  notice?: NoticeEditData
}) {
  const [hourlyWage, setHourlyWage] = useState<number | undefined>(
    notice?.hourlyPay,
  )
  const [startsAt, setStartsAt] = useState<Date | undefined>(
    notice ? new Date(notice.startsAt) : undefined,
  )
  const [workhour, setWorkhour] = useState<number | undefined>(notice?.workhour)
  const [description, setDescription] = useState<string>(
    notice ? notice.description : '',
  )
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false)

  useEffect(() => {
    if (variant === 'funnel') return
    if (hourlyWage && startsAt && workhour && description) {
      setIsAllFilled(true)
    } else {
      setIsAllFilled(false)
    }
  }, [workhour, startsAt, description, hourlyWage, variant])

  return {
    hourlyWage,
    setHourlyWage,
    startsAt,
    setStartsAt,
    workhour,
    setWorkhour,
    description,
    setDescription,
    isAllFilled,
    setIsAllFilled,
  }
}
