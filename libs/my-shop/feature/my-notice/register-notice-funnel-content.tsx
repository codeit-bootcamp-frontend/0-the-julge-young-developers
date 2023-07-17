'use client'

import { ChangeEvent, MouseEvent, useState } from 'react'

import classNames from 'classnames/bind'

import { FUNNEL_NOTICE_TITLE } from '@/libs/my-shop/data-access/my-notice-data'
import styles from '@/libs/my-shop/feature/my-shop/register-shop-modal-funnel-content.module.scss'
import useRegisterJobPostingState from '@/libs/my-shop/utill/useRegisterNoticeState'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

const cx = classNames.bind(styles)

export default function RegisterJobPostingFunnelContent({
  onClickToggelModal,
}: {
  onClickToggelModal: () => void
}) {
  const [funnel, setFunnel] = useState<
    'hourlyWage' | 'startsAt' | 'workhour' | 'description'
  >('hourlyWage')
  const [unmounted, setUnmounted] = useState<boolean>(false)
  const [backUnmounted, setBackUnmounted] = useState<boolean>(false)

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
  } = useRegisterJobPostingState('funnel')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!e.target.value) {
      setIsAllFilled(false)
    }
    if (funnel === 'hourlyWage') {
      setHourlyWage(e.target.value)
    } else if (funnel === 'startsAt') {
      setStartsAt(e.target.value)
    } else if (funnel === 'workhour') {
      setWorkhour(e.target.value)
    } else if (funnel === 'description') {
      setDescription(e.target.value)
    }
    setIsAllFilled(true)
  }

  const handleClickButton = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isAllFilled) return

    setUnmounted(true)

    if (funnel === 'hourlyWage') {
      setFunnel('startsAt')
    } else if (funnel === 'startsAt') {
      setFunnel('workhour')
    } else if (funnel === 'workhour') {
      setFunnel('description')
    } else if (funnel === 'description') {
      // api
      onClickToggelModal()
    }

    setTimeout(() => {
      setIsAllFilled(false)
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
  return (
    <UiBgGrayModal
      unmounted={backUnmounted}
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
                  defaultValue={hourlyWage}
                />
              )}
              {funnel === 'startsAt' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_NOTICE_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={startsAt}
                />
              )}
              {funnel === 'workhour' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_NOTICE_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={workhour}
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
              {isAllFilled ? (
                <ActiveBtn text="다음" size="large" type="submit" />
              ) : (
                <InactiveBtn text="다음" size="large" />
              )}
            </div>
          </form>
        </UiSimpleLayout>
      </div>
    </UiBgGrayModal>
  )
}
