'use client'

import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  ActiveOutlineBtn,
  ActiveOutlineConfirmBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import {
  ActionDialog,
  ConfirmDialog,
} from '@/libs/shared/dialog/feature/dialog'
import CommonClientLoader from '@/libs/shared/loading/feature/client-loader'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import useOutsideClick from '@/libs/shared/shared/util/useOutsideClick'
import { TableStatusButtonProps } from '@/libs/shared/table/type-table'
import UiTableBodyStatusChip from '@/libs/shared/table/ui/ui-table-composition/ui-table-body-status-chip'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import {
  sendAcceptApplicationRequest,
  sendRejectApplicationRequest,
} from '../data-access/data-access-application'

export default function TableStatusButton({
  shopId,
  noticeId,
  applicationId,
}: TableStatusButtonProps) {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false)

  const [showAcceptDialog, setShowAcceptDialog] = useState(false)
  const [showRejectDialog, setShowRejectDialog] = useState(false)
  const rejectDialogRef = useRef<HTMLDivElement | null>(null)
  const acceptDialogRef = useRef<HTMLDivElement | null>(null)
  useOutsideClick(rejectDialogRef, () => setShowRejectDialog(false))
  useOutsideClick(acceptDialogRef, () => setShowAcceptDialog(false))

  const [openClientLoader, setOpenClientLoader] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isRejectDone, setIsRejectDone] = useState(false)
  const [isAcceptDone, setIsAcceptDone] = useState(false)

  const [showErrorDialog, setShowErrorDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleClickAcceptApplication = async () => {
    setOpenClientLoader(true)
    const [isError, error] = await sendAcceptApplicationRequest(
      shopId,
      noticeId,
      applicationId,
    )
    setShowAcceptDialog(false)
    setOpenClientLoader(false)

    if (isError) {
      setShowErrorDialog(true)
      setErrorMessage(error)
    } else {
      setShowToast(true)
      setIsAcceptDone(true)
      setTimeout(() => router.push('/my-shop'), 3000)
    }
  }

  const handleClickRejectApplication = async () => {
    setOpenClientLoader(true)
    const [isError, error] = await sendRejectApplicationRequest(
      shopId,
      noticeId,
      applicationId,
    )
    setShowRejectDialog(false)
    setOpenClientLoader(false)

    if (isError) {
      setShowErrorDialog(true)
      setErrorMessage(error)
    } else {
      setShowToast(true)
      setIsRejectDone(true)
    }
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
        {showToast && (
          <ToastContainer onShow={() => setShowToast(false)}>
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
        {showToast && (
          <ToastContainer onShow={() => setShowToast(false)}>
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
        onClick={() => setShowRejectDialog(true)}
      />
      <ActiveOutlineConfirmBtn
        text="승인하기"
        size={isMobileSize ? 'small' : 'mediumSmall'}
        onClick={() => setShowAcceptDialog(true)}
      />
      {showRejectDialog && (
        <div ref={rejectDialogRef}>
          <ActionDialog
            type="reject"
            text="신청을 거절하시겠어요?"
            onCancel={() => setShowRejectDialog(false)}
            onAccept={handleClickRejectApplication}
          />
        </div>
      )}
      {showAcceptDialog && (
        <div ref={acceptDialogRef}>
          <ActionDialog
            type="accept"
            text="신청을 승인하시겠어요?"
            onCancel={() => setShowAcceptDialog(false)}
            onAccept={handleClickAcceptApplication}
          />
        </div>
      )}
      {openClientLoader && <CommonClientLoader />}
      {showErrorDialog && (
        <ConfirmDialog
          text={errorMessage || '요청에 실패했습니다.'}
          onConfirm={() => setShowErrorDialog(false)}
        />
      )}
    </>
  )
}
