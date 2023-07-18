/* applicationsRequest */
import { Links } from './type-user'

/* applicationsRequest - getNoticeApplicationList */
interface NoticeUserApplicationItem {
  item: {
    id: string
    status: 'pending' | 'accepted' | 'rejected' | 'canceled'
    createdAt: string
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
    notice: {
      item: {
        id: string
        hourlyPay: number
        description: string
        startsAt: string
        workhour: number
        closed: boolean
      }
      href: string
    }
  }
  links?: Links[]
}

interface NoticeApplicationListItem {
  item: {
    id: string
    status: 'pending' | 'accepted' | 'rejected'
    createdAt: string
    user?: {
      item: {
        id: string
        email: string
        type: 'employer' | 'employee'
        name?: string
        phone?: string
        address?: string
        bio?: string
      }
      href: string
    }
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
    notice: {
      item: {
        id: string
        hourlyPay: number
        description: string
        startsAt: string
        workhour: number
        closed: boolean
      }
      href: string
    }
  }
  links?: Links[]
}

interface NoticeApplicationList {
  offset: number
  limit: number
  count: number
  hasNext: boolean
  items: NoticeApplicationListItem[]
  links?: Links[]
}

/* applicationsRequest - registerNoticeApplication */
/* applicationsRequest - getNoticeApplicationResult */
/* applicationsRequest - getNoticeUserApplication */

interface NoticeUserApplicationData {
  offset: number
  limit: number
  count: number
  hasNext: boolean
  items: NoticeUserApplicationItem[]
  links?: Links[]
}

export type {
  NoticeUserApplicationItem,
  NoticeApplicationListItem,
  NoticeApplicationList,
  NoticeUserApplicationData,
}
