import React from 'react'

import classNames from 'classnames/bind'

import styles from '@/libs/alba/my-profile/my-profile-h/feature/register-modal.module.scss'
import useRegisterNoticeState from '@/libs/my-shop/utill/useRegisterNoticeState'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import SelectDatePicker from '@/libs/shared/input-select-btn/feature/feature-date-picker'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

const cx = classNames.bind(styles)

export default function RegisterNoticeDefaultContent({
  showModal,
  onClickToggelModal,
}: {
  showModal: boolean
  onClickToggelModal: () => void
}) {
  const {
    // hourlyWage,
    setHourlyWage,
    startsAt,
    setStartsAt,
    // workhour,
    setWorkhour,
    // description,
    setDescription,
    isAllFilled,
    // setIsAllFilled,
  } = useRegisterNoticeState()
  return (
    <div className={cx('modalWrapper', { showModal })}>
      <UiBgGrayModal onClickCloseModal={onClickToggelModal}>
        <UiSimpleLayout title="공고 등록" gap={24}>
          <div className={cx('inputTopWrapper')}>
            <div className={cx('inputTopItem')}>
              <Input
                onChange={(e) => setHourlyWage(e.target.value)}
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
                onChange={(e) => setWorkhour(e.target.value)}
                variant="input"
                title="업무 시간*"
                isValid={false}
                isRequired={false}
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
          <div className={cx('btnWrapper')}>
            {isAllFilled ? (
              <ActiveBtn
                text="등록하기"
                size="large"
                onClick={() => console.log('등록하기')}
              />
            ) : (
              <InactiveBtn
                text="등록하기"
                size="large"
                onClick={() => console.log('안 등록하기')}
              />
            )}
          </div>
        </UiSimpleLayout>
      </UiBgGrayModal>
    </div>
  )
}
