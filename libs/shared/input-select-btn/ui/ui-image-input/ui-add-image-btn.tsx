import classNames from 'classnames/bind'

import Image from 'next/image'

import styles from './ui-add-image-btn.module.scss'

const cx = classNames.bind(styles)

export default function UiAddImageBtn({
  onClickAddImageButton,
  preselectedImageUrl,
}: {
  onClickAddImageButton: () => void
  preselectedImageUrl?: string
}) {
  const buttonType = preselectedImageUrl ? '변경' : '추가'
  return (
    <button
      type="button"
      onClick={onClickAddImageButton}
      className={cx('addButton')}
    >
      {preselectedImageUrl && (
        <img
          alt="예전에 선택한 이미지"
          className={cx('preSelectedImage')}
          src={preselectedImageUrl}
        />
      )}
      <div className={cx('buttonContent')}>
        <Image
          src="/images/camera.svg"
          alt="이미지 추가하기 버튼 카메라 아이콘"
          width={32}
          height={32}
          className={cx('camera', { preselectedImageUrl })}
        />
        <div className={cx('addImageText', { preselectedImageUrl })}>
          이미지 {buttonType}하기
        </div>
      </div>
    </button>
  )
}
