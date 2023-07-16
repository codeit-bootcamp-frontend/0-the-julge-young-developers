const utilFormatDuration = (startsAt: string, workhour: number) => {
  const startsDate = startsAt.slice(0, 10)
  const startsHour = startsAt.slice(11, 13)
  const startsMinute = startsAt.slice(14, 16)

  const endsHour = (Number(startsHour) + workhour) % 24

  const endsHourFormatted = endsHour < 10 ? `0${endsHour}` : endsHour

  const newTime = `${endsHourFormatted}:${startsMinute}`

  return `${startsDate} ${startsHour}:${startsMinute}~${newTime} (${workhour}시간)`
}

export { utilFormatDuration }
