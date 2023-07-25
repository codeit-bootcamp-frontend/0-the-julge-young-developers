import { NoticeEditData } from '@/libs/shared/notice-card/type-notice-card'

export interface MyShopNoticeDetailProps {
  shopId: string
  noticeId: string
}

export interface MyShopNoticeApplicantProps {
  shopId: string
  noticeId: string
  page: number
}

export interface MyShopNoticeEditButtonProps {
  notice: NoticeEditData
}
