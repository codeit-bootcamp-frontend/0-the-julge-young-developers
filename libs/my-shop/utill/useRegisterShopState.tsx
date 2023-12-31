import { useEffect, useRef, useState } from 'react'

import { Shop } from '@/libs/my-shop/type-my-shop'
import { ShopInfo } from '@/libs/shared/api/types/type-shop'

export default function useRegisterShopState({
  variant = 'default',
  shop,
}: {
  variant?: string
  shop?: Shop
}) {
  const [shopName, setShopName] = useState<string>(shop?.name || '')
  const [category, setCategory] = useState<ShopInfo['category'] | string>(
    shop?.category || '',
  )
  const [address, setAddress] = useState<ShopInfo['address1'] | string>(
    shop?.address1 || '',
  )
  const [detailAddress, setDetailAddress] = useState<string>(
    shop?.address2 || '',
  )
  const [defaultHourlyWage, setDefaultHourlyWage] = useState<
    number | undefined
  >(shop?.originalHourlyPay)
  const [selectedImage, setSelectedImage] = useState<string>(
    shop?.imageUrl || '',
  )
  const preselectedImageRef = useRef<HTMLImageElement>(null)
  const [description, setDescription] = useState<string>(
    shop?.description || '',
  )
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
    selectedImage,
    shopName,
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
