import { MOCK_APPLICATION_DATA } from '@/libs/application-detail/data-access/data-access-mock'

const getUserApplicationData = () => MOCK_APPLICATION_DATA.items

export { getUserApplicationData }

/**
 * 유저의 지원 목록 데이터 api 호출 함수
 * 
 * import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'
 * const getUserApplicationData = async (offset: number, limit: number) => {
  const res = await getNoticeUserApplication(
    // userId
    '04d92006-8a81-4a22-84cc-6e2c7d0260b9',
    offset,
    limit,
  )

  if (res instanceof Error) {
    // 알 수 없는 에러 처리
    throw new Error('application data fetch error')
  } else if (typeof res === 'string') {
    // 에러 메시지에 맞게 처리
    throw new Error(res)
  } else {
    // response 데이터 가공
    const { items } = res

    return items
  }
}
}
 */
