import classNames from 'classnames/bind'

import { options } from '@/libs/shared/input-select-btn/data-access/mock-data'
import ImageInput from '@/libs/shared/input-select-btn/feature/feature-image-input'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'
import UiSimpleLayout from '@/libs/shared/simple-layout/ui/ui-simple-layout/ui-simple-layout'

import styles from './feature-register-shop-modal-default-content.module.scss'

const cx = classNames.bind(styles)

export default function RegisterShopModalDefaultContent() {
  return (
    <UiSimpleLayout title="가게 정보">
      <div className={cx('contentWrap')}>
        <div className={cx('inputContainer')}>
          <Input variant="input" title="가게 이름*" isRequired={true} />
          <Select
            title="분류*"
            variant="search"
            options={options}
            defaultValue={options[0].value}
          />
        </div>
        <div className={cx('inputContainer')}>
          <Input variant="input" title="주소*" isRequired={true} />

          <Input variant="input" title="상세 주소*" isRequired={true} />
        </div>
        <div className={cx('inputContainer')}>
          <Input variant="input" title="기본 시급*" isRequired={true} />
        </div>
        <div className={cx('inputContainer')}>
          <ImageInput title="가게 이미지" preselectedImageUrl="" />
        </div>
        <div className={cx('textAreaContainer')}>
          <Input variant="explain" title="가게 설명*" isRequired={true} />
        </div>
      </div>
    </UiSimpleLayout>
  )
}
