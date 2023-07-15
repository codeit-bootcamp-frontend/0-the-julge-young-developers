import { MOCK_SHOP } from '../data-access/data-access-mock'
import UiMyShopDetail from '../ui/ui-my-shop-detail/ui-my-shop-detail'

export default function MyShop() {
  return <UiMyShopDetail shop={MOCK_SHOP} />
}
