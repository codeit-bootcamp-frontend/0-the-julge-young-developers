import { getNotices } from '@/libs/shared/api/data-access/request/noticeRequest'
import { getUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import { utilFormatDuration } from '@/libs/shared/shared/util/utilFormatDuration'

import { getAllNotices } from './get-all-notices'

const getUserAddress = async (userid: string) => {
  const res = await getUserInfo(userid)
  if (res instanceof Error) {
    return res
  }
  if (typeof res === 'string') {
    return new Error()
  }
  const { item } = res
  const { type } = item

  if (type === 'employee' && item.address) {
    const { address } = item
    return address
  }
  if (type === 'employer' && item.shop) {
    const { address1 } = item.shop.item
    return address1
  }
  return ''
}

const getCustomDatas = async (
  userId: string,
  handleClickToDetail: (
    isClosed: boolean,
    shopId: string,
    noticeId: string,
  ) => void,
  handleClickShowErrorDialog: (text: string) => void,
  handleStopLoader: () => void,
) => {
  const addressArr: string[] = []
  if (userId) {
    const address = await getUserAddress(userId)
    if (address instanceof Error) {
      handleStopLoader()
      handleClickShowErrorDialog('알 수 없는 에러가 발생했습니다.')
    }

    addressArr.push(address as string)
  }
  const response = await getNotices({ address: addressArr })
  if (response instanceof Error) {
    handleStopLoader()
    handleClickShowErrorDialog('알 수 없는 에러가 발생했습니다.')
    return []
  }
  if (typeof response === 'string') {
    handleStopLoader()
    handleClickShowErrorDialog(response)
    return []
  }
  let { items } = response
  if (items.length === 0) {
    items = await getAllNotices()
  }
  const itemsArray = items.map((item) => item.item)
  const itemDatas = itemsArray.map((item) => ({
    name: item.shop.item.name,
    id: item.id,
    duration: utilFormatDuration(item.startsAt, item.workhour),
    workhour: item.workhour,
    address: item.shop.item.address1,
    hourlyPay: item.hourlyPay,
    originalHourlyPay: item.shop.item.originalHourlyPay,
    imageUrl: item.shop.item.imageUrl,
    closed: item.closed,
    shopId: item.shop.item.id,
    handleClickToDetail: () =>
      handleClickToDetail(item.closed, item.shop.item.id, item.id),
  }))

  const filteredItemDatas = itemDatas.filter((item) => !item.closed)

  return filteredItemDatas
}

export default getCustomDatas
