import { ERROR_EMPLOYER_MESSAGE } from '@/libs/notice-detail-alice/data-access/errors'
import {
  getMatchingApplication,
  getMatchingNotice,
} from '@/libs/notice-detail-alice/util/getMatchData'
import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'
import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'

const loadApplicationInfo = async (noticeId: string, uid?: string) => {
  if (uid) {
    const resUserInfo = await getUserInfo(uid)

    if (resUserInfo instanceof Error) {
      console.log(resUserInfo)
    } else if (typeof resUserInfo === 'string') {
      console.log(resUserInfo)
    } else {
      const { item: user } = resUserInfo

      if (user.type === 'employer') {
        return new Error(ERROR_EMPLOYER_MESSAGE)
      }

      const resUserApplications = await getNoticeUserApplication(user.id)
      if (resUserApplications instanceof Error) {
        console.log(resUserApplications)
      } else if (typeof resUserApplications === 'string') {
        console.log(resUserApplications)
      } else {
        const { items: userApplications } = resUserApplications

        const matchingApplication = getMatchingApplication(
          noticeId,
          userApplications,
        )

        return matchingApplication
      }
    }
  }
}

const loadNoticeInfo = async (noticeId: string) => {
  const resTotalNotices = await getNotices({ offset: 0, limit: 100 }) // 미완성) 전체 공고 순회하는 방법 개선하기

  if (resTotalNotices instanceof Error) {
    console.log()
  } else if (typeof resTotalNotices === 'string') {
    console.log(resTotalNotices)
  } else {
    const { items: totalNotices } = resTotalNotices

    // 해당 공고의 상세 데이터 가져오기
    const notice = getMatchingNotice(noticeId, totalNotices)

    return notice
  }
}

export { loadApplicationInfo, loadNoticeInfo }
