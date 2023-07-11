import axios from 'axios'

import { UserData, UserSignIn, UserSignUp } from '@/libs/shared/api/type-api'

import { getRequest, postRequest, putRequest } from '../common'

/**
 * 로그인 api
 * 
 * @example 
 *  ```
 *  const data = await signIn('nodejs111@nodejs888.com', 'nodejs999')
    ```
 * 
 * @param email 유저 이메일 (string)
 * @param password 유저 비밀번호 (string)
 *
 * @returns
 *   - 성공(200) : 유저 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(404) : "존재하지 않거나 비밀번호가 일치하지 않습니다"
 */
const signIn = async (
  email: string,
  password: string,
): Promise<UserSignIn | string | undefined> => {
  try {
    const response = await postRequest<UserSignIn>('/token', {
      email,
      password,
    })

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

/**
 * 회원가입 api
 * 
 * @example 
 *  ```
 *  const data = await signUp(
        'nodejs666@nodejs888.com',
        'nodejs999',
        'employ',
      )
    ```
 * 
 * @param email 유저 이메일 (string)
 * @param password 유저 비밀번호 (string)
 * @param type 유저 타입 (string)
 *
 * @returns
 *   - 성공(201) : 유저 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(400) : "올바른 이일이 아닙니다. | 올바른 사용자 타입이 아닙니다. 'employee', 'employer' 중 하나여야 합니다."
 *   - 실패(409) : "이미 존재하는 이메일입니다."
 */
const signUp = async (
  email: string,
  password: string,
  type: string,
): Promise<UserSignUp | string | undefined> => {
  try {
    const response = await postRequest<UserSignUp>('/users', {
      email,
      password,
      type,
    })
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

/**
 * 유저 정보 조회 api
 * 
 * @example 
 *  ```
 *  const data = await getUserInfo('d30c89b8-8f26-4506-a534-a46205338849')
    ```
 * 
 * @param uid 유저 id (string)
 *
 * @returns
 *   - 성공(200) : 유저 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(404) : "존재하지 않는 사용자입니다."
 */
const getUserInfo = async (
  uid: string,
): Promise<UserData | string | undefined> => {
  try {
    const response = await getRequest<UserData>(`/users/${uid}`)
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

/**
 * 유저 정보 수정 api (토큰 권한 필요)
 * 
 * @example 
 *  ```
 *  const data = await updateUserInfo(
        'd30c89b8-8f26-4506-a534-a46205338849',
        'henry',
        '010-0000-0000',
        '서울시 종로구',
      )
    ```
 * 
 * @param uid 유저 id (string)
 * @param name 유저 이름 (string)
 * @param phone 유저 연락처 (string)
 * @param address 유저 주소 (양식 : "서울시 XX구") (string)
 *
 * @returns
 *   - 성공(200) : 유저 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(400) : 양식 오류 (ex) 시군구 주소가 올바르지 않습니다. '서울시 종로구', '서울시 중구', '서울시 용산구', '서울시 성동구', '서울시 광진구', '서울시 동대문구', '서울시 중랑구', '서울시 성북구', '서울시 강북구', '서울시 도봉구', '서울시 노원구', '서울시 은평구', '서울시 서대문구', '서울시 마포구', '서울시 양천구', '서울시 강서구', '서울시 구로구', '서울시 금천구', '서울시 영등포구', '서울시 동작구', '서울시 관악구', '서울시 서초구', '서울시 강남구', '서울시 송파구', '서울시 강동구' 중 하나여야 합니다)
 *   - 실패(403) : "권한이 없습니다"
 *   - 실패(404) : "존재하지 않는 사용자입니다"
 * 
 */
const updateUserInfo = async (
  uid: string,
  name: string,
  phone: string,
  address: string,
  bio = '성',
): Promise<UserData | string | undefined> => {
  try {
    const response = await putRequest<UserData>(`/users/${uid}`, {
      name,
      phone,
      address,
      bio,
    })

    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

export { signIn, signUp, getUserInfo, updateUserInfo }
