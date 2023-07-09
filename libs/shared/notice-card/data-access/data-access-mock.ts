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
    closed: true,
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

/**
 * 사용 예시 
 * 
 * <>
      <UiNoticeDetailCard
        name="성경만두4"
        imageUrl="https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/d3fdf139-8b17-46ac-8e72-9ceb9893ae68-xef.jpeg"
        duration="2023-01-03 15:00~ 18:00"
        workhour={3}
        address="서울시 종로구"
        closed={false}
        description="살려주세요"
        hourlyPay={19000}
        originalHourlyPay={9500}
      >
        <button type="button">버튼</button>
      </UiNoticeDetailCard>

      <UiNoticeCardList
        title={MOCK_DOMAIN.title}
        // filterElement={<div>순서/상세필터 컴포넌트</div>}
        // ref={first}
      >
        {MOCK_NOTICES.map((notice) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <UiNoticeCardItem key={notice.name} {...notice} />
          // <UiNoticeCardItem
          //   key={notice.name}
          //   name={notice.name}
          //   duration={notice.duration}
          //   workhour={notice.workhour}
          //   address={notice.address}
          //   hourlyPay={notice.hourlyPay}
          //   originalHourlyPay={notice.originalHourlyPay}
          //   imageUrl={notice.imageUrl}
          //   closed={notice.closed}
          // />
        ))}
      </UiNoticeCardList>
    </>
 */

export { MOCK_DOMAIN, MOCK_NOTICES }
