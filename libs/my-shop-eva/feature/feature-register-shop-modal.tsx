import UiBgGrayModal from '@/libs/shared/bg-gray-modal/ui/ui-bg-gray-modal/ui-bg-gray-modal'

import RegisterShopModalDefaultContent from './feature-register-shop-modal-default-contnet'

/**
 * @param onCloseModal X 버튼으로 모달 끄는 setter
 * @param children content 내용물
 * @returns 회색 배경과 X 버튼이 담긴 full screen 모달
 */
export default function RegisterShopModal() {
  return (
    <UiBgGrayModal>
      <RegisterShopModalDefaultContent />
    </UiBgGrayModal>
  )
}
