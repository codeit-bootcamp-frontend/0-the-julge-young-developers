'use client'

import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterShopModalDefaultContent from './register-shop-modal-default-contnet'
import RegisterShopModalFunnelContent from './register-shop-modal-funnel-content'

/**
 * @param onCloseModal X 버튼으로 모달 끄는 setter
 * @param children content 내용물
 * @returns 회색 배경과 X 버튼이 담긴 full screen 모달
 */
export default function RegisterShopModal() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <UiBgGrayModal>
      {isMobile ? (
        <RegisterShopModalFunnelContent />
      ) : (
        <RegisterShopModalDefaultContent />
      )}
    </UiBgGrayModal>
  )
}
