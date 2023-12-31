interface UserApplicationItem {
  name: string
  hourlyPay: number
  startsAt: string
  workhour: number
  status: 'pending' | 'accepted' | 'rejected' | 'canceled'
}

export type { UserApplicationItem }
