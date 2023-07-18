import { getNoticeDetailData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import MyShopNoticeEditButton from '@/libs/my-shop-notice/feature/my-shop-notice-edit-button'
import { MyShopNoticeDetailProps } from '@/libs/my-shop-notice/type-my-shop-notice'
import UiNoticeDetailCard from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card'
import UiNoticeDetailCardLayout from '@/libs/shared/notice-card/ui/ui-notice-detail-card/ui-notice-detail-card-layout'

export default async function MyShopNoticeDetail({
  shopId,
  noticeId,
}: MyShopNoticeDetailProps) {
  const data = await getNoticeDetailData(shopId, noticeId)

  const {
    name,
    category,
    duration,
    workhour,
    address,
    hourlyPay,
    originalHourlyPay,
    imageUrl,
    shopDescription,
    noticeDescription,
    closed,
  } = data

  return (
    <UiNoticeDetailCardLayout name={name} category={category}>
      <UiNoticeDetailCard
        name={name}
        duration={duration}
        workhour={workhour}
        address={address}
        hourlyPay={hourlyPay}
        originalHourlyPay={originalHourlyPay}
        imageUrl={imageUrl}
        shopDescription={shopDescription}
        noticeDescription={noticeDescription}
        closed={closed}
      >
        <MyShopNoticeEditButton
          data={data}
          shopId={shopId}
          noticeId={noticeId}
        />
      </UiNoticeDetailCard>
    </UiNoticeDetailCardLayout>
  )
}
