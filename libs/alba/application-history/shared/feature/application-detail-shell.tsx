import { cookies } from 'next/dist/client/components/headers'

import { getNoticeUserApplication } from '@/libs/shared/api/data-access/request/applicationsRequest'

import ApplicationDetailLayout from './application-detail-layout'

export const revalidate = 3600
export default async function ApplicationDetailShell() {
  const cookieInstance = cookies()
  const userId = cookieInstance.get('uid')?.value as string
  const token = cookieInstance.get('token')?.value

  async function serverAction(ofst: number, lmt: number) {
    'use server'

    const response = await getNoticeUserApplication(userId, {
      token,
      offset: ofst,
      limit: lmt,
    })

    if (response instanceof Error) {
      // console.log(response)
    } else if (typeof response === 'string') {
      // console.log(response)
    } else {
      const { items, offset, limit } = response
      return { items, offset, limit }
    }
  }

  // eslint-disable-next-line react/jsx-no-bind
  return <ApplicationDetailLayout serverActionApplicationList={serverAction} />
}
