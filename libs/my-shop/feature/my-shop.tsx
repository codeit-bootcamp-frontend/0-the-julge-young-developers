import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import UnregisteredMyShop from './unregistered-my-shop'

// import { MOCK_SHOP } from '../data-access/data-access-mock'
// import UiMyShopDetail from '../ui/ui-my-shop-detail/ui-my-shop-detail'

export default function MyShop() {
  return (
    <UiSimpleLayout title="내 가게" titleAlign="start" titleSize={28} gap={24}>
      {/* <UiMyShopDetail shop={MOCK_SHOP} /> */}
      <UnregisteredMyShop />
    </UiSimpleLayout>
  )
}
