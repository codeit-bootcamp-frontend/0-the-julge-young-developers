import { getNoticeApplicationList } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { getShopNotice } from '@/libs/shared/api/data-access/request/noticeRequest'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import { NoticeDetail } from '@/libs/shared/notice-card/type-notice-card'
import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'
import { MOCK_APPLICANT_LIST_DATA } from '@/libs/shared/table/data-access/data-access-mock'
import { ApplicantList } from '@/libs/shared/table/type-table'

import { MOCK_NOTICE_DETAIL_DATA } from './data-access-mock'

export const getShopIdData = async (userId: string) => {
  const res = await getUserInfo(userId)
  if (res instanceof Error) {
    // 알 수 없는 에러 처리
  } else if (typeof res === 'string') {
    // 에러 메시지에 맞게 처리
  } else {
    // response 데이터 가공
    return res.item.shop?.item.id
  }
}

export const getNoticeDetailData = async (
  shopId: string,
  noticeId: string,
): Promise<NoticeDetail> => {
  const res = await getShopNotice(shopId, noticeId)
  if (res instanceof Error) {
    // 알 수 없는 에러 처리
    return MOCK_NOTICE_DETAIL_DATA
  }
  if (typeof res === 'string') {
    // 에러 메시지에 맞게 처리
    return MOCK_NOTICE_DETAIL_DATA
  }
  // response 데이터 가공
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

const TABLES_ITEMS_PER_PAGE = Number(process.env.TABLE_ITEMS_PER_PAGE)
export const getNoticeApplicantsData = async (
  shopId: string,
  noticeId: string,
  pageNum: number,
): Promise<ApplicantList[]> => {
  const offset = (pageNum - 1) * TABLES_ITEMS_PER_PAGE
  const limit = TABLES_ITEMS_PER_PAGE
  const res = await getNoticeApplicationList(shopId, noticeId, offset, limit)
  if (res instanceof Error) {
    // 알 수 없는 에러 처리
    // MOCK 데이터로 임시 에러 처리
    return MOCK_APPLICANT_LIST_DATA
  }
  if (typeof res === 'string') {
    // 에러 메시지에 맞게 처리
    // MOCK 데이터로 임시 에러 처리
    return MOCK_APPLICANT_LIST_DATA
  }
  // response 데이터 가공
  const applications = res.items

  const noticeApplicants = applications.map((application) => ({
    id: application.item.id,
    status: application.item.status,
    name: application.item.user?.item.name,
    description: application.item.user?.item.bio,
    phone: application.item.user?.item.phone,
  }))

  return noticeApplicants
}
