import axios from 'axios'

import { UserAlertsListData } from '../../types/type-alerts'
import { getRequest, putRequest } from '../common'

/**
 *  유저의 알림 목록 조회 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await getUserAlertsList(
        '04d92006-8a81-4a22-84cc-6e2c7d0260b9',
        1,
        4,
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
 * @param userId 유저 id (string)
 * @param offset? 조회 시작 기준 (number)
 * @param limit? 조회 개수 (number)
 *
 * @returns
 *   - 성공(200) : offset, limits, items, links
 *   - 실패(403) : "권한이 없습니다"
 */
const getUserAlertsList = async (
  userId: string,
  offset?: number,
  limit?: number,
): Promise<UserAlertsListData | string | Error> => {
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

    const response = await getRequest<UserAlertsListData>(
      `/users/${userId}/alerts?${query}`,
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
 *  알림 읽음 처리 api
 * 
 * @example 사용 예시
 *  ```
 *  테스트 TODO 
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
 * @param userId 유저 id (string)
 * @param alertId 알림창 id (string)
 *
 * @returns
 *   - 성공(200) : offset, limits, items, links
 *   - 실패(403) : "권한이 없습니다"
 *   - 실패(404) : "알림을 찾을 수 없습니다 | 신청서를 찾을 수 없습니다 | 가게를 찾을 수 없습니다 | 공고를 찾을 수 없습니다"
 * 
 */
const clearAlerts = async (
  userId: string,
  alertId: string,
): Promise<UserAlertsListData | string | Error> => {
  try {
    const response = await putRequest<UserAlertsListData>(
      `/users/${userId}/alerts/${alertId}`,
      {},
    )
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

export { getUserAlertsList, clearAlerts }
