export const utilFormatDuration = (duration: string, workhour: number) => {
  const date = duration.slice(0, 10)
  const time = duration.slice(11, 13)
  const minutes = duration.slice(14, 16)

  const numTime = Number(time)
  const worktimeAdded = numTime + workhour

  const newTime = `${worktimeAdded % 24}:${minutes}`

  return `${date} ${time}:${minutes}~${newTime}`
}
