'use client'

import { MouseEvent, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import styles from '@/libs/alba/my-profile/my-profile-h/feature/register-modal.module.scss'
import useRegisterNoticeState from '@/libs/my-shop/utill/useRegisterNoticeState'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import SelectDatePicker from '@/libs/shared/input-select-btn/feature/feature-date-picker'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiLoading from '@/libs/shared/loading/ui/ui-loading'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import { sendNoticeRequest } from '../../data-access/data-access-send-notice-request'

const cx = classNames.bind(styles)

export default function RegisterNoticeDefaultContent({
  showModal,
  onClickToggelModal,
}: {
  showModal: boolean
  onClickToggelModal: () => void
}) {
  const [isLoading, setISLoading] = useState(false)
  const router = useRouter()
  const {
    hourlyWage,
    setHourlyWage,
    startsAt,
    setStartsAt,
    workhour,
    setWorkhour,
    description,
    setDescription,
    isAllFilled,
  } = useRegisterNoticeState()

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const sid = getCookie('sid')
    if (!startsAt) {
      return
    }
    setISLoading(true)
    const isSuccess = await sendNoticeRequest({
      shopId: `${sid}`,
      hourlyPay: hourlyWage as number,
      startsAt: startsAt.toISOString(),
      workhour: workhour as number,
      description,
    })
    console.log(isSuccess)
    if (isSuccess) {
      setISLoading(false)
      onClickToggelModal()
      router.refresh()
    } else {
      setISLoading(false)
      // 실패의 경우 처리
    }
  }

  const renderSubmitButton = () => {
    if (!isAllFilled) {
      return <InactiveBtn text="등록하기" size="large" />
    }

    if (isLoading) {
      return <UiLoading />
    }

    return <ActiveBtn text="등록하기" size="large" type="submit" />
  }

  return (
    <div className={cx('modalWrapper', { showModal })}>
      <UiBgGrayModal onClickCloseModal={onClickToggelModal}>
        <UiSimpleLayout title="공고 등록" gap={24}>
          <form onSubmit={handleSubmit}>
            <div className={cx('inputTopWrapper')}>
              <div className={cx('inputTopItem')}>
                <Input
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  variant="input"
                  title="시급*"
                  isValid={false}
                  isRequired={false}
                />
              </div>
              <div className={cx('inputTopItem')}>
                <SelectDatePicker
                  title="시작 일시*"
                  onSelectDate={setStartsAt}
                  selectedDate={startsAt}
                />
              </div>
              <div className={cx('inputTopItem')}>
                {/* date picker? */}
                <Input
                  onChange={(e) => setWorkhour(Number(e.target.value))}
                  variant="input"
                  title="업무 시간*"
                  isValid={false}
                  isRequired={false}
                  suffix="시간"
                />
              </div>
            </div>
            <div className={cx('inputBottomItem')}>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                variant="explain"
                title="공고 설명*"
                isValid={false}
                isRequired={false}
              />
            </div>
            <div className={cx('btnWrapper')}>{renderSubmitButton()}</div>
          </form>
        </UiSimpleLayout>
      </UiBgGrayModal>
    </div>
  )
}
