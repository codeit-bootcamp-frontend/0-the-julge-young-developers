import classNames from 'classnames/bind'

import Image from 'next/image'

import { UiMyProfileProps } from '@/libs/alba/my-profile/my-profile-alice2/type-my-profile'
import EditBtn from '@/libs/alba/my-profile/shared/feature/edit-btn'
import { utilTrimePhone } from '@/libs/alba/my-profile/shared/util/util-trime-phone'

import styles from './ui-my-profile.module.scss'

const cx = classNames.bind(styles)

export default function UiMyProfile({
  name,
  phone,
  address,
  bio,
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
          <span>{utilTrimePhone(phone)}</span>
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
        <EditBtn name={name} phone={phone} address={address} bio={bio} />
      </div>
    </div>
  )
}
