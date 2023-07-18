'use client'

import { useEffect, useRef, useState } from 'react'

import { updateNoticeApplicationResult } from '@/libs/shared/api/data-access/request/applicationsRequest'
import {
  ActiveOutlineBtn,
  ActiveOutlineConfirmBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { ActionDialog } from '@/libs/shared/dialog/feature/dialog'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import useOutsideClick from '@/libs/shared/shared/util/useOutsideClick'
import { TableStatusButtonProps } from '@/libs/shared/table/type-table'

export default function TableStatusButton({
  shopId,
  noticeId,
  applicationId,
}: TableStatusButtonProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)
  const [shownAcceptDialog, setShownAcceptDialog] = useState(false)
  const [shownRejectDialog, setShownRejectDialog] = useState(false)

  const rejectDialogRef = useRef<HTMLDivElement | null>(null)
  const acceptDialogRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(rejectDialogRef, () => setShownRejectDialog(false))
  useOutsideClick(acceptDialogRef, () => setShownAcceptDialog(false))

  const handleClickAcceptApplication = async () => {
    await updateNoticeApplicationResult(
      shopId,
      noticeId,
      applicationId,
      'accepted',
    )
    setShownRejectDialog(false)
  }

  const handleClickRejectApplication = async () => {
    await updateNoticeApplicationResult(
      shopId,
      noticeId,
      applicationId,
      'rejected',
    )
    setShownRejectDialog(false)
  }

  useEffect(() => {
    if (isMobile) {
      setIsMobileSize(true)
    } else {
      setIsMobileSize(false)
    }
  }, [isMobile])

  return (
    <>
      <ActiveOutlineBtn
        text="거절하기"
        size={isMobileSize ? 'small' : 'mediumSmall'}
        onClick={() => setShownRejectDialog(true)}
      />
      <ActiveOutlineConfirmBtn
        text="승인하기"
        size={isMobileSize ? 'small' : 'mediumSmall'}
        onClick={() => setShownAcceptDialog(true)}
      />
      {shownRejectDialog && (
        <div ref={rejectDialogRef}>
          <ActionDialog
            type="reject"
            text="신청을 거절하시겠어요?"
            onCancel={() => setShownRejectDialog(false)}
            onAccept={handleClickRejectApplication}
          />
        </div>
      )}
      {shownAcceptDialog && (
        <div ref={acceptDialogRef}>
          <ActionDialog
            type="accept"
            text="신청을 승인하시겠어요?"
            onCancel={() => setShownAcceptDialog(false)}
            onAccept={handleClickAcceptApplication}
          />
        </div>
      )}
    </>
  )
}
