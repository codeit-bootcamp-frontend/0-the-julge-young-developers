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

export interface Shop {
  id: string
  name: string
  category: ShopCategory
  address1: string
  address2: string
  description: string
  imageUrl: string
  originalHourlyPay: number
  user: {
    item: {
      id: string
      email: string
      type: string
      name?: string // optional
      phone?: string // optional
      address?: string // optional
      bio?: string // optional
    }
    href: string
  }
}
