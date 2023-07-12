import { ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames/bind'

import styles from './ui-image-input.module.scss'

const cx = classNames.bind(styles)

export default forwardRef(function UiImageInput(
  {
    handleDrop,
    handleButtonClick,
    handleInputChange,
    title,
    selectedImage,
    children,
  }: UiImageInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <div
      className={cx('wrap')}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <div className={cx('title')}>{title}</div>
      {selectedImage ? (
        <button
          type="button"
          onClick={handleButtonClick}
          className={cx('imgWrap')}
        >
          <img
            src={selectedImage}
            alt="선택된 이미지"
            className={cx('preImage')}
          />
        </button>
      ) : (
        children
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleInputChange}
        ref={ref}
        className={cx('input')}
      />
    </div>
  )
})
