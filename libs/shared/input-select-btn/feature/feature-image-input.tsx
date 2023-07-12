'use client'

import React, { useRef, useState } from 'react'

import UiAddImageBtn from '@/libs/shared/input-select-btn/ui/ui-image-input/ui-add-image-btn'
import UiImageInput from '@/libs/shared/input-select-btn/ui/ui-image-input/ui-image-input'

export default function ImageInput({
  title,
  preSelectedImageUrl = undefined,
}: {
  title: string
  preSelectedImageUrl?: string
}) {
  const [selectedImage, setSelectedImage] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleImage = (file: File) => {
    // 수정 필요. css 적용 때문에 미리보이게 함
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.result) {
          setSelectedImage(reader.result.toString())
        }
      }

      reader.readAsDataURL(file)
    }
    // presignedURL 가져오는 uploadImage request로 변경
    // setSelectedImage('presignedURL')
    // preSelectedImageUrl
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleImage(file)
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log(file)
    if (file) {
      handleImage(file)
    }
  }

  return (
    <UiImageInput
      handleDrop={handleDrop}
      handleButtonClick={handleButtonClick}
      handleInputChange={handleInputChange}
      selectedImage={selectedImage}
      title={title}
      ref={fileInputRef}
    >
      <UiAddImageBtn
        onClickAddImageButton={handleButtonClick}
        preSelectedImageUrl={preSelectedImageUrl}
      />
    </UiImageInput>
  )
}
