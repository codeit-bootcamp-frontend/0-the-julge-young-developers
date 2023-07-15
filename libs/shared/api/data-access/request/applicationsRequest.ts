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
 * @param params? 토큰 필요시 { token }
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
  params?: {
    token?: string
  },
): Promise<NoticeApplicationListItem | string | Error> => {
  try {
    const response = await postRequest<NoticeApplicationListItem>(
      `/shops/${shopId}/notices/${noticeId}/applications`,
      {},
      {
        headers: {
          Authorization: `Bearer ${params?.token}`,
        },
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
 *  가게의 특정 공고 지원 승인 또는 거절 api
 * 추가 : 공고지원자는 지원을 취소할 수 있습니다. "cancled"
 * @example 사용 예시
 *  ```
 *  const data = await updateNoticeApplicationResult(
    'be05aa78-7d4e-4f17-9b3a-babb41181caf',
    '77b5bfeb-6889-4cf2-be4a-769537819cf4',
    '044da900-b2d2-4f31-8518-d62dece30ce3',
    'canceled',
    {
      token,
    },
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
 * @param status 지원 상태 ("accepted" | "rejected" | "canceled")
 * @param params? 토큰 필요 시 { token }
 *
 * @returns
 *   - 성공(201) : items, links
 *   - 실패(400) : "공고가 마감되었습니다 | 이미 처리된 지원 정보입니다"
 *   - 실패(401) : "로그인이 필요합니다"
 *   - 실패(403) : "가게의 소유자만 접근할 수 있습니다"
 *   - 실패(404) : "존재하지 않는 가게입니다 | 존재하지 않는 공고입니다 | 존재하지 않는 지원 정보입니다"
 */
const updateNoticeApplicationResult = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
  status: 'accepted' | 'rejected' | 'canceled',
  params?: {
    token?: string
  },
): Promise<NoticeApplicationListItem | string | Error> => {
  try {
    const response = await putRequest<NoticeApplicationListItem>(
      `/shops/${shopId}/notices/${noticeId}/applications/${applicationId}`,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${params?.token}`,
        },
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
 * // 클라이언트 
 *  const data = await getNoticeUserApplication(
        '6895a8e4-408d-46f5-a16a-792fb706c7e8', {
          // 쿼리 파라미터 작성 
        }
      )

      // 서버 

      const data = await getNoticeUserApplication(
    '6895a8e4-408d-46f5-a16a-792fb706c7e8',
    {
      token,
    },
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
 * @param params? 쿼리 파라미터 ( { offset?, limit?, token? } )
 * @param offset? 조회 시작 기준 (number)
 * @param limit? 조회 개수 (number)
 * @param token? 조회 개수 (number)
 *
 * @returns
 *   - 성공(201) : items, links
 *   - 실패(400) : 요청 양식 오류 
 *   - 실패(403) : "권한이 없습니다"
 */
const getNoticeUserApplication = async (
  userId: string,
  params?: {
    offset?: number
    limit?: number
    token?: string
  },
): Promise<NoticeUserApplicationData | string | Error> => {
  try {
    let query = ''

    if (params?.offset) {
      query += `&offset=${params?.offset}`
    }
    if (params?.limit) {
      query += `&limit=${params?.limit}`
    }

    if (query.length) {
      query = query.slice(1)
    }

    const response = await getRequest<NoticeUserApplicationData>(
      `/users/${userId}/applications?${query}`,
      {
        headers: {
          Authorization: `Bearer ${params?.token}`,
        },
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
  getNoticeApplicationList,
  registerNoticeApplication,
  updateNoticeApplicationResult,
  getNoticeUserApplication,
}
