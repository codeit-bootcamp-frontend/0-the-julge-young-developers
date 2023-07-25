import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'

export const getAllNotices = async () => {
  const response = await getNotices({})
  if (response instanceof Error) {
    return []
  }
  if (typeof response === 'string') {
    return []
  }
  const { items } = response
  return items
}
