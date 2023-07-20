'use client'

import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { useRouter } from 'next/navigation'

import { ADDRESS_OPTIONS } from '@/libs/alba/my-profile/my-profile-h/data-access/select-options'
import { sendRegisterShopRequest } from '@/libs/my-shop/data-access/data-access-send-register-shop-request'
import {
  CATEGORY_DATA,
  FUNNEL_SHOP_TITLE,
} from '@/libs/my-shop/data-access/my-shop-register-data'
import { Shop } from '@/libs/my-shop/type-my-shop'
import useRegisterShopState from '@/libs/my-shop/utill/useRegisterShopState'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import ImageInput from '@/libs/shared/input-select-btn/feature/feature-image-input'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiLoading from '@/libs/shared/loading/ui/ui-loading'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './register-shop-modal-funnel-content.module.scss'

const cx = classNames.bind(styles)

export default function RegisterShopModalFunnelContent({
  shop,
  onClickToggelModal,
  onClickShowToast,
  onClickShowErrorDialog,
}: {
  shop?: Shop
  onClickToggelModal: () => void
  onClickShowToast: () => void
  onClickShowErrorDialog: (text: string) => void
}) {
  const [isLoading, setISLoading] = useState(false)
  const router = useRouter()
  const {
    shopName,
    setShopName,
    category,
    setCategory,
    address,
    setAddress,
    detailAddress,
    setDetailAddress,
    defaultHourlyWage,
    setDefaultHourlyWage,
    selectedImage,
    setSelectedImage,
    preselectedImageRef,
    description,
    setDescription,
    isAllFilled,
    setIsAllFilled,
  } = useRegisterShopState({ variant: 'funnel', shop })

  const [funnel, setFunnel] = useState<
    | 'name'
    | 'category'
    | 'address'
    | 'detailAddress'
    | 'defaultHourlyWage'
    | 'image'
    | 'description'
  >('name')
  const [unmounted, setUnmounted] = useState<boolean>(false)
  const [backUnmounted, setBackUnmounted] = useState<boolean>(false)

  useEffect(() => {
    if (funnel === 'image' && (selectedImage || preselectedImageRef.current)) {
      setIsAllFilled(true)
    }
  }, [funnel, preselectedImageRef, selectedImage, setIsAllFilled])

  useEffect(() => {
    if (shop) {
      setIsAllFilled(true)
    }
  }, [setIsAllFilled, shop])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log('handleChange')

    const { value } = e.target
    if (value) {
      setIsAllFilled(true)
    } else {
      setIsAllFilled(false)
    }

    switch (funnel) {
      case 'name':
        setShopName(value)
        break
      case 'address':
        setAddress(value)
        if (ADDRESS_OPTIONS.some((option) => option.value === value)) {
          setIsAllFilled(true)
        } else {
          setIsAllFilled(false)
        }
        break
      case 'detailAddress':
        setDetailAddress(value)
        break
      case 'defaultHourlyWage':
        setDefaultHourlyWage(Number(value))
        break
      case 'description':
        setDescription(value)
        break
      case 'category':
        setCategory(value)
        if (CATEGORY_DATA.some((option) => option.value === value)) {
          setIsAllFilled(true)
        } else {
          setIsAllFilled(false)
        }
        break
      default:
        break
    }
  }
  const handleClick = (value: string) => {
    if (!value) return

    if (funnel === 'category') {
      setCategory(value)
    } else if (funnel === 'address') {
      setAddress(value)
    }
    setIsAllFilled(true)
  }

  const sendRequest = async () => {
    setISLoading(true)
    const [isError, errorMessage] = await sendRegisterShopRequest(
      shop,
      shopName,
      category,
      address,
      detailAddress,
      defaultHourlyWage,
      selectedImage,
      description,
    )
    if (!isError) {
      setISLoading(false)
      onClickToggelModal()
      onClickShowToast()
      router.refresh()
    } else {
      setISLoading(false)
      onClickShowErrorDialog(errorMessage)
    }
  }

  const handleClickSubmitButton = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isAllFilled) return

    if (funnel !== 'description') {
      setUnmounted(true)
    }

    if (funnel === 'name') {
      if (!category) {
        setIsAllFilled(false)
      }
      setFunnel('category')
    } else if (funnel === 'category') {
      if (!address) {
        setIsAllFilled(false)
      }
      setFunnel('address')
    } else if (funnel === 'address') {
      if (!detailAddress) {
        setIsAllFilled(false)
      }
      setFunnel('detailAddress')
    } else if (funnel === 'detailAddress') {
      if (!defaultHourlyWage) {
        setIsAllFilled(false)
      }
      setFunnel('defaultHourlyWage')
    } else if (funnel === 'defaultHourlyWage') {
      if (!selectedImage) {
        setIsAllFilled(false)
      }
      setFunnel('image')
    } else if (funnel === 'image') {
      if (!description) {
        setIsAllFilled(false)
      }
      setFunnel('description')
    } else if (funnel === 'description') {
      await sendRequest()
      return
    }

    setTimeout(() => {
      setUnmounted(false)
    }, 500)
  }

  const handleClickBackModal = () => {
    setBackUnmounted(true)

    if (funnel === 'name') {
      onClickToggelModal()
      return
    }
    if (funnel === 'category') {
      setFunnel('name')
      if (shopName) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'address') {
      setFunnel('category')
      if (category) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'detailAddress') {
      setFunnel('address')
      if (address) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'defaultHourlyWage') {
      setFunnel('detailAddress')
      if (detailAddress) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'image') {
      setFunnel('defaultHourlyWage')
      if (defaultHourlyWage) {
        setIsAllFilled(true)
      }
    } else if (funnel === 'description') {
      setFunnel('image')
      if (selectedImage) {
        setIsAllFilled(true)
      }
    }

    setTimeout(() => {
      setBackUnmounted(false)
    }, 500)
  }

  const renderSubmitButton = () => {
    if (!isAllFilled) {
      return <InactiveBtn text="완료하기" size="large" />
    }

    if (isLoading) {
      return <UiLoading />
    }

    return <ActiveBtn text="완료하기" size="large" type="submit" />
  }

  return (
    <UiBgGrayModal
      onClickBackModal={handleClickBackModal}
      onClickCloseModal={onClickToggelModal}
    >
      <div className={cx('wrapper', { unmounted, backUnmounted })}>
        <UiSimpleLayout
          titleSize={24}
          title={FUNNEL_SHOP_TITLE[funnel].text}
          gap={24}
        >
          <form onSubmit={handleClickSubmitButton}>
            <div className={cx('inputWrap', { unmounted, backUnmounted })}>
              {funnel === 'name' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_SHOP_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={shopName}
                />
              )}
              {funnel === 'address' && (
                <Select
                  variant="search"
                  title={FUNNEL_SHOP_TITLE[funnel].title}
                  isRequired={true}
                  onClick={handleClick}
                  defaultValue={address}
                  options={ADDRESS_OPTIONS}
                  onChange={handleChange}
                />
              )}
              {funnel === 'detailAddress' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_SHOP_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={detailAddress}
                />
              )}
              {funnel === 'defaultHourlyWage' && (
                <Input
                  variant="input-underline"
                  title={FUNNEL_SHOP_TITLE[funnel].title}
                  isRequired={true}
                  onChange={handleChange}
                  defaultValue={
                    defaultHourlyWage ? String(defaultHourlyWage) : ''
                  }
                />
              )}
              {funnel === 'category' && (
                <Select
                  variant="search"
                  onClick={handleClick}
                  options={CATEGORY_DATA}
                  defaultValue={category}
                  onChange={handleChange}
                />
              )}
              {funnel === 'image' && (
                <ImageInput
                  title={FUNNEL_SHOP_TITLE[funnel].title}
                  preselectedImageUrl=""
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  ref={preselectedImageRef}
                />
              )}
              {funnel === 'description' && (
                <Input
                  variant="explain-underline"
                  title={FUNNEL_SHOP_TITLE[funnel].title}
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
