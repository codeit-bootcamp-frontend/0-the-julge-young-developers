const CARD_CHIPS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const
export type CardChips = (typeof CARD_CHIPS)[keyof typeof CARD_CHIPS]

const SHOP_CATEGORY = {
  Korean: '한식',
  Chinese: '중식',
  Japanese: '일식',
  Western: '양식',
  SnackBar: '분식',
  Cafe: '카페',
  Convenience: '편의점',
  Other: '기타',
} as const
export type ShopCategory = (typeof SHOP_CATEGORY)[keyof typeof SHOP_CATEGORY]

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
  onClickToDetail: () => void
}

export interface UiNoticeCardListProps {
  title?: string
  filterElement?: React.ReactNode
  children: React.ReactNode
}

export interface UiNoticeDetailCardLayoutProps {
  name: string
  category: string
  children: React.ReactNode
}

export interface NoticeDetail {
  name: string
  category: string
  duration: string
  workhour: number
  address: string
  shopDescription: string
  noticeDescription: string
  hourlyPay: number
  originalHourlyPay: number
  imageUrl: string
  closed: boolean
}
