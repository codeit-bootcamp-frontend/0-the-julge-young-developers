import axios from 'axios'

import {
  NoticeApplicationList,
  NoticeApplicationListItem,
  NoticeUserApplicationData,
} from '../../types/type-application'
import { getRequest, postRequest, putRequest } from '../common'

/**
 * 가게의 특정 공고의 지원 목록 조회 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await getNoticeApplicationList(
        '4490151c-5217-4157-b072-9c37b05bed47',
        'f3937135-2fd5-45a8-9432-dadb68fe1a8b',
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

    @example 로딩 처리 예시 
      - signIn JSDOC 참조 
 * 
 * @param shopId 가게 id (string)
 * @param noticeId 공고 id (string)
 * @param offset? 조회 시작 기준 (number)
 * @param limit? 조회 개수 (number)
 *
 * @returns
 *   - 성공(200) : offset, limit, items, links
 *   - 실패(404) : "존재하지 않는 가게입니다 | 존재하지 않는 공고입니다"
 */
const getNoticeApplicationList = async (
  shopId: string,
  noticeId: string,
  offset?: number,
  limit?: number,
): Promise<NoticeApplicationList | string | Error> => {
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

    const response = getRequest<NoticeApplicationList>(
      `/shops/${shopId}/notices/${noticeId}/applications?${query}`,
    )
    return await response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
  }
}

/**
 *  가게의 특정 공고 지원 등록 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await registerNoticeApplication(
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

    @example 로딩 처리 예시 
      - signIn JSDOC 참조 
 * 
 * @param shopId 가게 id (string)
 * @param noticeId 공고 id (string)
 *
 * @returns
 *   - 성공(201) : items, links
 *   - 실패(400) : "공고가 마감되었습니다"
 *   - 실패(401) : "로그인이 필요합니다"
 *   - 실패(404) : "존재하지 않는 가게입니다 | 존재하지 않는 공고입니다 | 존재하지 않는 사용자입니다"
 */
const registerNoticeApplication = async (
  shopId: string,
  noticeId: string,
): Promise<NoticeApplicationListItem | string | Error> => {
  try {
    const response = await postRequest<NoticeApplicationListItem>(
      `/shops/${shopId}/notices/${noticeId}/applications`,
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

/**
 *  가게의 특정 공고 지원 승인 또는 거절 (TODO) api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await getNoticeApplicationResult(
        '4490151c-5217-4157-b072-9c37b05bed47',
        'f3937135-2fd5-45a8-9432-dadb68fe1a8b',
        'b0058646-c28a-46df-840a-6be603652dfb',
        'accepted',
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

    @example 로딩 처리 예시 
      - signIn JSDOC 참조 
 * 
 * @param shopId 가게 id (string)
 * @param noticeId 공고 id (string)
 * @param applicationId 지원 id (string)
 * @param status 지원 상태 ("accepted" | "rejected")
 *
 * @returns
 *   - 성공(201) : items, links
 *   - 실패(400) : "공고가 마감되었습니다 | 이미 처리된 지원 정보입니다"
 *   - 실패(401) : "로그인이 필요합니다"
 *   - 실패(403) : "가게의 소유자만 접근할 수 있습니다"
 *   - 실패(404) : "존재하지 않는 가게입니다 | 존재하지 않는 공고입니다 | 존재하지 않는 지원 정보입니다"
 */
const getNoticeApplicationResult = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: 'accepted' | 'rejected',
): Promise<NoticeApplicationListItem | string | Error> => {
  try {
    const response = await putRequest<NoticeApplicationListItem>(
      `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      {
        status,
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
 *  유저의 지원 목록 api
 * 
 * @example 사용 예시
 *  ```
 *  const data = await getNoticeUserApplication(
        '04d92006-8a81-4a22-84cc-6e2c7d0260b9',
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

    @example 로딩 처리 예시 
      - signIn JSDOC 참조 
 * 
 * @param userId 유저 id (string)
 * @param offset? 조회 시작 기준 (number)
 * @param limit? 조회 개수 (number)
 *
 * @returns
 *   - 성공(201) : items, links
 *   - 실패(400) : 요청 양식 오류 
 *   - 실패(403) : "권한이 없습니다"
 */
const getNoticeUserApplication = async (
  userId: string,
  offset?: number,
  limit?: number,
): Promise<NoticeUserApplicationData | string | Error> => {
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

    const response = await getRequest<NoticeUserApplicationData>(
      `/users/${userId}/applications?${query}`,
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
  getNoticeApplicationList,
  registerNoticeApplication,
  getNoticeApplicationResult,
  getNoticeUserApplication,
}
