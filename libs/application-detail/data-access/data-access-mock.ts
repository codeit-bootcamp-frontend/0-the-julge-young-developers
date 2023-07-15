import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'

const MOCK_APPLICATION_DATA: { items: NoticeUserApplicationItem[] } = {
  items: [
    {
      item: {
        createdAt: '2023-07-06T13:23:26.894Z',
        id: '0983e840-a4c8-41ec-9071-076faa0ae38e',
        notice: {
          href: '/api/0-1/the-julge/shops/30edfcc1-16de-4af0-8464-870fc28798dd/notices/13fed2bf-1304-4e5c-8c98-32b7e61d5240',
          item: {
            closed: false,
            description: '오세요',
            hourlyPay: 33000,
            id: '13fed2bf-1304-4e5c-8c98-32b7e61d5240',
            startsAt: '2023-10-14T18:00:00.000Z',
            workhour: 10,
          },
        },
        shop: {
          href: '/api/0-1/the-julge/shops/30edfcc1-16de-4af0-8464-870fc28798dd',
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
        },
        status: 'pending',
      },
      links: [
        {
          description: '가게 정보',
          href: '/api/0-1/the-julge/shops/30edfcc1-16de-4af0-8464-870fc28798dd',
          method: 'GET',
          rel: 'shop',
        },
        {
          description: '공고 정보',
          href: '/api/0-1/the-julge/shops/30edfcc1-16de-4af0-8464-870fc28798dd/notices/13fed2bf-1304-4e5c-8c98-32b7e61d5240',
          method: 'GET',
          rel: 'notice',
        },
      ],
    },
    {
      item: {
        createdAt: '2023-07-06T13:20:45.867Z',
        id: '0b7b4aa1-1190-4fc1-9609-2fa02584a4c1',
        notice: {
          href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf/notices/f62dbe77-4ccf-403c-a94b-9d7e3e1bf970',
          item: {
            id: '0983e840-a4c8-41ec-9071-076faa0ae38e',
            closed: true,
            description: '도와주세요',
            hourlyPay: 100000,
            startsAt: '2023-09-09T14:00:00.000Z',
            workhour: 1,
          },
        },
        shop: {
          href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf',
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
        },
        status: 'rejected',
      },
      links: [
        {
          description: '가게 정보',
          href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf',
          method: 'GET',
          rel: 'shop',
        },
        {
          description: '공고 정보',
          href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf/notices/f62dbe77-4ccf-403c-a94b-9d7e3e1bf970',
          method: 'GET',
          rel: 'notice',
        },
      ],
    },
    {
      item: {
        createdAt: '2023-07-06T13:18:03.845Z',
        id: 'e342e952-cf4b-4bb7-b0c4-fb2194642e9e',
        notice: {
          href: '/api/0-1/the-julge/shops/be05aa78-7d4e-4f17-9b3a-babb41181caf/notices/f62dbe77-4ccf-403c-a94b-9d7e3e1bf970',
          item: {
            closed: false,
            description: '오세요',
            hourlyPay: 25000,
            id: '201e5dc0-e415-472e-a73f-2f322870c7c7',
            startsAt: '2023-09-04T18:00:00.000Z',
            workhour: 3,
          },
        },
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
        status: 'pending',
      },
      links: [
        {
          description: '가게 정보',
          href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
          method: 'GET',
          rel: 'shop',
        },
        {
          description: '공고 정보',
          href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/201e5dc0-e415-472e-a73f-2f322870c7c7',
          method: 'GET',
          rel: 'notice',
        },
      ],
    },
  ],
}

export { MOCK_APPLICATION_DATA }
