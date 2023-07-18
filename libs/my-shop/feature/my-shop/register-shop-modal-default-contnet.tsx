'use client'

import classNames from 'classnames/bind'

import { Shop } from '@/libs/my-shop/type-my-shop'
import useRegisterShopState from '@/libs/my-shop/utill/useRegisterShopState'
import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import {
  ActiveBtn,
  InactiveBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { options } from '@/libs/shared/input-select-btn/data-access/mock-data'
import ImageInput from '@/libs/shared/input-select-btn/feature/feature-image-input'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './register-shop-modal-default-content.module.scss'

const cx = classNames.bind(styles)

export default function RegisterShopModalDefaultContent({
  shop,
  onClickToggelModal,
}: {
  shop: Shop

  onClickToggelModal: () => void
}) {
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

  return (
    <UiBgGrayModal onClickCloseModal={onClickToggelModal}>
      <UiSimpleLayout title="가게 정보">
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
              options={options}
              defaultValue={category}
              onClick={(value) => setCategory(value)}
            />
          </div>
          <div className={cx('inputContainer')}>
            <Input
              variant="input"
              title="주소*"
              isRequired={true}
              onChange={(e) => setAddress(e.target.value)}
              defaultValue={address}
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
              defaultValue={defaultHourlyWage ? String(defaultHourlyWage) : ''}
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
    </UiBgGrayModal>
  )
}
