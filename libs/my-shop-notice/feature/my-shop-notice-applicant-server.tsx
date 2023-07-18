import { getNoticeApplicantsData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import PaginationServer from '@/libs/shared/pagination/feature/pagination-server'
import UiSimpleLayoutResponsive from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout-responsive'
import { ApplicantListTable } from '@/libs/shared/table/feature/tables'

export const revalidate = 600
export default async function MyShopNoticeApplicantServer({
  shopId,
  noticeId,
  page,
}: {
  shopId: string
  noticeId: string
  page: number
}) {
  const data = await getNoticeApplicantsData(shopId, noticeId, page)
  // data와 같이 fetch로 획득
  const totalItems = 3

  return (
    <UiSimpleLayoutResponsive title="신청자 목록">
      <ApplicantListTable
        data={data}
        shopId={shopId}
        noticeId={noticeId}
        paginationElement={
          <PaginationServer page={page} totalItems={totalItems} />
        }
      />
    </UiSimpleLayoutResponsive>
  )
}
