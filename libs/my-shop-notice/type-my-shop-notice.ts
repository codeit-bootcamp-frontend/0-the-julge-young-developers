import { NoticeDetail } from '@/libs/shared/notice-card/type-notice-card'

export interface MyShopNoticeDetailProps {
  shopId: string
  noticeId: string
}

export interface MyShopNoticeApplicantProps {
  shopId: string
  noticeId: string
}

export interface MyShopNoticeEditButtonProps {
  shopId: string
  noticeId: string
  data: NoticeDetail
}
