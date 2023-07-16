import { shopId } from '@/libs/my-shop/data-access/data-access-mock'
import UnregisteredMyShop from '@/libs/my-shop/feature/unregistered-my-shop'
import UiMyShopDetail from '@/libs/my-shop/ui/ui-my-shop-detail/ui-my-shop-detail'
import { getShopInfo } from '@/libs/shared/api/data-access/request/shopRequest'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

export default async function MyShop() {
  const myShopData = await getShopInfo(shopId)
  if (typeof myShopData === 'string' || myShopData instanceof Error) {
    console.error(myShopData)
  } else {
    console.log(myShopData.item)
  }

  return (
    <UiSimpleLayout title="내 가게" titleAlign="start" titleSize={28} gap={24}>
      {typeof myShopData === 'string' || myShopData instanceof Error ? (
        <UnregisteredMyShop />
      ) : (
        <UiMyShopDetail shop={myShopData.item} />
      )}
    </UiSimpleLayout>
  )
}
