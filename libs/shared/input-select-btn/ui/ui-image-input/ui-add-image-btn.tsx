import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-add-image-btn.module.scss'

const cx = classNames.bind(styles)

export default function UiAddImageBtn({
  onClickAddImageButton,
  preSelectedImageUrl,
}: {
  onClickAddImageButton: () => void
  preSelectedImageUrl?: string
}) {
  const buttonType = preSelectedImageUrl ? '변경' : '추가'
  return (
    <button
      type="button"
      onClick={onClickAddImageButton}
      className={cx('addButton')}
    >
      {preSelectedImageUrl && (
        <img
          alt="예전에 선택한 이미지"
          className={cx('preSelectedImage')}
          src={preSelectedImageUrl}
        />
      )}
      <div className={cx('buttonContent')}>
        <Image
          src="/images/camera.svg"
          alt="이미지 추가하기 버튼 카메라 아이콘"
          width={32}
          height={32}
          className={cx('camera', { preSelectedImageUrl })}
        />
        <div className={cx('addImageText', { preSelectedImageUrl })}>
          이미지 {buttonType}하기
        </div>
      </div>
    </button>
  )
}
