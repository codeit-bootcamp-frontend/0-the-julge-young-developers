import UnregisteredMyShop from '@/libs/my-shop/feature/my-shop/unregistered-my-shop'
import UiMyShopDetail from '@/libs/my-shop/ui/ui-my-shop-detail/ui-my-shop-detail'
import { getShopInfo } from '@/libs/shared/api/data-access/request/shopRequest'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

export default async function MyShop({ shopId }: { shopId: string }) {
  const myShopData = shopId ? await getShopInfo(shopId) : null

  if (myShopData instanceof Error) {
    throw new Error()
  } else if (typeof myShopData === 'string') {
    throw new Error(myShopData)
  }

  return (
    <UiSimpleLayout title="내 가게" titleAlign="start" titleSize={28} gap={24}>
      {!myShopData ? (
        <UnregisteredMyShop />
      ) : (
        <UiMyShopDetail shop={myShopData.item} />
      )}
    </UiSimpleLayout>
  )
}
