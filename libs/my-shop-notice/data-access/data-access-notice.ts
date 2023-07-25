import { getNoticeApplicationList } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { getShopNotice } from '@/libs/shared/api/data-access/request/noticeRequest'
import { NoticeDetail } from '@/libs/shared/notice-card/type-notice-card'
import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'
import { ApplicantList } from '@/libs/shared/table/type-table'

export const getNoticeDetailData = async (
  shopId: string,
  noticeId: string,
): Promise<NoticeDetail> => {
  const res = await getShopNotice(shopId, noticeId)
  if (res instanceof Error) {
    throw new Error()
  } else if (typeof res === 'string') {
    throw new Error(res)
  } else {
    const notice = res.item
    const {
      id,
      hourlyPay,
      startsAt,
      workhour,
      description: noticeDescription,
      closed,
      shop,
    } = notice

    const {
      name,
      category,
      address1: address,
      description: shopDescription,
      imageUrl,
      originalHourlyPay,
    } = shop.item

    const noticeDetail = {
      id,
      name,
      category,
      duration: utilFormatDuration(startsAt, workhour),
      startsAt,
      workhour,
      address,
      shopDescription,
      noticeDescription,
      hourlyPay,
      originalHourlyPay,
      imageUrl,
      closed,
    }

    return noticeDetail
  }
}

const TABLES_ITEMS_PER_PAGE = 5
export const getNoticeApplicantsData = async (
  shopId: string,
  noticeId: string,
  pageNum: number,
): Promise<[ApplicantList[], number]> => {
  const offset = (pageNum - 1) * TABLES_ITEMS_PER_PAGE
  const limit = TABLES_ITEMS_PER_PAGE
  const res = await getNoticeApplicationList(shopId, noticeId, offset, limit)
  if (res instanceof Error) {
    throw new Error()
  } else if (typeof res === 'string') {
    throw new Error(res)
  } else {
    const applications = res.items

    const noticeApplicants = applications.map((application) => ({
      id: application.item.id,
      status: application.item.status,
      name: application.item.user?.item.name,
      description: application.item.user?.item.bio,
      phone: application.item.user?.item.phone,
    }))

    return [noticeApplicants, res.count]
  }
}
