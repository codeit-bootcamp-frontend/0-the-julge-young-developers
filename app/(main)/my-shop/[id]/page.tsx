import MyShopNotice from '@/libs/my-shop-notice/feature/my-shop-notice'

export default function MyShopNoticeDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <main>
      <MyShopNotice noticeId={params.id} />
    </main>
  )
}
