import { registerShopNotice } from '@/libs/shared/api/data-access/request/noticeRequest'
import { RegisterdShopNoticeProps } from '@/libs/shared/api/types/type-notice'

export async function sendNoticeRequest({
  shopId,
  hourlyPay,
  startsAt,
  workhour,
  description,
}: RegisterdShopNoticeProps): Promise<boolean> {
  const response = await registerShopNotice({
    shopId,
    hourlyPay,
    startsAt,
    workhour,
    description,
  })
  console.log(response)

  if (typeof response !== 'string' && !(response instanceof Error)) {
    return true
  }
  return false
}
