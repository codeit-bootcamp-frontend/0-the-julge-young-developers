import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiMyProfileProps } from '@/libs/alba/my-profile/my-profile-alice2/type-my-profile'
import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'

import styles from './ui-my-profile.module.scss'

const cx = classNames.bind(styles)

export default function UiMyProfile({
  name,
  phone,
  address,
  bio,
  onClickEditButton,
}: UiMyProfileProps) {
  return (
    <div className={cx('container')}>
      <div className={cx('nameSection')}>
        <h2 className={cx('nameTitle')}>이름</h2>
        <h1 className={cx('name')}>{name}</h1>
      </div>
      <div className={cx('phoneAddressSection')}>
        <div className={cx('phoneSection')}>
          <Image src="/images/phone.svg" alt="연락처" width={20} height={20} />
          <span>{phone}</span>
        </div>
        <div className={cx('addressSection')}>
          <Image
            src="/images/location.svg"
            alt="선호 지역"
            width={20}
            height={20}
          />
          <span>선호 지역: {address}</span>
        </div>
      </div>
      <div className={cx('descriptionSection')}>
        <p>{bio}</p>
      </div>
      <div className={cx('editButton')}>
        <ActiveOutlineBtn
          text="편집하기"
          size="large"
          onClick={() => onClickEditButton()}
        />
      </div>
    </div>
  )
}
