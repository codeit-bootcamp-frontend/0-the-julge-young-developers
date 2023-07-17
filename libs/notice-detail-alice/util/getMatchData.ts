/* eslint-disable no-restricted-syntax */
import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import { NoticesItem } from '@/libs/shared/api/types/type-notice'

import { ERROR_INVALID_NOTICE_MESSAGE } from '../data-access/errors'

function getMatchingApplication(
  noticeId: string,
  applications: NoticeUserApplicationItem[],
): NoticeUserApplicationItem | null {
  for (const application of applications) {
    if (application.item.notice.item.id === noticeId) {
      return application
    }
  }

  return null
}

function getMatchingNotice(
  noticeId: string,
  notices: NoticesItem[],
): NoticesItem | Error {
  for (const notice of notices) {
    if (notice.item.id === noticeId) {
      return notice
    }
  }

  return new Error(ERROR_INVALID_NOTICE_MESSAGE)
}

export { getMatchingApplication, getMatchingNotice }
