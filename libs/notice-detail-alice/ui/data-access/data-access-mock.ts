const MOCK_NOTICE_DETAIL_DATA = {
  name: '성경만두0',
  category: '식당',
  duration: '2023-01-03 15:00~18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.
  workhour: 3,
  address: '서울시 종로구', // address1에 나와 있는 것들
  description:
    '알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.',
  hourlyPay: 9500,
  originalHourlyPay: 9000,
  imageUrl:
    'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
  closed: true,
}

export { MOCK_NOTICE_DETAIL_DATA }
