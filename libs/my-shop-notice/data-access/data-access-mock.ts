import { NoticeDetail } from '@/libs/shared/notice-card/type-notice-card'

export const MOCK_NOTICE_DETAIL_DATA: NoticeDetail = {
  name: '성경만두0',
  category: '한식',
  duration: '2023-01-03 15:00~18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.
  workhour: 3,
  address: '서울시 종로구', // address1에 나와 있는 것들
  shopDescription:
    '알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.',
  noticeDescription:
    '기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가 비네요. 급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.',
  hourlyPay: 9500,
  originalHourlyPay: 9000,
  imageUrl:
    'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
  closed: true,
}
