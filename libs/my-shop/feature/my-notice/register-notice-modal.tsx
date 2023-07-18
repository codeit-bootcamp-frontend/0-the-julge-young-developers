'use client'

import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterNoticeDefaultContent from './register-notice-default-content'
import RegisterNoticeFunnelContent from './register-notice-funnel-content'

export default function RegisterNoticeModal({
  showModal,
  onClickToggelModal,
}: {
  showModal: boolean
  onClickToggelModal: () => void
}) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <ModalPortalWrapper id="funnel-portal-notice">
      {isMobile ? (
        <RegisterNoticeFunnelContent onClickToggelModal={onClickToggelModal} />
      ) : (
        <RegisterNoticeDefaultContent
          onClickToggelModal={onClickToggelModal}
          showModal={showModal}
        />
      )}
    </ModalPortalWrapper>
  )
}
