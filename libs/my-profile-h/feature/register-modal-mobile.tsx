'use client'

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import classNames from 'classnames/bind'

import { OPTIONS } from '@/libs/my-profile-h/data-access/select-options'
import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
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
  defaultName?: string
  defaultPhone?: string
  defaultAddress?: string
  defaultBio?: string
  setDefaultName: Dispatch<SetStateAction<string>>
  setDefaultPhone: Dispatch<SetStateAction<string>>
  setDefaultAddress: Dispatch<SetStateAction<string>>
  // setDefaultBio: Dispatch<SetStateAction<string>>
}

export default function RegisterModalMobile({
  showModal,
  onClickCloseModal,
  defaultName,
  defaultPhone,
  defaultAddress,
  defaultBio,
  setDefaultName,
  setDefaultPhone,
  setDefaultAddress,
}: RegisterModalMobileProps) {
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

  const handleClickBackModal = () => {
    if (funnel === 'name') {
      onClickCloseModal()
    } else if (funnel === 'phone') {
      // set funnelSubmitData.name
      setDefaultName(funnelSubmitData.name)
      setFunnel('name')
    } else if (funnel === 'address') {
      // set funnelSubmitData.phone
      setDefaultPhone(funnelSubmitData.phone)
      setFunnel('phone')
    } else if (funnel === 'bio') {
      // set funnelSubmitData.address
      setDefaultAddress(funnelSubmitData.address)
      setFunnel('address')
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
    // console.log(funnelSubmitData)

    // api post call
    // await updateUserInfo(userId, funnelSubmitData.name, funnelSubmitData.phone, funnelSubmitData.address, funnelSubmitData.bio)
    // router.refresh()
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
          unmounted={unmounted}
          onClickBackModal={handleClickBackModal}
          onClickCloseModal={onClickCloseModal}
        >
          <div
            className={cx('simpleWrapper', {
              unmounted,
            })}
          >
            <UiSimpleLayout
              titleSize={24}
              title={FUNNEL_TEXT[funnel].text}
              gap={24}
            >
              {funnel === 'name' && (
                <div
                  className={cx('inputWrapper', {
                    unmounted,
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
                  })}
                >
                  <Select
                    variant="search"
                    isRequired={false}
                    onClick={() => setAddress(true)}
                    options={OPTIONS}
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

        <div
          className={cx('btnWrapper', {
            unmounted,
          })}
        >
          {name && funnel === 'name' && (
            <ActiveBtn
              text="다음"
              size="large"
              onClick={handleClickNext(setFunnel, 'phone', 0)}
            />
          )}
          {!name && funnel === 'name' && (
            <InactiveBtn text="다음" size="large" onClick={() => {}} />
          )}

          {phone && funnel === 'phone' && (
            <ActiveBtn
              text="다음"
              size="large"
              onClick={handleClickNext(setFunnel, 'address', 1)}
            />
          )}
          {!phone && funnel === 'phone' && (
            <InactiveBtn text="다음" size="large" onClick={() => {}} />
          )}

          {address && funnel === 'address' && (
            <ActiveBtn
              text="다음"
              size="large"
              onClick={handleClickNext(setFunnel, 'bio', 2)}
            />
          )}
          {!address && funnel === 'address' && (
            <InactiveBtn text="다음" size="large" onClick={() => {}} />
          )}

          {bio && funnel === 'bio' && (
            <ActiveBtn
              text="등록하기"
              size="large"
              onClick={handleClickRegister}
            />
          )}
          {!bio && funnel === 'bio' && (
            <InactiveBtn text="등록하기" size="large" onClick={() => {}} />
          )}
        </div>
      </div>
    </ModalPortalWrapper>
  )
}
