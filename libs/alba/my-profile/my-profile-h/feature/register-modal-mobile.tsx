'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'
import { getCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

import { FUNNEL_PROFILE_STEPS } from '@/libs/alba/my-profile/my-profile-h/data-access/register-my-profile-data'
import { ADDRESS_OPTIONS } from '@/libs/alba/my-profile/my-profile-h/data-access/select-options'
import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import { updateUserInfo } from '@/libs/shared/api/data-access/request/userRequest'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import ProgressBar from '@/libs/shared/progress-bar/ui/ui-progress-bar'
import useDisableScroll from '@/libs/shared/shared/util/useDisableScroll'
import useEnableToBack from '@/libs/shared/shared/util/useEnableToBack'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './register-modal-mobile.module.scss'

const cx = classNames.bind(styles)
const FUNNEL_TEXT = {
  name: { title: '이름', text: '이름을 입력해주세요', next: 'phone' },
  phone: { title: '연락처', text: '연락처를 입력해주세요', next: 'address' },
  address: {
    title: '선호지역',
    text: '선호 지역을 선택해주세요',
    next: 'bio',
  },
  bio: { title: '소개', text: '본인을 소개해주세요' },
}

interface IfunnelSubmitData {
  name: string
  phone: string
  address: string
  bio: string
}

interface RegisterModalMobileProps {
  showModal: boolean
  onClickCloseModal: () => void
  onClickOpenToast: () => void
  defaultName?: string
  defaultPhone?: string
  defaultAddress?: string
  defaultBio?: string
  setOpenClientLoader: Dispatch<SetStateAction<boolean>>
  setDefaultName: Dispatch<SetStateAction<string>>
  setDefaultPhone: Dispatch<SetStateAction<string>>
  setDefaultAddress: Dispatch<SetStateAction<string>>
  handleClickShowErrorDialog: (text: string) => void
  // setDefaultBio: Dispatch<SetStateAction<string>>
}

export default function RegisterModalMobile({
  showModal,
  onClickCloseModal,
  onClickOpenToast,
  defaultName,
  defaultPhone,
  defaultAddress,
  defaultBio,
  setDefaultName,
  setDefaultPhone,
  setDefaultAddress,
  setOpenClientLoader,
  handleClickShowErrorDialog,
}: RegisterModalMobileProps) {
  useEnableToBack(onClickCloseModal)
  useDisableScroll()

  const router = useRouter()
  const [funnel, setFunnel] = useState<'name' | 'phone' | 'address' | 'bio'>(
    'name',
  )

  const [funnelSubmitData, setFunnelSubmitData] = useState<IfunnelSubmitData>({
    name: '',
    phone: '',
    address: '',
    bio: '',
  })

  const userInputRefs = useRef<HTMLInputElement[]>([])

  const [name, setName] = useState<boolean>(false)
  const [phone, setPhone] = useState<boolean>(false)
  const [address, setAddress] = useState<boolean>(false)
  const [bio, setBio] = useState<boolean>(false)

  const [unmounted, setUnmounted] = useState<boolean>(false)
  const [backmounted, setBackmounted] = useState<boolean>(false)

  const handleClickBackModal = () => {
    if (funnel === 'name') {
      setFunnelSubmitData({
        name: '',
        phone: '',
        address: '',
        bio: '',
      })
      setDefaultName('')
      setDefaultPhone('')
      setDefaultAddress('')

      onClickCloseModal()
    } else if (funnel === 'phone') {
      setBackmounted(true)
      // set funnelSubmitData.name
      setDefaultName(funnelSubmitData.name)

      setTimeout(() => {
        setFunnel('name')
        setBackmounted(false)
      }, 500)
    } else if (funnel === 'address') {
      setBackmounted(true)

      // set funnelSubmitData.phone
      setDefaultPhone(funnelSubmitData.phone)

      setTimeout(() => {
        setFunnel('phone')
        setBackmounted(false)
      }, 500)
    } else if (funnel === 'bio') {
      setBackmounted(true)

      // set funnelSubmitData.address
      setDefaultAddress(funnelSubmitData.address)
      setTimeout(() => {
        setFunnel('address')
        setBackmounted(false)
      }, 500)
    }
  }

  const handleChangeCheckInput =
    (setter: Dispatch<SetStateAction<boolean>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.currentTarget.value) {
        setter(true)
      } else {
        setter(false)
      }
    }

  const handleClickNext =
    (
      setterMove: Dispatch<
        SetStateAction<'name' | 'phone' | 'address' | 'bio'>
      >,
      nextMove: 'name' | 'phone' | 'address' | 'bio',
      refIndex: number,
    ) =>
    () => {
      setUnmounted(true)
      // next 버튼 누르는 동안은 데이터 재렌더링을 막기 위해, 고의적으로 state를 mutable하게 유지
      funnelSubmitData[funnel] = userInputRefs.current[refIndex].value
      setFunnelSubmitData(funnelSubmitData)

      setTimeout(() => {
        setterMove(nextMove)
        setUnmounted(false)
      }, 500)
    }

  const handleClickRegister = async () => {
    funnelSubmitData.bio = userInputRefs.current[3].value
    const userId = getCookie('uid') as string

    setOpenClientLoader(true)
    const res = await updateUserInfo(userId, {
      name: funnelSubmitData.name,
      phone: funnelSubmitData.phone,
      address: funnelSubmitData.address,
      bio: funnelSubmitData.bio,
    })
    setOpenClientLoader(false)

    if (res instanceof Error) {
      // 알 수 없는 에러 처리
      handleClickShowErrorDialog('알 수 없는 에러가 발생했습니다.')
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
      handleClickShowErrorDialog(res)
    } else {
      // response 데이터 가공
      router.refresh()
      onClickOpenToast()
    }

    onClickCloseModal()
  }

  useEffect(() => {
    const handleKeypressBlurMove = (e: KeyboardEvent) => {
      const key = e.key || e.keyCode
      if (key === 'Enter' || key === 13) {
        e.preventDefault()
        document.querySelector('input')?.blur()

        if (funnel === 'name') {
          setUnmounted(true)

          funnelSubmitData[funnel] = userInputRefs.current[0].value
          setFunnelSubmitData(funnelSubmitData)

          setTimeout(() => {
            setFunnel('phone')
            setUnmounted(false)
          }, 500)
        } else if (funnel === 'phone') {
          setUnmounted(true)

          funnelSubmitData[funnel] = userInputRefs.current[1].value
          setFunnelSubmitData(funnelSubmitData)

          setTimeout(() => {
            setFunnel('address')
            setUnmounted(false)
          }, 500)
        } else if (funnel === 'address') {
          setUnmounted(true)

          funnelSubmitData[funnel] = userInputRefs.current[2].value
          setFunnelSubmitData(funnelSubmitData)

          setTimeout(() => {
            setFunnel('bio')
            setUnmounted(false)
          }, 500)
        }
      }
    }

    document
      .querySelector('input')
      ?.addEventListener('keypress', handleKeypressBlurMove)

    return () => {
      document
        .querySelector('input')
        ?.removeEventListener('keypress', handleKeypressBlurMove)
    }
  }, [funnel])

  return (
    <ModalPortalWrapper id="funnel-portal">
      <div
        className={cx('modalWrapper', {
          showModal,
        })}
      >
        <UiBgGrayModal
          onClickBackModal={handleClickBackModal}
          onClickCloseModal={onClickCloseModal}
        >
          <div className={cx('simpleWrapper')}>
            <UiSimpleLayout
              titleSize={24}
              title={FUNNEL_TEXT[funnel].text}
              gap={24}
            >
              {funnel === 'name' && (
                <div
                  className={cx('inputWrapper', {
                    unmounted,
                    backmounted,
                  })}
                >
                  <Input
                    onChange={handleChangeCheckInput(setName)}
                    variant="input-underline"
                    title={FUNNEL_TEXT[funnel].title}
                    isValid={false}
                    isRequired={false}
                    defaultValue={defaultName || ''}
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    ref={(el: HTMLInputElement) =>
                      (userInputRefs.current[0] = el)
                    }
                  />
                </div>
              )}
              {funnel === 'phone' && (
                <div
                  className={cx('inputWrapper', {
                    unmounted,
                    backmounted,
                  })}
                >
                  <Input
                    onChange={handleChangeCheckInput(setPhone)}
                    variant="input-underline"
                    title={FUNNEL_TEXT[funnel].title}
                    isValid={false}
                    isRequired={false}
                    defaultValue={defaultPhone || ''}
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    ref={(el: HTMLInputElement) =>
                      (userInputRefs.current[1] = el)
                    }
                  />
                </div>
              )}
              {funnel === 'address' && (
                <div
                  className={cx('inputWrapper', {
                    unmounted,
                    backmounted,
                  })}
                >
                  <Select
                    variant="search"
                    isRequired={false}
                    onClick={() => setAddress(true)}
                    options={ADDRESS_OPTIONS}
                    defaultValue={defaultAddress || ''}
                    // eslint-disable-next-line no-return-assign, no-param-reassign
                    ref={(el: HTMLInputElement) =>
                      (userInputRefs.current[2] = el)
                    }
                  />
                </div>
              )}
              {funnel === 'bio' && (
                <Input
                  variant="explain"
                  onChange={handleChangeCheckInput(setBio)}
                  title={FUNNEL_TEXT[funnel].title}
                  isValid={false}
                  isRequired={false}
                  defaultValue={defaultBio || ''}
                  // eslint-disable-next-line no-return-assign, no-param-reassign
                  ref={(el: HTMLInputElement) =>
                    (userInputRefs.current[3] = el)
                  }
                />
              )}
            </UiSimpleLayout>
          </div>
        </UiBgGrayModal>

        <div className={cx('btnWrapper')}>
          <ProgressBar
            currentStep={funnel}
            funnelSteps={FUNNEL_PROFILE_STEPS}
          />
          {(name || defaultName) && funnel === 'name' && (
            <ActiveBtn
              text="다음"
              size="large"
              onClick={handleClickNext(setFunnel, 'phone', 0)}
            />
          )}
          {!defaultName && !name && funnel === 'name' && (
            <InactiveBtn text="다음" size="large" onClick={() => {}} />
          )}

          {(phone || defaultPhone) && funnel === 'phone' && (
            <ActiveBtn
              text="다음"
              size="large"
              onClick={handleClickNext(setFunnel, 'address', 1)}
            />
          )}
          {!defaultPhone && !phone && funnel === 'phone' && (
            <InactiveBtn text="다음" size="large" onClick={() => {}} />
          )}

          {(address || defaultAddress) && funnel === 'address' && (
            <ActiveBtn
              text="다음"
              size="large"
              onClick={handleClickNext(setFunnel, 'bio', 2)}
            />
          )}
          {!defaultAddress && !address && funnel === 'address' && (
            <InactiveBtn text="다음" size="large" onClick={() => {}} />
          )}

          {(bio || defaultBio) && funnel === 'bio' && (
            <ActiveBtn
              text="등록하기"
              size="large"
              onClick={handleClickRegister}
            />
          )}
          {!defaultBio && !bio && funnel === 'bio' && (
            <InactiveBtn text="등록하기" size="large" onClick={() => {}} />
          )}
        </div>
      </div>
    </ModalPortalWrapper>
  )
}
