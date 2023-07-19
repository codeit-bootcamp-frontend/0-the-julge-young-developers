'use client'

import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import { updateNoticeApplicationResult } from '@/libs/shared/api/data-access/request/applicationsRequest'
import {
  ActiveOutlineBtn,
  ActiveOutlineConfirmBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { ActionDialog } from '@/libs/shared/dialog/feature/dialog'
import CommonClientLoader from '@/libs/shared/loading/feature/client-loader'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import useOutsideClick from '@/libs/shared/shared/util/useOutsideClick'
import { TableStatusButtonProps } from '@/libs/shared/table/type-table'
import UiTableBodyStatusChip from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-status-chip'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

export default function TableStatusButton({
  shopId,
  noticeId,
  applicationId,
}: TableStatusButtonProps) {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)

  const [shownAcceptDialog, setShownAcceptDialog] = useState(false)
  const [shownRejectDialog, setShownRejectDialog] = useState(false)
  const rejectDialogRef = useRef<HTMLDivElement | null>(null)
  const acceptDialogRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(rejectDialogRef, () => setShownRejectDialog(false))
  useOutsideClick(acceptDialogRef, () => setShownAcceptDialog(false))

  const [openClientLoader, setOpenClientLoader] = useState(false)
  const [shownToast, setShownToast] = useState(false)
  const [isRejectDone, setIsRejectDone] = useState(false)
  const [isAcceptDone, setIsAcceptDone] = useState(false)

  const handleClickAcceptApplication = async () => {
    setOpenClientLoader(true)
    await updateNoticeApplicationResult(
      shopId,
      noticeId,
      applicationId,
      'accepted',
    )
    setOpenClientLoader(false)

    setShownToast(true)
    setShownAcceptDialog(false)
    setIsAcceptDone(true)
    setTimeout(() => router.push('/my-shop'), 3000)
  }

  const handleClickRejectApplication = async () => {
    setOpenClientLoader(true)
    await updateNoticeApplicationResult(
      shopId,
      noticeId,
      applicationId,
      'rejected',
    )
    setOpenClientLoader(false)

    setShownToast(true)
    setShownRejectDialog(false)
    setIsRejectDone(true)
  }

  useEffect(() => {
    if (isMobile) {
      setIsMobileSize(true)
    } else {
      setIsMobileSize(false)
    }
  }, [isMobile])

  if (isRejectDone) {
    return (
      <>
        <UiTableBodyStatusChip status="rejected" />
        {shownToast && (
          <ToastContainer onShow={() => setShownToast(false)}>
            거절했어요
          </ToastContainer>
        )}
      </>
    )
  }
  if (isAcceptDone) {
    return (
      <>
        <UiTableBodyStatusChip status="accepted" />
        {shownToast && (
          <ToastContainer onShow={() => setShownToast(false)}>
            승인했어요. 내 가게 페이지로 돌아갑니다.
          </ToastContainer>
        )}
      </>
    )
  }
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
      {openClientLoader && <CommonClientLoader />}
    </>
  )
}
