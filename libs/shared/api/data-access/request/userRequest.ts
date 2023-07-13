import axios from 'axios'

import {
  UserData,
  UserSignIn,
  UserSignUp,
} from '@/libs/shared/api/types/type-user'

import { getRequest, postRequest, putRequest } from '../common'

/**
 * 로그인 api
 * 
 * @example 사용 예시 
 *  ```
 *  // 로그인하고 받은 토큰을 setCookie를 사용해서 쿠키에 저장해야 합니다. 
 *  import { setCookie } from 'cookies-next'
 * 
 * const { userId, setUserId } = useUserContext()
 * 
   const data = await signIn(
        'test-employer1@codeit.com',
        'test-employer1@codeit.com',
      )

      if (data instanceof Error) {
        // 알 수 없는 에러 처리
      } else if (typeof data === 'string') {
        // 에러 메시지에 맞게 처리
      } else {
        // 데이터 가공 구간  
          const { token, user } = data.item
          console.log(token)
          setCookie('token', token) // 로그인 후 이렇게 쿠키 설정해야 합니다. 
          setUserId(user.item.id) // 유저 id를 전역 상태로 저장합니다. 
          
      }
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

    @example 로딩 처리 선택지 
    ```
    // 1. next/dynamic (api 받아서 렌더링 하는 데이터의 경우)
    import dynamic from 'next/dynamic'
    const UiSignIn = dynamic(() => import('@/libs/signin/ui/ui-signin/ui-signin'), {
      ssr: false,
    loading: () => <div>다이나믹</div>,
    })

    // 2. loading state 활용하기
    const [loading, setLoading] = useState(true)
  const handleClickSignIn = async (email: string, password: string) => {
    setLoading(false)
    const res = await signIn(email, password)
    if (res instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // 데이터 가공 구간
      // setLoading(true) // "라우터 처리" ? true 처리 필요 없음 : true 처리 필요함
      const { token } = res.item
      setCookie('token', token)
      router.push('/')
    }
  }

  return (
    <div>
      {!loading && <div>페이지 이동 중...</div>}
      {loading && (
        <UiSignIn
          userInputRefs={userInputRefs}
          handleClickButton={handleClickButton}
        />
      )}
    </div>
  )
    ```

    

    ```
    // 3. 서버 컴포넌트 로딩 처리 (loading.tsx)
    // 적절한 경로에 loading.tsx 파일 작성하고
    // 페이지 에서 다음과 같이 api 요청을 하면 됩니다. 
    // app/(main)/loading.tsx

    export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <div>서버 컴포넌트 로딩 중</div>
}


    // app/(main)/page.tsx 

    import { signIn } from '@/libs/shared/api/data-access/request/userRequest'

export default async function Home() {
  const data = await signIn('nodejs9999@nodejs.com', 'nodejs99')
  return <main>Home</main>
}

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
): Promise<UserSignIn | string | Error> => {
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
    return error as Error
  }
}

/**
 * 회원가입 api
 * 
 * @example 사용 예시 
 *  ```
 *  const data = await signUp(
        'nodejs666@nodejs888.com',
        'nodejs999',
        'employ',
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
): Promise<UserSignUp | string | Error> => {
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
    return error as Error
  }
}

/**
 * 유저 정보 조회 api
 * 
 * @example 사용 예시 
 *  ```
 *  const data = await getUserInfo('d30c89b8-8f26-4506-a534-a46205338849')
    ```

      @example 에러 처리 예시 
    ```
    if (res instanceof Error) {
        // 알 수 없는 에러 처리 
      } else if (typeof res === 'string') {
        // 에러 메시지에 맞게 처리 
      } else {
        // res 데이터 가공 
      }
    ```

    @example 로딩 처리 예시 
      - signIn JSDOC 참조 
 * 
 * @param uid 유저 id (string)
 *
 * @returns
 *   - 성공(200) : 유저 데이터를 담고 있는 item 객체와 hateos 개념인 links 객체
 *   - 실패(404) : "존재하지 않는 사용자입니다."
 */
const getUserInfo = async (uid: string): Promise<UserData | string | Error> => {
  try {
    const response = await getRequest<UserData>(`/users/${uid}`)
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
    return error as Error
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
        '자기 소개'
      )
    ```

      @example 에러 처리 예시 
    ```
    if (res instanceof Error) {
        // 알 수 없는 에러 처리 
      } else if (typeof res === 'string') {
        // 에러 메시지에 맞게 처리 
      } else {
        // res 데이터 가공 
      }
    ```

    @example 로딩 처리 예시 
      - signIn JSDOC 참조 
 * 
 * @param uid 유저 id (string)
 * @param name 유저 이름 (string)
 * @param phone 유저 연락처 (string)
 * @param address 유저 주소 (양식 : "서울시 XX구") (string)
 * @param bio 유저 소개 (string)
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
  bio: string,
): Promise<UserData | string | Error> => {
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
    return error as Error
  }
}

export { signIn, signUp, getUserInfo, updateUserInfo }
