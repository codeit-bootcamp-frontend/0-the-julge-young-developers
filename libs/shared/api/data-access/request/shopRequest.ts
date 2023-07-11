import axios from 'axios'

import { getRequest, postRequest, putRequest } from '../common'

/**
 * 가게 등록 api
 * 
 * @example 
 *  ```
    ```
 * @param 
    - name: 가게 이름 (string)
    - category: (string)
    - address1: 주소 (string)
    - address2: 상세 주소 (string),
    - description: 가게 설명 (string)
    - imageUrl: 가게 이미지 (string),
    - originalHourlyPay: 기본 시급 (number)
 * 
 * @returns
 *   - 성공(200) : 가게 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(404) : "이미 가게가 존재합니다."

 * 
 */
const registerShop = async (
  shopInfo: ShopInfo,
): Promise<ShopData | string | undefined> => {
  try {
    const response = await postRequest<ShopData>('/shops', shopInfo)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

/**
 * 가게 정보 조회 api
 * 
 * @example 
 *  ```
    ```
 * @param shopId : 가게 id (string)
 * 
 * @returns
 *   - 성공(200) : 가게 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(404) : "존재하지 않는 가게입니다"

 * 
 */
const getShopInfo = async (
  shopId: string,
): Promise<ShopData | string | undefined> => {
  try {
    const response = await getRequest<ShopData>(`/shops/${shopId}`)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

/**
 * 가게 정보 수정 api
 * 
 * @example 
 *  ```
    ```
 * @param shopId : 가게 id (string)
 * 
 * @returns
 *   - 성공(200) : 가게 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(401) : "로그인이 필요합니다"
 *   - 실패(403) : "가게를 수정할 권한이 없습니다"
 *   - 실패(404) : "존재하지 않는 가게입니다"

 * 
 */
const updateShopInfo = async (
  shopId: string,
  shopInfo: ShopInfo,
): Promise<ShopData | string | undefined> => {
  try {
    const response = await putRequest<ShopData>(`/shops/${shopId}`, shopInfo)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

export { registerShop, getShopInfo, updateShopInfo }
