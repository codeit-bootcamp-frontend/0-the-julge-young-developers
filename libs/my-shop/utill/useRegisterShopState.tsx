import { useEffect, useRef, useState } from 'react'

export default function useRegisterShopState(variant = 'default') {
  const [shopName, setShopName] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [detailAddress, setDetailAddress] = useState<string>('')
  const [defaultHourlyWage, setDefaultHourlyWage] = useState<
    number | undefined
  >(undefined)
  const [selectedImage, setSelectedImage] = useState<string>('')
  const preselectedImageRef = useRef<HTMLImageElement>(null)
  const [description, setDescription] = useState<string>('')
  const [isAllFilled, setIsAllFilled] = useState<boolean>(false)

  useEffect(() => {
    if (variant === 'funnel') return
    if (
      shopName &&
      category &&
      address &&
      detailAddress &&
      (selectedImage || preselectedImageRef.current) &&
      defaultHourlyWage &&
      description
    ) {
      setIsAllFilled(true)
    } else {
      setIsAllFilled(false)
    }
  }, [
    address,
    category,
    defaultHourlyWage,
    description,
    detailAddress,
    shopName,
    preselectedImageRef,
    selectedImage,
    variant,
  ])

  return {
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
    setIsAllFilled,
  }
}
