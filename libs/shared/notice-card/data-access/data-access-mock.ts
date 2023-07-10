const MOCK_DOMAIN = {
  title: '내가 등록한 공고',
}

const MOCK_NOTICES = [
  {
    name: '성경만두0',
    duration: '2023-01-03 15:00~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.
    workhour: 3,
    address: '서울시 종로구', // address1에 나와 있는 것들
    hourlyPay: 9500,
    originalHourlyPay: 9000,
    imageUrl:
      'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
    closed: true,
  },
  {
    name: '성경만두',
    duration: '2023-01-03 15:00~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.
    workhour: 3,
    address: '서울시 종로구', // address1에 나와 있는 것들
    hourlyPay: 18000,
    originalHourlyPay: 9000,
    imageUrl:
      'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
    closed: false,
  },
  {
    name: '성경만두2',
    duration: '2023-01-03 15:00~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.
    workhour: 3,
    address: '서울시 종로구', // address1에 나와 있는 것들
    hourlyPay: 9500,
    originalHourlyPay: 9000,
    imageUrl:
      'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
    closed: false,
  },
  {
    name: '성경만두3',
    duration: '2023-01-03 15:00~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.
    workhour: 3,
    address: '서울시 종로구', // address1에 나와 있는 것들
    hourlyPay: 9500,
    originalHourlyPay: 9500,
    imageUrl:
      'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
    closed: false,
  },
]

export { MOCK_DOMAIN, MOCK_NOTICES }
