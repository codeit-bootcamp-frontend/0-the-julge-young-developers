'use client'

import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterJobPostingDefaultContent from './register-job-posting-default-content'
import RegisterJobPostingFunnelContent from './register-job-posting-funnel-content'

export default function RegisterJobPostingModal({
  openModal,
  onClickToggelModal,
}: {
  openModal: boolean
  onClickToggelModal: () => void
}) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <ModalPortalWrapper id="funnel-portal-posting">
      {isMobile ? (
        <RegisterJobPostingFunnelContent
          onClickToggelModal={onClickToggelModal}
        />
      ) : (
        <RegisterJobPostingDefaultContent
          onClickToggelModal={onClickToggelModal}
          showModal={openModal}
        />
      )}
    </ModalPortalWrapper>
  )
}
