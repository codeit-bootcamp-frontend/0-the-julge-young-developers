const MOCK_NOTIFICATION = [
  {
    id: 0,
    name: 'HS 과일주스',
    duration: '2023-07-14 15:00~18:00', // startsAt + workhour
    startsAt: '2023-07-14 15:00',
    workhour: 3,
    createdAt: '2023-07-10 16:07',
    result: 'accepted',
  },
  {
    id: 1,
    name: '써니 브런치 레스토랑',
    duration: '2023-07-14 15:00~18:00', // startsAt + workhour
    startsAt: '2023-07-14 15:00',
    workhour: 3,
    createdAt: '2023-07-10 16:00',
    result: 'accepted',
  },
  {
    id: 2,
    name: '수리 에스프레소 샵',
    duration: '2023-07-14 15:00~18:00', // startsAt + workhour
    startsAt: '2023-07-14 15:00',
    workhour: 3,
    createdAt: '2023-07-10 13:55',
    result: 'rejected',
  },
]

export default MOCK_NOTIFICATION

/**
 * 필요 데이터들
 * 1. 공고 가게 이름
 * 2. 공고 가게 알바 시간
 * 3. accept / reject 여부
 * 4. accept / reject된 시간
 *
 * API 분석
 * GET /users/{user_id}/alerts > items(array)
 * 1. item
 * - createdAt (4.)
 * - result (3.)
 *
 * 2. shop > item
 * - name (1.)
 *
 * 3. notice > item
 * - startsAt, workhour (2.)
 */

/**
 * 사용 예시
 * 
 * {MOCK_NOTIFICATION.map((item) =>
        item.result === 'accepted' ? (
          <UiAcceptedNotificationItem
            key={item.id}
            name={item.name}
            duration={item.duration}
            createdAt={item.createdAt}
          />
        ) : (
          <UiRejectedNotificationItem
            key={item.id}
            name={item.name}
            duration={item.duration}
            createdAt={item.createdAt}
          />
        ),
      )}
 */
