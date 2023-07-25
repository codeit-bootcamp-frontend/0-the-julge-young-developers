'use client'

import { Shop } from '@/libs/my-shop/type-my-shop'
import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterShopModalDefaultContent from './register-shop-modal-default-contnet'
import RegisterShopModalFunnelContent from './register-shop-modal-funnel-content'

/**
 * @param onCloseModal X 버튼으로 모달 끄는 setter
 * @param children content 내용물
 * @returns 회색 배경과 X 버튼이 담긴 full screen 모달
 */
export default function RegisterShopModal({
  shop,
  onClickToggelModal,
  onClickShowToast,
  onClickShowErrorDialog,
}: {
  shop?: Shop
  onClickToggelModal: () => void
  onClickShowToast: () => void
  onClickShowErrorDialog: (text: string) => void
}) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <ModalPortalWrapper id="funnel-portal">
      {isMobile ? (
        <RegisterShopModalFunnelContent
          onClickToggelModal={onClickToggelModal}
          shop={shop}
          onClickShowToast={onClickShowToast}
          onClickShowErrorDialog={onClickShowErrorDialog}
        />
      ) : (
        <RegisterShopModalDefaultContent
          onClickToggelModal={onClickToggelModal}
          shop={shop}
          onClickShowToast={onClickShowToast}
          onClickShowErrorDialog={onClickShowErrorDialog}
        />
      )}
    </ModalPortalWrapper>
  )
}
