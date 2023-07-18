/* alertsRequest */

/* alertsRequest - getUserAlertsList */
import { Links } from './type-user'

interface UserAlertsListItem {
  item: {
    id: string
    createdAt: string
    result: 'accepted' | 'rejected' | 'canceled'
    read: boolean
    application: {
      item: {
        id: string
        status: 'pending' | 'accepted' | 'rejected'
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
    links?: Links[]
  }
}
interface UserAlertsListData {
  offset: number
  limit: number
  count: number
  hasNext: boolean
  items: UserAlertsListItem[]
}

/* alertsRequest - clearAlerts */

export type { UserAlertsListItem, UserAlertsListData }
