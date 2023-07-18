import { Shop } from '@/libs/my-shop/type-my-shop'
import {
  registerShop,
  updateShopInfo,
} from '@/libs/shared/api/data-access/request/shopRequest'
import { ShopInfo } from '@/libs/shared/api/types/type-shop'

export async function sendRegisterShopRequest(
  shop: Shop | undefined,
  shopName: string,
  category: string,
  address: string,
  detailAddress: string,
  defaultHourlyWage: number | undefined,
  selectedImage: string,
  description: string,
): Promise<boolean> {
  if (shop) {
    const response = await updateShopInfo(shop.id, {
      name: shopName,
      category: category as ShopInfo['category'],
      address1: address as ShopInfo['address1'],
      address2: detailAddress,
      description,
      imageUrl: selectedImage,
      originalHourlyPay: defaultHourlyWage as number,
    })
    console.log(response)

    if (typeof response !== 'string' && !(response instanceof Error)) {
      return true
    }
    return false
  }

  const response = await registerShop({
    name: shopName,
    category: category as ShopInfo['category'],
    address1: address as ShopInfo['address1'],
    address2: detailAddress,
    description,
    imageUrl: selectedImage,
    originalHourlyPay: defaultHourlyWage as number,
  })

  if (typeof response !== 'string' && !(response instanceof Error)) {
    return true
  }
  return false
}
