export function formatDate(date: Date) {
  const newDateTime = date.getTime() + 60000
  const newDate = new Date(newDateTime)
  const stringDate = newDate.toISOString()

  return stringDate
}
