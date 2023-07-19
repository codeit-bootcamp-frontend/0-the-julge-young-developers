import { NoticeDetail } from '@/libs/shared/notice-card/type-notice-card'

const NOTICE_ID = 'bea71379-e6f0-4785-a124-944368362f9c'

const MOCK_NOTICE_DETAIL_DATA: NoticeDetail = {
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
  startsAt: '2023-01-03',
}

const MOCK_NOTICES_DATA = [
  {
    closed: false,
    description: '오세요',
    hourlyPay: 33000,
    id: '13fed2bf-1304-4e5c-8c98-32b7e61d5240',
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
    shop: {
      item: {
        address1: '서울시 종로구',
        address2: '수표로 88',
        category: '한식',
        description: '만두 맛집',
        id: '30edfcc1-16de-4af0-8464-870fc28798dd',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/4afd2d91-2d3a-48ce-a931-64a6d8b517fd-mandu.jpeg',
        name: '성경만두',
        originalHourlyPay: 30000,
      },
      href: '/api/0-1/the-julge/shops/30edfcc1-16de-4af0-8464-870fc28798dd',
    },
  },
  {
    id: '13dkd33f-1304-4e5c-8c98-32b7e61d5240',
    closed: true,
    description: '도와주세요',
    hourlyPay: 100000,
    startsAt: '2023-09-09T14:00:00.000Z',
    workhour: 1,
    shop: {
      item: {
        address1: '서울시 용산구',
        address2: '백범로77길 33',
        category: '양식',
        description: '스페인 음식점',
        id: 'be05aa78-7d4e-4f17-9b3a-babb41181caf',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/d3fdf139-8b17-46ac-8e72-9ceb9893ae68-xef.jpeg',
        name: 'The Xef',
        originalHourlyPay: 50000,
      },
      href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf',
    },
  },
  {
    closed: false,
    description: '오세요',
    hourlyPay: 25000,
    id: '201e5dc0-e415-472e-a73f-2f322870c7c7',
    startsAt: '2023-09-04T18:00:00.000Z',
    workhour: 3,
    shop: {
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
      item: {
        address1: '서울시 중구',
        address2: '세종대로11길 26',
        category: '한식',
        description: '콩국수 맛집',
        id: '4490151c-5217-4157-b072-9c37b05bed47',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
        name: '진주회관',
        originalHourlyPay: 10000,
      },
    },
  },
  {
    closed: false,
    description: '오세요',
    hourlyPay: 33000,
    id: '13fed2bf-1304-4e5c-8c98-32b7e61d5240',
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
    shop: {
      item: {
        address1: '서울시 종로구',
        address2: '수표로 88',
        category: '한식',
        description: '만두 맛집',
        id: '30edfcc1-16de-4af0-8464-870fc28798dd',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/4afd2d91-2d3a-48ce-a931-64a6d8b517fd-mandu.jpeg',
        name: '성경만두',
        originalHourlyPay: 30000,
      },
      href: '/api/0-1/the-julge/shops/30edfcc1-16de-4af0-8464-870fc28798dd',
    },
  },
  {
    id: '13dkd33f-1304-4e5c-8c98-32b7e61d5240',
    closed: true,
    description: '도와주세요',
    hourlyPay: 100000,
    startsAt: '2023-09-09T14:00:00.000Z',
    workhour: 1,
    shop: {
      item: {
        address1: '서울시 용산구',
        address2: '백범로77길 33',
        category: '양식',
        description: '스페인 음식점',
        id: 'be05aa78-7d4e-4f17-9b3a-babb41181caf',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/d3fdf139-8b17-46ac-8e72-9ceb9893ae68-xef.jpeg',
        name: 'The Xef',
        originalHourlyPay: 50000,
      },
      href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf',
    },
  },
  {
    closed: false,
    description: '오세요',
    hourlyPay: 25000,
    id: '201e5dc0-e415-472e-a73f-2f322870c7c7',
    startsAt: '2023-09-04T18:00:00.000Z',
    workhour: 3,
    shop: {
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
      item: {
        address1: '서울시 중구',
        address2: '세종대로11길 26',
        category: '한식',
        description: '콩국수 맛집',
        id: '4490151c-5217-4157-b072-9c37b05bed47',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
        name: '진주회관',
        originalHourlyPay: 10000,
      },
    },
  },
]

export { NOTICE_ID, MOCK_NOTICE_DETAIL_DATA, MOCK_NOTICES_DATA }
