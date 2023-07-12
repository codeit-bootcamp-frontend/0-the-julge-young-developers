import axios from 'axios'

import { getRequest, postRequest, putRequest } from '../common'

/**
 * 가게 등록 api
 * 
 * @example 
 *  ```
 * const response = await registerShop({
    name: '맛있는 한식',
    category: '한식',
    address1: '서울시 종로구',
    address2: '상세 주소',
    description: '가게 설명~~~~~~~',
    imageUrl: 'https:~~~',
    originalHourlyPay: 10000,
  })
    ```
  @example 에러 처리 예시 
    ```
    if (response instanceof Error) {
        // 알 수 없는 에러 처리 
      } else if (typeof response === 'string') {
        // 에러 메시지에 맞게 처리 
      } else {
        // response 데이터 가공 
      }
    ```
 * @param 
    - name: 가게 이름 (string)
    - category: (    
      | '한식'
      | '중식'
      | '일식'
      | '양식'
      | '분식'
      | '카페'
      | '편의점'
      | '기타')
    - address1: 주소 (    
      | '서울시 종로구'
      | '서울시 중구'
      | '서울시 용산구'
      | '서울시 성동구'
      | '서울시 광진구'
        | '서울시 동대문구'
      | '서울시 중랑구'
      | '서울시 성북구'
      | '서울시 강북구'
      | '서울시 도봉구'
      | '서울시 노원구'
      | '서울시 은평구'
      | '서울시 서대문구'
      | '서울시 마포구'
      | '서울시 양천구'
      | '서울시 강서구'
      | '서울시 구로구'
      | '서울시 금천구'
      | '서울시 영등포구'
      | '서울시 동작구'
      | '서울시 관악구'
      | '서울시 서초구'
      | '서울시 강남구'
      | '서울시 송파구'
      | '서울시 강동구')
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
): Promise<ShopData | string | Error> => {
  try {
    const response = await postRequest<ShopData>('/shops', shopInfo)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 * 가게 정보 조회 api
 * 
 * @example 
 *  ```
* const response = await getShopInfo("~~shop_id_sfja~~~")
    ```
 * @example 에러 처리 예시 
    ```
    if (response instanceof Error) {
        // 알 수 없는 에러 처리 
      } else if (typeof response === 'string') {
        // 에러 메시지에 맞게 처리 
      } else {
        // response 데이터 가공 
      }
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
): Promise<ShopData | string | Error> => {
  try {
    const response = await getRequest<ShopData>(`/shops/${shopId}`)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 * 가게 정보 수정 api
 * 
 * @example 
 *  ```
 * const response = await updateShopInfo("shop_id", {
      name: '맛있는 한식',
      category: '한식',
      address1: '서울시 종로구',
      address2: '상세 주소',
      description: '가게 설명~~~~~~~',
      imageUrl: 'https:~~~',
      originalHourlyPay: 10000,
    })
    ```
 * @example 에러 처리 예시 
    ```
    if (response instanceof Error) {
        // 알 수 없는 에러 처리 
      } else if (typeof response === 'string') {
        // 에러 메시지에 맞게 처리 
      } else {
        // response 데이터 가공 
      }
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
): Promise<ShopData | string | Error> => {
  try {
    const response = await putRequest<ShopData>(`/shops/${shopId}`, shopInfo)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

export { registerShop, getShopInfo, updateShopInfo }
