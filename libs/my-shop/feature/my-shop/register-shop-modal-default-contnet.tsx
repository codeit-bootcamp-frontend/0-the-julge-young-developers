'use client'

import { MouseEvent, useState } from 'react'

import classNames from 'classnames/bind'

import { useRouter } from 'next/navigation'

import { ADDRESS_OPTIONS } from '@/libs/alba/my-profile/my-profile-h/data-access/select-options'
import { sendRegisterShopRequest } from '@/libs/my-shop/data-access/data-access-send-register-shop-request'
import { CATECPRY_DATA } from '@/libs/my-shop/data-access/my-shop-register-data'
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

import styles from './register-shop-modal-default-content.module.scss'

const cx = classNames.bind(styles)

export default function RegisterShopModalDefaultContent({
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
  } = useRegisterShopState({ shop })

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
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
    <UiBgGrayModal onClickCloseModal={onClickToggelModal}>
      <UiSimpleLayout title="가게 정보">
        <form onSubmit={handleSubmit}>
          <div className={cx('contentWrap')}>
            <div className={cx('inputContainer')}>
              <Input
                variant="input"
                title="가게 이름*"
                isRequired={true}
                onChange={(e) => setShopName(e.target.value)}
                defaultValue={shopName}
              />
              <Select
                title="분류*"
                variant="search"
                options={CATECPRY_DATA}
                defaultValue={category}
                onClick={(value) => setCategory(value)}
              />
            </div>
            <div className={cx('inputContainer')}>
              <Select
                variant="search"
                title="주소*"
                isRequired={true}
                onClick={(value) => setAddress(value)}
                defaultValue={address}
                options={ADDRESS_OPTIONS}
              />

              <Input
                variant="input"
                title="상세 주소*"
                isRequired={true}
                onChange={(e) => setDetailAddress(e.target.value)}
                defaultValue={detailAddress}
              />
            </div>
            <div className={cx('inputContainer')}>
              <Input
                variant="input"
                title="기본 시급*"
                isRequired={true}
                onChange={(e) => setDefaultHourlyWage(Number(e.target.value))}
                defaultValue={
                  defaultHourlyWage ? String(defaultHourlyWage) : ''
                }
              />
            </div>
            <div className={cx('inputContainer')}>
              <ImageInput
                title="가게 이미지"
                preselectedImageUrl={selectedImage}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                ref={preselectedImageRef}
              />
            </div>
            <div className={cx('textAreaContainer')}>
              <Input
                variant="explain"
                title="가게 설명*"
                isRequired={true}
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={description}
              />
            </div>
          </div>
          <div className={cx('button')}>{renderSubmitButton()}</div>
        </form>
      </UiSimpleLayout>
    </UiBgGrayModal>
  )
}
