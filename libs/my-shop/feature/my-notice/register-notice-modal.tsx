'use client'

import ModalPortalWrapper from '@/libs/portal/feature/modalWrapper'
import { NoticeEditData } from '@/libs/shared/notice-card/type-notice-card'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'

import RegisterNoticeDefaultContent from './register-notice-default-content'
import RegisterNoticeFunnelContent from './register-notice-funnel-content'

export default function RegisterNoticeModal({
  showModal,
  onClickToggelModal,
  notice,
  onClickShowToast,
  onClickShowErrorDialog,
}: {
  showModal: boolean
  onClickToggelModal: () => void
  notice?: NoticeEditData
  onClickShowToast: () => void
  onClickShowErrorDialog: (text: string) => void
}) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <ModalPortalWrapper id="funnel-portal-notice">
      {isMobile ? (
        <RegisterNoticeFunnelContent
          onClickToggelModal={onClickToggelModal}
          notice={notice}
          onClickShowToast={onClickShowToast}
          onClickShowErrorDialog={onClickShowErrorDialog}
        />
      ) : (
        <RegisterNoticeDefaultContent
          onClickToggelModal={onClickToggelModal}
          showModal={showModal}
          notice={notice}
          onClickShowToast={onClickShowToast}
          onClickShowErrorDialog={onClickShowErrorDialog}
        />
      )}
    </ModalPortalWrapper>
  )
}
