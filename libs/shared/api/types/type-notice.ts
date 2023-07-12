/* noticeRequest */
import { Links } from './type-user'

/* noticeRequest - getNotices */
export interface NoticesProps {
  offset?: number
  limit?: number
  address?: string[]
  keyword?: string
  startsAtGte?: string
  hourlyPayGte?: number
  sort?: 'time' | 'pay' | 'hour' | 'shop'
}

interface NoticesItem {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
      item: {
        id: string
        name: string
        category: string
        address1: string
        address2: string
        description: string
        imageUrl: string
        originalHourlyPay: number
      }
      href: string
    }
  }
  links?: Links[]
}

export interface NoticesData {
  offset: number
  limit: number
  address: string[]
  keyword?: string
  items: NoticesItem[]
}

/* noticeRequest - getShopNotices */

export interface ShopNoticesProps {
  shopId: string
  offset?: number
  limit?: number
}

interface ShopNoticesItem {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
  }
  links?: Links[]
}

export interface ShopNoticesData {
  offset: number
  limit: number
  items: ShopNoticesItem[]
  links?: Links[]
}

/* noticeRequest - registerShopNotice */

export interface RegisterdShopNoticeProps {
  shopId: string
  hourlyPay: number
  startsAt: string
  workhour: number
  description: string
}

export interface RegisterdShopNoticeData {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
      item: {
        id: string
        name: string
        category: string
        address1: string
        address2: string
        description: string
        imageUrl: string
        originalHourlyPay: number
      }
      href: string
    }
  }
  links?: Links[]
}

/* noticeRequest - getShopNotice */

export interface ShopNoticeData {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
      item: {
        id: string
        name: string
        category: string
        address1: string
        address2: string
        description: string
        imageUrl: string
        originalHourlyPay: number
      }
      href: string
    }
  }
  links?: Links[]
}
/* noticeRequest - updateShopNotice */
export interface UpdatedShopNotice {
  item: {
    id: string
    hourlyPay: number
    startsAt: string
    workhour: number
    description: string
    closed: boolean
    shop: {
      item: {
        id: string
        name: string
        category: string
        address1: string
        address2: string
        description: string
        imageUrl: string
        originalHourlyPay: number
      }
      href: string
    }
  }
  links?: Links[]
}
