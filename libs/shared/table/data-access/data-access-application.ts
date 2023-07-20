import { updateNoticeApplicationResult } from '@/libs/shared/api/data-access/request/applicationsRequest'

/**
 * 사장의 공고 승인 리퀘스트
 * @param shopId
 * @param noticeId
 * @param applicationId
 * @returns [isError, errorMessage]
 */
export const sendAcceptApplicationRequest = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
): Promise<[boolean, string]> => {
  const res = await updateNoticeApplicationResult(
    shopId,
    noticeId,
    applicationId,
    'accepted',
  )
  if (res instanceof Error) {
    return [true, '']
  }
  if (typeof res == 'string') {
    return [true, res]
  }
  return [false, '']
}

/**
 * 사장의 공고 거절 리퀘스트
 * @param shopId
 * @param noticeId
 * @param applicationId
 * @returns [isError, errorMessage]
 */
export const sendRejectApplicationRequest = async (
  shopId: string,
  noticeId: string,
  applicationId: string,
): Promise<[boolean, string]> => {
  const res = await updateNoticeApplicationResult(
    shopId,
    noticeId,
    applicationId,
    'rejected',
  )
  if (res instanceof Error) {
    return [true, '']
  }
  if (typeof res == 'string') {
    return [true, res]
  }
  return [false, '']
}
