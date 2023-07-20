'use client'

import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { FUNNEL_NOTICE_TITLE } from '@/libs/my-shop/data-access/my-notice-data'
import styles from '@/libs/my-shop/feature/my-shop/register-shop-modal-funnel-content.module.scss'
import useRegisterJobPostingState from '@/libs/my-shop/utill/useRegisterNoticeState'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import SelectDatePicker from '@/libs/shared/input-select-btn/feature/feature-date-picker'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiLoading from '@/libs/shared/loading/ui/ui-loading'
import { NoticeEditData } from '@/libs/shared/notice-card/type-notice-card'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import { sendNoticeRequest } from '../../data-access/data-access-send-notice-request'

const cx = classNames.bind(styles)

export default function RegisterJobPostingFunnelContent({
  onClickToggelModal,
  notice,
  onClickShowToast,
  onClickShowErrorDialog,
}: {
  onClickToggelModal: () => void
  notice?: NoticeEditData
  onClickShowToast: () => void
  onClickShowErrorDialog: (text: string) => void
}) {
  const [funnel, setFunnel] = useState<
    'hourlyWage' | 'startsAt' | 'workhour' | 'description'
  >('hourlyWage')
  const [unmounted, setUnmounted] = useState<boolean>(false)
  const [backUnmounted, setBackUnmounted] = useState<boolean>(false)
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
    setIsAllFilled,
  } = useRegisterJobPostingState({ variant: 'funnel', notice })

  useEffect(() => {
    if (notice) {
      setIsAllFilled(true)
    }
  }, [notice, setIsAllFilled])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!e.target.value) {
      setIsAllFilled(false)
    } else {
      setIsAllFilled(true)
    }
    if (funnel === 'hourlyWage') {
      setHourlyWage(Number(e.target.value))
    } else if (funnel === 'workhour') {
      setWorkhour(Number(e.target.value))
    } else if (funnel === 'description') {
      setDescription(e.target.value)
    }
  }

  useEffect(() => {
    if (startsAt) {
      setIsAllFilled(true)
    } else {
      setIsAllFilled(false)
    }
  }, [startsAt, setIsAllFilled])

  const handleClickButton = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isAllFilled) return

    if (funnel !== 'description') {
      setUnmounted(true)
    }

    if (funnel === 'hourlyWage') {
      if (!hourlyWage) {
        setIsAllFilled(false)
      }
      setFunnel('startsAt')
    } else if (funnel === 'startsAt') {
      if (!startsAt) {
        setIsAllFilled(false)
      }
      setFunnel('workhour')
    } else if (funnel === 'workhour') {
      if (!workhour) {
        setIsAllFilled(false)
      }
      setFunnel('description')
    } else if (funnel === 'description') {
      e.preventDefault()
      const sid = getCookie('sid')
      if (!startsAt) {
        return
      }
      setISLoading(true)
      const [isError, errorMessage] = await sendNoticeRequest({
        shopId: `${sid}`,
        hourlyPay: hourlyWage as number,
        startsAt: startsAt.toISOString(),
        workhour: workhour as number,
        description,
        noticeId: notice ? notice.noticeId : undefined,
      })
      if (!isError) {
        setISLoading(false)
        onClickToggelModal()
        onClickShowToast() // 토스트 띄우기
        router.refresh()
      } else {
        setISLoading(false)
        // 실패의 경우 처리
        onClickShowErrorDialog(errorMessage)
      }
    }

    setTimeout(() => {
      setUnmounted(false)
    }, 500)
  }

  const handleClickBackModal = () => {
    setBackUnmounted(true)

    if (funnel === 'hourlyWage') {
      onClickToggelModal()
    } else if (funnel === 'startsAt') {
      setFunnel('hourlyWage')
      if (hourlyWage) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'workhour') {
      setFunnel('startsAt')
      if (startsAt) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'description') {
      setFunnel('workhour')
      if (workhour) {
        setIsAllFilled(true)
      }
    }

    setTimeout(() => {
      setBackUnmounted(false)
    }, 500)
  }

  const renderSubmitButton = () => {
    if (!isAllFilled) {
      return (
        <InactiveBtn
          text={funnel === 'description' ? '완료하기' : '다음'}
          size="large"
        />
      )
    }

    if (isLoading) {
      return <UiLoading />
    }

    return (
      <ActiveBtn
        text={funnel === 'description' ? '완료하기' : '다음'}
        size="large"
        type="submit"
      />
    )
  }

  const handleClickDatePicker = (value: Date) => {
    if (startsAt) {
      setIsAllFilled(true)
    }
    setStartsAt(value)
  }

  return (
    <UiBgGrayModal
      onClickBackModal={handleClickBackModal}
      onClickCloseModal={onClickToggelModal}
    >
      <div className={cx('wrapper', { unmounted, backUnmounted })}>
        <UiSimpleLayout
          titleSize={24}
          title={FUNNEL_NOTICE_TITLE[funnel].text}
          gap={24}
        >
          <form onSubmit={handleClickButton}>
            <div className={cx('inputWrap', { unmounted, backUnmounted })}>
              {funnel === 'hourlyWage' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_NOTICE_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={hourlyWage ? String(hourlyWage) : ''}
                />
              )}
              {funnel === 'startsAt' && (
                <SelectDatePicker
                  variant="minToday"
                  title={FUNNEL_NOTICE_TITLE[funnel].title}
                  onSelectDate={handleClickDatePicker}
                  selectedDate={startsAt}
                />
              )}
              {funnel === 'workhour' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_NOTICE_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={workhour ? String(workhour) : ''}
                />
              )}
              {funnel === 'description' && (
                <Input
                  variant="explain-underline"
                  title={FUNNEL_NOTICE_TITLE[funnel].title}
                  isRequired={false}
                  onChange={handleChange}
                  defaultValue={description}
                />
              )}
            </div>
            <div className={cx('button', { unmounted, backUnmounted })}>
              {renderSubmitButton()}
            </div>
          </form>
        </UiSimpleLayout>
      </div>
    </UiBgGrayModal>
  )
}
