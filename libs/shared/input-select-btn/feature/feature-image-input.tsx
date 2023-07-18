'use client'

import { ForwardedRef, forwardRef, useRef } from 'react'

import uploadImage from '@/libs/shared/api/data-access/request/imageRequest'
import UiAddImageBtn from '@/libs/shared/input-select-btn/ui/ui-image-input/ui-add-image-btn'
import UiImageInput from '@/libs/shared/input-select-btn/ui/ui-image-input/ui-image-input'

import { removePresignedUrlQueryParams } from '../util/removepresignedUrlQueryParams'

export default forwardRef(function ImageInput(
  {
    title,
    preselectedImageUrl = undefined,
    selectedImage,
    setSelectedImage,
  }: {
    title: string
    preselectedImageUrl?: string
    selectedImage: string
    setSelectedImage: (selectedImage: string) => void
  },
  ref: ForwardedRef<HTMLImageElement>,
) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleImage = async (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const presignedUrl = await uploadImage(file)
      if (presignedUrl instanceof Error) {
        return
      }
      const removedQureyPresignedUrl =
        removePresignedUrlQueryParams(presignedUrl)
      setSelectedImage(removedQureyPresignedUrl)
    }
  }

  const handleDropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleImage(file)
  }

  const handleClickButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImage(file)
    }
  }

  return (
    <UiImageInput
      onDropImgae={handleDropImage}
      onClickButton={handleClickButton}
      onChangeInput={handleChangeInput}
      selectedImage={selectedImage}
      title={title}
      ref={fileInputRef}
    >
      <UiAddImageBtn
        onClickAddImageButton={handleClickButton}
        preselectedImageUrl={preselectedImageUrl}
        ref={ref}
      />
    </UiImageInput>
  )
})
