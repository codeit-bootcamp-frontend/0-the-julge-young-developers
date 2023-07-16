'use client'

import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import {
  CATECPRY_DATA,
  FUNNEL_TITLE,
} from '@/libs/my-shop/data-access/my-shop-register-data'
import useRegisterShopState from '@/libs/my-shop/utill/useRegisterShopState'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import ImageInput from '@/libs/shared/input-select-btn/feature/feature-image-input'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './register-shop-modal-funnel-content.module.scss'

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
  const [unmounted, setUnmounted] = useState<boolean>(false)

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
    } else if (funnel === 'name') {
      setShopName(e.target.value)
    } else if (funnel === 'address') {
      setAddress(e.target.value)
    } else if (funnel === 'detailAddress') {
      setDetailAddress(e.target.value)
    } else if (funnel === 'defaultHourlyWage') {
      setDefaultHourlyWage(Number(e.target.value))
    } else if (funnel === 'description') {
      setDescription(e.target.value)
    }
    setIsAllFilled(true)
  }

  const handleClick = (value: string) => {
    if (!value) return

    if (funnel === 'category') {
      setCategory(value)
      setIsAllFilled(true)
    }
  }

  const handleClickButton = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isAllFilled) return

    setUnmounted(true)

    if (funnel === 'name') {
      setFunnel('category')
    } else if (funnel === 'category') {
      setFunnel('address')
    } else if (funnel === 'address') {
      setFunnel('detailAddress')
    } else if (funnel === 'detailAddress') {
      setFunnel('defaultHourlyWage')
    } else if (funnel === 'defaultHourlyWage') {
      setFunnel('image')
    } else if (funnel === 'image') {
      setFunnel('description')
    } else if (funnel === 'description') {
      // api
    }

    setTimeout(() => {
      setIsAllFilled(false)
      setUnmounted(false)
    }, 500)
  }
  return (
    <div className={cx('wrapper', { unmounted })}>
      <UiSimpleLayout titleSize={24} title={FUNNEL_TITLE[funnel].text}>
        <form onSubmit={handleClickButton}>
          <div className={cx('inputWrap', { unmounted })}>
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
                onChange={handleChange}
              />
            )}
          </div>
          <div className={cx('button', { unmounted })}>
            {isAllFilled ? (
              <ActiveBtn text="다음" size="large" type="submit" />
            ) : (
              <InactiveBtn text="다음" size="large" />
            )}
          </div>
        </form>
      </UiSimpleLayout>
    </div>
  )
}
