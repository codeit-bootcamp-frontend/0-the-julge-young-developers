'use client'

import classNames from 'classnames/bind'

import useRegisterShopState from '@/libs/my-shop-eva/utill/useRegisterShopState'
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
  } = useRegisterShopState()

  return (
    <UiSimpleLayout title="가게 정보">
      <div className={cx('contentWrap')}>
        <div className={cx('inputContainer')}>
          <Input
            variant="input"
            title="가게 이름*"
            isRequired={true}
            onChange={(e) => setShopName(e.target.value)}
          />
          <Select
            title="분류*"
            variant="search"
            options={options}
            defaultValue={options[0].value}
            onClick={(value) => setCategory(value)}
          />
        </div>
        <div className={cx('inputContainer')}>
          <Input
            variant="input"
            title="주소*"
            isRequired={true}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Input
            variant="input"
            title="상세 주소*"
            isRequired={true}
            onChange={(e) => setDetailAddress(e.target.value)}
          />
        </div>
        <div className={cx('inputContainer')}>
          <Input
            variant="input"
            title="기본 시급*"
            isRequired={true}
            onChange={(e) => setDefaultHourlyWage(Number(e.target.value))}
          />
        </div>
        <div className={cx('inputContainer')}>
          <ImageInput
            title="가게 이미지"
            preselectedImageUrl=""
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
