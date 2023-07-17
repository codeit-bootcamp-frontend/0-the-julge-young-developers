import UiRegisterLayout from '@/libs/shared/register-layout/ui/ui-register-layout'

import RegisterShopBtn from './register-shop-btn'

export default function UnregisteredMyShop() {
  return (
    <UiRegisterLayout
      text="내 가게를 소개하고 공고도 등록해 보세요."
      registerButton={<RegisterShopBtn />}
    />
  )
}
