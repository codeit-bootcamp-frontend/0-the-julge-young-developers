const CARD_CHIPS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const
export type CardChips = (typeof CARD_CHIPS)[keyof typeof CARD_CHIPS]

export interface UiNoticeCardChipProps {
  isCardItem?: boolean
  isShowChip: CardChips
  changeRate: undefined | number
  closed: boolean
}

export interface UiNoticeDetailCardProps {
  name: string
  imageUrl: string
  duration: string
  workhour: number
  address: string
  closed: boolean
  shopDescription: string
  noticeDescription: string
  hourlyPay: number
  originalHourlyPay: number
  children: React.ReactNode
}

export interface UiNoticeCardItemProps {
  name: string
  duration: string
  workhour: number
  address: string
  hourlyPay: number
  imageUrl: string
  closed: boolean
  changeRate: undefined | number
  isShowChip: CardChips
  handleClickToDetail: () => void
}

export interface UiNoticeCardListProps {
  title: string
  filterElement?: React.ReactNode
  children: React.ReactNode
}
