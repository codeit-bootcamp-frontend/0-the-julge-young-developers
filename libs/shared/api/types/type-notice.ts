/* noticeRequest */
import { Links } from './type-user'

/* noticeRequest - getNotices */
interface NoticesProps {
  offset?: number
  limit?: number
  count?: number
  hasNext?: boolean
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

interface AllNoticesData {
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

interface NoticesData {
  offset: number
  limit: number
  count: number
  hasNext: boolean
  address: string[]
  keyword?: string
  items: NoticesItem[]
}

/* noticeRequest - getShopNotices */

interface ShopNoticesProps {
  shopId: string
  offset: number
  limit: number
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

interface ShopNoticesData {
  offset: number
  limit: number
  count: number
  hasNext: boolean
  items: ShopNoticesItem[]
  links?: Links[]
}

/* noticeRequest - registerShopNotice */

interface RegisterdShopNoticeProps {
  shopId: string
  hourlyPay: number
  startsAt: string
  workhour: number
  description: string
  token?: string
  noticeId?: string
}

interface RegisterdShopNoticeData {
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

interface ShopNoticeData {
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
    currentUserApplication?: object | null
  }
  links?: Links[]
}
/* noticeRequest - updateShopNotice */
interface UpdatedShopNotice {
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

export type {
  NoticesProps,
  NoticesItem,
  NoticesData,
  AllNoticesData,
  ShopNoticesProps,
  ShopNoticesItem,
  ShopNoticesData,
  RegisterdShopNoticeProps,
  RegisterdShopNoticeData,
  ShopNoticeData,
  UpdatedShopNotice,
}
