import {
  ApplicantList,
  ApplicationHistory,
} from '@/libs/shared/table/type-table'

const COL_NAMES = {
  employer: ['신청자', '소개', '전화번호', '상태'],
  employee: ['가게', '일자', '시급', '상태'],
}

const MOCK_APPLICATION_HISTORIES: ApplicationHistory[] = [
  {
    id: 'a',
    status: 'pending',
    duration: '2023-01-03 15:00 ~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.\
    shopName: 'HS 과일주스',
    hourlyPay: '15,000원',
  },
  {
    id: 'b',
    status: 'accepted',
    duration: '2023-01-03 15:00 ~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.\
    shopName: 'HS 과일주스',
    hourlyPay: '15,000원',
  },
  {
    id: 'c',
    status: 'rejected',
    duration: '2023-01-03 15:00 ~ 18:00', // startsAt + workhour를 활용해서 이 형식으로 변환해야 한다.\
    shopName: 'HS 과일주스',
    hourlyPay: '15,000원',
  },
]

const MOCK_APPLICANT_LISTS: ApplicantList[] = [
  {
    id: 'a', // application_id: 상태 클릭 시 변동에 활용
    status: 'pending',
    userName: '가나다',
    description:
      '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드리겠습니다.',
    phone: '010-1234-5678',
  },
  {
    id: 'b', // application_id: 상태 클릭 시 변동에 활용
    status: 'rejected',
    userName: '가나다',
    description:
      '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드리겠습니다.',
    phone: '010-1234-5678',
  },
  {
    id: 'c', // application_id: 상태 클릭 시 변동에 활용
    status: 'accepted',
    userName: '가나다',
    description:
      '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드리겠습니다.',
    phone: '010-1234-5678',
  },
]

export { COL_NAMES, MOCK_APPLICATION_HISTORIES, MOCK_APPLICANT_LISTS }
