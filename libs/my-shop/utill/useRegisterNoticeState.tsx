import { useEffect, useState } from 'react'

export default function useRegisterNoticeState(variant = 'default') {
  const [hourlyWage, setHourlyWage] = useState<number>()
  const [startsAt, setStartsAt] = useState<Date | undefined>()
  const [workhour, setWorkhour] = useState<number>()
  const [description, setDescription] = useState<string>('')
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
