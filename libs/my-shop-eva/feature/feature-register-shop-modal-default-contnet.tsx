'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { options } from '@/libs/shared/input-select-btn/data-access/mock-data'
import ImageInput from '@/libs/shared/input-select-btn/feature/feature-image-input'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './feature-register-shop-modal-default-content.module.scss'

const cx = classNames.bind(styles)

export default function RegisterShopModalDefaultContent() {
  const [shopName, setShopName] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [detailAddress, setDetailAddress] = useState<string>('')
  const [defaultHourlyWage, setDefaultHourlyWage] = useState<number>()
  // const [shopImage, setShopImage] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false)

  useEffect(() => {
    if (
      shopName &&
      category &&
      address &&
      detailAddress &&
      defaultHourlyWage &&
      description
    ) {
      setIsAllFilled(true)
      return
    }
    setIsAllFilled(false)
  }, [
    address,
    category,
    defaultHourlyWage,
    description,
    detailAddress,
    shopName,
  ])

  const handleChangeShopName = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('setShopName')
    setShopName(e.target.value)
  }

  const handleClickCategory = (value: string) => {
    setCategory(value)
    console.log('category')
  }
  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('setAddress')

    setAddress(e.target.value)
  }

  const handleChangeDetailAddress = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('setDetailAddress')
    setDetailAddress(e.target.value)
  }

  const handleChangeDefaultHourlyWage = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('setDefaultHourlyWage')
    setDefaultHourlyWage(Number(e.target.value))
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('setDescription')
    setDescription(e.target.value)
  }

  return (
    <UiSimpleLayout title="가게 정보">
      <div className={cx('contentWrap')}>
        <div className={cx('inputContainer')}>
          <Input
            variant="input"
            title="가게 이름*"
            isRequired={true}
            onChange={handleChangeShopName}
          />
          <Select
            title="분류*"
            variant="search"
            options={options}
            defaultValue={options[0].value}
            onClick={handleClickCategory}
          />
        </div>
        <div className={cx('inputContainer')}>
          <Input
            variant="input"
            title="주소*"
            isRequired={true}
            onChange={handleChangeAddress}
          />

          <Input
            variant="input"
            title="상세 주소*"
            isRequired={true}
            onChange={handleChangeDetailAddress}
          />
        </div>
        <div className={cx('inputContainer')}>
          <Input
            variant="input"
            title="기본 시급*"
            isRequired={true}
            onChange={handleChangeDefaultHourlyWage}
          />
        </div>
        <div className={cx('inputContainer')}>
          <ImageInput title="가게 이미지" preselectedImageUrl="" />
        </div>
        <div className={cx('textAreaContainer')}>
          <Input
            variant="explain"
            title="가게 설명*"
            isRequired={true}
            onChange={handleChangeDescription}
          />
        </div>
      </div>
      <div className={cx('button')}>
        {isAllFilled ? (
          <ActiveBtn
            text="완료하기"
            size="large"
            onClick={() => console.log('모달 닫기')}
          />
        ) : (
          <InactiveBtn
            text="완료하기"
            size="large"
            onClick={() => console.log('아직 안채워짐')}
          />
        )}
      </div>
    </UiSimpleLayout>
  )
}
