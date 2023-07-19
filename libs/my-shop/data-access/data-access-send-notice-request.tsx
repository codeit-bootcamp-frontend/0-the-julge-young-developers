import {
  registerShopNotice,
  updateShopNotice,
} from '@/libs/shared/api/data-access/request/noticeRequest'
import { RegisterdShopNoticeProps } from '@/libs/shared/api/types/type-notice'

export async function sendNoticeRequest({
  shopId,
  hourlyPay,
  startsAt,
  workhour,
  description,
  noticeId,
}: RegisterdShopNoticeProps): Promise<boolean> {
  if (noticeId) {
    const response = await updateShopNotice(shopId, noticeId, {
      hourlyPay,
      startsAt,
      workhour,
      description,
    })
    if (typeof response !== 'string' && !(response instanceof Error)) {
      return true
    }
    return false
  }
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
