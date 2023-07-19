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
}: RegisterdShopNoticeProps): Promise<[boolean, string]> {
  if (noticeId) {
    const response = await updateShopNotice(shopId, noticeId, {
      hourlyPay,
      startsAt,
      workhour,
      description,
    })
    if (response instanceof Error) {
      throw response
    } else if (typeof response == 'string') {
      return [true, response]
    } else {
      return [false, '']
    }
  }
  const response = await registerShopNotice({
    shopId,
    hourlyPay,
    startsAt,
    workhour,
    description,
  })

  if (response instanceof Error) {
    throw response
  } else if (typeof response == 'string') {
    return [true, response]
  } else {
    return [false, '']
  }
}
