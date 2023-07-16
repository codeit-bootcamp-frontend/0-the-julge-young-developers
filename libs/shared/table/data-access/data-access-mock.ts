import {
  ApplicantList,
  ApplicationHistory,
} from '@/libs/shared/table/type-table'

const COL_NAMES = {
  employer: ['신청자', '소개', '전화번호', '상태'],
  employee: ['가게', '일자', '시급', '상태'],
}

const MOCK_APPLICATION_HISTORY_DATA: ApplicationHistory[] = [
  {
    id: '0983e840-a4c8-41ec-9071-076faa0ae38e',
    status: 'pending',
    name: '성경만두',
    hourlyPay: 33000,
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
  },
  {
    id: '0983e840-a4c8-41ec-9071-076faa0ae38f',
    status: 'pending',
    name: '성경만두',
    hourlyPay: 33000,
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
  },
  {
    id: '0983e840-a4c8-41ec-9071-076faa0ae38g',
    status: 'pending',
    name: '성경만두',
    hourlyPay: 33000,
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
  },
  {
    id: '0983e840-a4c8-41ec-9071-076faa0ae38h',
    status: 'pending',
    name: '성경만두',
    hourlyPay: 33000,
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
  },
  {
    id: '0983e840-a4c8-41ec-9071-076faa0ae38i',
    status: 'pending',
    name: '성경만두',
    hourlyPay: 33000,
    startsAt: '2023-10-14T18:00:00.000Z',
    workhour: 10,
  },
]

const MOCK_APPLICANT_LIST_DATA: ApplicantList[] = [
  {
    id: 'a', // application_id: 상태 클릭 시 변동에 활용
    status: 'pending',
    name: '가나다',
    description:
      '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드리겠습니다.',
    phone: '010-1234-5678',
  },
  {
    id: 'b', // application_id: 상태 클릭 시 변동에 활용
    status: 'rejected',
    name: '가나다',
    description:
      '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드리겠습니다.',
    phone: '010-1234-5678',
  },
  {
    id: 'c', // application_id: 상태 클릭 시 변동에 활용
    status: 'accepted',
    name: '가나다',
    description:
      '최선을 다해 열심히 일합니다. 다수의 업무 경험을 바탕으로 확실한 일처리 보여드리겠습니다.',
    phone: '010-1234-5678',
  },
]

export { COL_NAMES, MOCK_APPLICATION_HISTORY_DATA, MOCK_APPLICANT_LIST_DATA }
