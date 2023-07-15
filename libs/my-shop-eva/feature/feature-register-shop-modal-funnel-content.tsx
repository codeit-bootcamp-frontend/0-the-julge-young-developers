'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import {
  CATECPRY_DATA,
  FUNNEL_TITLE,
} from '@/libs/my-shop-eva/data-access/my-shop-register-data'
import useRegisterShopState from '@/libs/my-shop-eva/utill/useRegisterShopState'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import ImageInput from '@/libs/shared/input-select-btn/feature/feature-image-input'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './feature-register-shop-modal-funnel-content.module.scss'

const cx = classNames.bind(styles)

export default function RegisterShopModalFunnelContent() {
  const {
    setShopName,
    setCategory,
    setAddress,
    setDetailAddress,
    setDefaultHourlyWage,
    selectedImage,
    setSelectedImage,
    preselectedImageRef,
    setDescription,
    isAllFilled,
    setIsAllFilled,
  } = useRegisterShopState('funnel')

  const [funnel, setFunnel] = useState<
    | 'name'
    | 'category'
    | 'address'
    | 'detailAddress'
    | 'defaultHourlyWage'
    | 'image'
    | 'description'
  >('name')

  useEffect(() => {
    if (funnel === 'image' && (selectedImage || preselectedImageRef.current)) {
      setIsAllFilled(true)
    }
  }, [funnel, preselectedImageRef, selectedImage, setIsAllFilled])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!e.target.value) {
      setIsAllFilled(false)
      return
    }
    console.log(e.target.value)
    if (funnel === 'name') {
      setShopName(e.target.value)
      setIsAllFilled(true)
      return
    }
    if (funnel === 'address') {
      setAddress(e.target.value)
      setIsAllFilled(true)
      return
    }
    if (funnel === 'detailAddress') {
      setDetailAddress(e.target.value)
      setIsAllFilled(true)
      return
    }
    if (funnel === 'defaultHourlyWage') {
      setDefaultHourlyWage(Number(e.target.value))
      setIsAllFilled(true)
      return
    }
    if (funnel === 'description') {
      setDescription(e.target.value)
      setIsAllFilled(true)
    }
  }

  const handleClick = (value: string) => {
    if (!value) return

    if (funnel === 'category') {
      setCategory(value)
      setIsAllFilled(true)
    }
  }

  const handleClickButton = () => {
    if (funnel === 'name') {
      setIsAllFilled(false)
      setFunnel('category')
    } else if (funnel === 'category') {
      setIsAllFilled(false)
      setFunnel('address')
    } else if (funnel === 'address') {
      setIsAllFilled(false)
      setFunnel('detailAddress')
    } else if (funnel === 'detailAddress') {
      setIsAllFilled(false)
      setFunnel('defaultHourlyWage')
    } else if (funnel === 'defaultHourlyWage') {
      setIsAllFilled(false)
      setFunnel('image')
    } else if (funnel === 'image') {
      setIsAllFilled(false)
      setFunnel('description')
    } else if (funnel === 'description') {
      // api
    }
  }
  return (
    <UiSimpleLayout title={FUNNEL_TITLE[funnel].text}>
      <div className={cx('inputWrap')}>
        {funnel === 'name' && (
          <Input
            variant="input-underline"
            title={FUNNEL_TITLE[funnel].title}
            isRequired={true}
            onChange={handleChange}
          />
        )}
        {funnel === 'address' && (
          <Input
            variant="input-underline"
            title={FUNNEL_TITLE[funnel].title}
            isRequired={true}
            onChange={handleChange}
          />
        )}
        {funnel === 'detailAddress' && (
          <Input
            variant="input-underline"
            title={FUNNEL_TITLE[funnel].title}
            isRequired={true}
            onChange={handleChange}
          />
        )}
        {funnel === 'defaultHourlyWage' && (
          <Input
            variant="input-underline"
            title={FUNNEL_TITLE[funnel].title}
            isRequired={true}
            onChange={handleChange}
          />
        )}
        {funnel === 'category' && (
          <Select
            variant="search"
            onClick={handleClick}
            options={CATECPRY_DATA}
          />
        )}
        {funnel === 'image' && (
          <ImageInput
            title={FUNNEL_TITLE[funnel].title}
            preselectedImageUrl=""
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            ref={preselectedImageRef}
          />
        )}
        {funnel === 'description' && (
          <Input
            variant="explain-underline"
            title={FUNNEL_TITLE[funnel].title}
            isRequired={false}
          />
        )}
      </div>
      <div className={cx('button')}>
        {isAllFilled ? (
          <ActiveBtn text="다음" size="large" onClick={handleClickButton} />
        ) : (
          <InactiveBtn
            text="다음"
            size="large"
            onClick={() => {
              console.log(false)
            }}
          />
        )}
      </div>
    </UiSimpleLayout>
  )
}
