import { Suspense } from 'react'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import MyShopNoticeApplicant from '@/libs/my-shop-notice/feature/my-shop-notice-applicant'
import CommonDomainLoader from '@/libs/shared/loading/feature/domain-loader'

export default async function MyShopNoticeDetailPage({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { page: string }
}) {
  const userId = cookies().get('uid')?.value
  if (!userId) return redirect('/')

  const shopId = cookies().get('sid')?.value
  if (!shopId) return redirect('/my-shop')

  const page =
    Number.isNaN(Number(searchParams.page)) || Number(searchParams.page) < 1
      ? 1
      : Math.floor(Number(searchParams.page))

  return (
    <Suspense
      fallback={
        <CommonDomainLoader
          title="신청 목록"
          text="테이블 정보를 불러오고 있어요"
        />
      }
    >
      <MyShopNoticeApplicant shopId={shopId} noticeId={params.id} page={page} />
    </Suspense>
  )
}
