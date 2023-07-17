export interface NoticeCardItemProps {
  name: string
  id: string
  duration: string
  workhour: number
  address: string
  hourlyPay: number
  originalHourlyPay: number
  imageUrl: string
  closed: boolean
  handleClickToDetail: () => void
}
