import { getNoticeApplicantsData } from '@/libs/my-shop-notice/data-access/data-access-notice'
import Pagination from '@/libs/shared/pagination/feature/pagination'
import UiSimpleLayoutResponsive from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout-responsive'
import { ApplicantListTable } from '@/libs/shared/table/feature/tables'

export const revalidate = 600
export default async function MyShopNoticeApplicant({
  shopId,
  noticeId,
  page,
}: {
  shopId: string
  noticeId: string
  page: number
}) {
  const [data, totalItems] = await getNoticeApplicantsData(
    shopId,
    noticeId,
    page,
  )

  return (
    <UiSimpleLayoutResponsive title="신청자 목록">
      <ApplicantListTable
        data={data}
        shopId={shopId}
        noticeId={noticeId}
        paginationElement={
          <Pagination itemsPerPage={5} page={page} totalItems={totalItems} />
        }
        page={page}
      />
    </UiSimpleLayoutResponsive>
  )
}
