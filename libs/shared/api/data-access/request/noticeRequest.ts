import axios from 'axios'

import {
  NoticesData,
  NoticesProps,
  RegisterdShopNoticeData,
  RegisterdShopNoticeProps,
  ShopNoticeData,
  ShopNoticesData,
  ShopNoticesProps,
  UpdatedShopNotice,
} from '../../types/type-notice'
import { getRequest, postRequest, putRequest } from '../common'

/**
 * 전체 공고 목록 조회 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await getNotices({
        offset: 1,
        limit: 5,
        address: [
          '서울시 강남구',
          '서울시 송파구',
          '서울시 강동구',
          '서울시 종로구',
        ],
        sort: 'pay',
        startsAtGte: '2023-12-14T18:00:00.000Z',
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
 * 
 * @param offset? 조회 시작 기준 (number)
 * @param limit? 조회 개수 (number)
 * @param address? 위치 설정 (string[])
 * @param keyword? 검색어 설정 (string)
 * @param startsAtGte? 시작일 설정 (string)
 * @param hourlyPayGte? 금액 설정 (number)
 * @param sort? 정렬 기준 (time | pay | hour | shop)
 *
 * @returns
 *   - 성공(200) : offset, limit, address, keyword, items, links
 */
const getNotices = async ({
  offset,
  limit,
  address,
  keyword,
  startsAtGte,
  hourlyPayGte,
  sort,
}: NoticesProps): Promise<NoticesData | string | Error> => {
  try {
    let query = ''

    if (offset) {
      query += `&offset=${offset}`
    }
    if (limit) {
      query += `&limit=${limit}`
    }
    if (address?.length) {
      address.forEach((adr) => {
        query += `&address=${adr}`
      })
    }
    if (keyword) {
      query += `&keyword=${keyword}`
    }
    if (startsAtGte) {
      query += `&startsAtGte=${startsAtGte}`
    }
    if (hourlyPayGte) {
      query += `&hourlyPayGte=${hourlyPayGte}`
    }
    if (sort) {
      query += `&sort=${sort}`
    }

    if (query.length) {
      query = query.slice(1)
    }

    const response = await getRequest<NoticesData>(`/notices?${query}`)

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 * 가게의 공고 목록 조회 api
 * 
 * @example 사용 예시 
 *  ```
 *  const data = await getShopNotices({
        shopId: '4490151c-5217-4157-b072-9c37b05bed47',
        offset: 1,
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
 * 
 * @param shopId 가게 id (string)
 * @param offset? 조회 시작 기준 (number)
 * @param limit? 조회 개수 (number)
 *
 * @returns
 *   - 성공(200) : offset, limit, address, keyword, items, links
 *   - 실패(404) : "존재하지 않는 가게입니다"
 */
const getShopNotices = async ({
  shopId,
  offset,
  limit,
}: ShopNoticesProps): Promise<ShopNoticesData | string | Error> => {
  try {
    let query = ''

    if (offset) {
      query += `&offset=${offset}`
    }
    if (limit) {
      query += `&limit=${limit}`
    }
    if (query.length) {
      query = query.slice(1)
    }

    const response = await getRequest<ShopNoticesData>(
      `/shops/${shopId}/notices?${query}`,
    )
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 * 가게 공고 등록 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await registerShopNotice({
        shopId: '4490151c-5217-4157-b072-9c37b05bed47',
        hourlyPay: 10000,
        startsAt: '2023-09-14T18:00:00.000Z',
        workhour: 4,
        description: '테스트',
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
 * 
 * @param shopId 가게 id (string)
 * @param hourlyPay 시급 (number)
 * @param startsAt 시작일 (string)
 * @param workhour 근무시간 (number)
 * @param description 설명 (string)
 *
 * @returns
 *   - 성공(200) : item, links
 *   - 실패(400) : 요청 양식 오류 (ex. 시급은 2023년 최저시급 이상이어야 합니다)
 *   - 실패(401) : "로그인이 필요합니다"
 *   - 실패(403) : "공고를 게시할 권한이 없습니다"
 *   - 실패(404) : "존재하지 않는 가게입니다"
 */
const registerShopNotice = async ({
  shopId,
  hourlyPay,
  startsAt,
  workhour,
  description,
}: RegisterdShopNoticeProps): Promise<
  RegisterdShopNoticeData | string | Error
> => {
  try {
    const response = await postRequest<RegisterdShopNoticeData>(
      `/shops/${shopId}/notices`,
      {
        hourlyPay,
        startsAt,
        workhour,
        description,
      },
    )

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 * 가게의 특정 공고 조회 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await getShopNotice(
        '4490151c-5217-4157-b072-9c37b05bed47',
        'f3937135-2fd5-45a8-9432-dadb68fe1a8b',
      )
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
 * 
 * @param shopId 가게 id (string)
 * @param noticeId 공고 id (string)
 *
 * @returns
 *   - 성공(200) : item, links
 *   - 실패(404) : "존재하지 않는 가게입니다 | 존재하지 않는 공고입니다"
 */
const getShopNotice = async (
  shopId: string,
  noticeId: string,
): Promise<ShopNoticeData | string | Error> => {
  try {
    const response = await getRequest<ShopNoticeData>(
      `/shops/${shopId}/notices/${noticeId}`,
    )
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 * 가게의 특정 공고 수정 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await updateShopNotice(
        '4490151c-5217-4157-b072-9c37b05bed47',
        'f3937135-2fd5-45a8-9432-dadb68fe1a8b',
        10000,
        '2023-09-14T18:00:00.000Z',
        4,
        '테스트',
      )
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
 * 
 * @param shopId 가게 id (string)
 * @param noticeId 공고 id (string)
 * @param hourlyPay 시급 (number)
 * @param startsAt 시작일 (string)
 * @param workhour 근무시간 (number)
 * @param description 설명 (string)
 *
 * @returns
 *   - 성공(200) : item, links
 *   - 실패(400) : 양식 오류
 *   - 실패(401) : "로그인이 필요합니다"
 *   - 실패(403) : "공고를 수정할 권한이 없습니다"
 *   - 실패(404) : "존재하지 않는 가게입니다 | 존재하지 않는 공고입니다 | 마감된 공고는 수정할 수 없습니다"
 */
const updateShopNotice = async (
  shopId: string,
  noticeId: string,
  hourlyPay: number,
  startsAt: string,
  workhour: number,
  description: string,
): Promise<UpdatedShopNotice | string | Error> => {
  try {
    const response = await putRequest<UpdatedShopNotice>(
      `/shops/${shopId}/notices/${noticeId}`,
      {
        hourlyPay,
        startsAt,
        workhour,
        description,
      },
    )
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

export {
  getNotices,
  getShopNotices,
  registerShopNotice,
  getShopNotice,
  updateShopNotice,
}
