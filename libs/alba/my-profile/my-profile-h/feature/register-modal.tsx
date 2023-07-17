'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { OPTIONS } from '@/libs/alba/my-profile/my-profile-h/data-access/select-options'
import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import { updateUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './register-modal.module.scss'

const cx = classNames.bind(styles)

interface RegisterModalProps {
  showModal?: boolean
  onClickCloseModal: () => void
  defaultName?: string
  defaultPhone?: string
  defaultAddress?: string
  defaultBio?: string
}

export default function RegisterModal({
  showModal,
  onClickCloseModal,
  defaultName,
  defaultPhone,
  defaultAddress,
  defaultBio,
}: RegisterModalProps) {
  const router = useRouter()
  const [activeBtn, setActiveBtn] = useState<boolean>(false)

  const userInputRefs = useRef<HTMLInputElement[]>([])

  const [name, setName] = useState<boolean>(false)
  const [phone, setPhone] = useState<boolean>(false)
  const [address, setAddress] = useState<boolean>(false)
  const [bio, setBio] = useState<boolean>(false)

  const handleChangeCheckInput =
    (setter: Dispatch<SetStateAction<boolean>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.currentTarget.value) {
        setter(true)
      } else {
        setter(false)
      }
    }

  const handleClickRegister = async () => {
    const inputValue: Array<string | boolean> = []
    userInputRefs.current.forEach((ref) => {
      if (typeof ref !== 'function') {
        if (ref.value) {
          inputValue.push(ref.value)
        } else {
          inputValue.push(false)
        }
      }
    })

    let flag = true
    inputValue.forEach((iv) => {
      if (iv === false) {
        flag = false
      }
    })

    if (flag) {
      const userId = getCookie('uid') as string

      await updateUserInfo(userId, {
        name: inputValue[0] as string,
        phone: inputValue[1] as string,
        address: inputValue[2] as string,
        bio: inputValue[3] as string,
      })

      router.refresh()
      onClickCloseModal()
    }
  }

  useEffect(() => {
    if (name && phone && address && bio) {
      setActiveBtn(true)
    } else {
      setActiveBtn(false)
    }
  }, [name, phone, address, bio])

  return (
    <ModalPortalWrapper id="funnel-portal">
      <div
        className={cx('modalWrapper', {
          showModal,
        })}
      >
        <UiBgGrayModal onClickCloseModal={onClickCloseModal}>
          <UiSimpleLayout title="내 프로필" gap={24}>
            <div className={cx('inputTopWrapper')}>
              <div className={cx('inputTopItem')}>
                <Input
                  onChange={handleChangeCheckInput(setName)}
                  variant="input"
                  title="이름*"
                  isValid={false}
                  isRequired={false}
                  defaultValue={defaultName || ''}
                  // eslint-disable-next-line no-return-assign, no-param-reassign
                  ref={(el: HTMLInputElement) =>
                    (userInputRefs.current[0] = el)
                  }
                />
              </div>
              <div className={cx('inputTopItem')}>
                <Input
                  onChange={handleChangeCheckInput(setPhone)}
                  variant="input"
                  title="연락처*"
                  isValid={false}
                  isRequired={false}
                  defaultValue={defaultPhone || ''}
                  // eslint-disable-next-line no-return-assign, no-param-reassign
                  ref={(el: HTMLInputElement) =>
                    (userInputRefs.current[1] = el)
                  }
                />
              </div>
              <div className={cx('inputTopItem')}>
                <Select
                  variant="search"
                  title="선호지역*"
                  isRequired={false}
                  defaultValue={defaultAddress || ''}
                  options={OPTIONS}
                  onClick={() => setAddress(true)}
                  // eslint-disable-next-line no-return-assign, no-param-reassign
                  ref={(el: HTMLInputElement) =>
                    (userInputRefs.current[2] = el)
                  }
                />
              </div>
            </div>
            <div className={cx('inputBottomItem')}>
              <Input
                onChange={handleChangeCheckInput(setBio)}
                variant="explain"
                title="소개*"
                isValid={false}
                isRequired={false}
                defaultValue={defaultBio || ''}
                // eslint-disable-next-line no-return-assign, no-param-reassign
                ref={(el: HTMLInputElement) => (userInputRefs.current[3] = el)}
              />
            </div>
            <div className={cx('btnWrapper')}>
              {(defaultName && defaultPhone && defaultAddress && defaultBio) ||
              activeBtn ? (
                <ActiveBtn
                  text="등록하기"
                  size="large"
                  onClick={handleClickRegister}
                />
              ) : (
                <InactiveBtn text="등록하기" size="large" onClick={() => {}} />
              )}
            </div>
          </UiSimpleLayout>
        </UiBgGrayModal>
      </div>
    </ModalPortalWrapper>
  )
}
