const utilCalcTimeDiff = (prevTime: string): string => {
  const currentDate = new Date()
  const prevDate = new Date(prevTime)

  const diffMSec = currentDate.getTime() - prevDate.getTime()
  const diffMin = diffMSec / (60 * 1000)
  const diffHour = diffMin / 60
  const diffDay = diffHour / 24
  const diffMonth = diffDay / 30
  const diffYear = diffMonth / 12

  let result

  if (diffYear >= 1) {
    result = Math.floor(diffYear)
    return `${result}년 전`
  }

  if (diffMonth >= 1) {
    result = Math.floor(diffMonth)
    return `${result}달 전`
  }

  if (diffDay >= 1) {
    result = Math.floor(diffDay)
    return `${result}일 전`
  }

  if (diffHour >= 1) {
    result = Math.floor(diffHour)
    return `${result}시간 전`
  }

  result = Math.floor(diffMin)
  return `${result}분 전`
}

export { utilCalcTimeDiff }
