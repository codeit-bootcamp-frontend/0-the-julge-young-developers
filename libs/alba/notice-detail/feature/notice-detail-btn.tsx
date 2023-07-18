'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import ApplicationButton from '@/libs/notice-detail-alice/ui/ui-application-button'
import {
  registerNoticeApplication,
  updateNoticeApplicationResult,
} from '@/libs/shared/api/data-access/request/applicationsRequest'
import { NoticeUserApplicationItem } from '@/libs/shared/api/types/type-application'
import {
  ActionDialog,
  ConfirmDialog,
} from '@/libs/shared/dialog/feature/dialog'

import AlbaToast from '../../shared/toast/feature/alba-toast'

interface NoticeDetailBtnProps {
  noticeId: string
  shopId: string
  applicationId: string
  closed: boolean
  userType: undefined | string
  isProfile: boolean
  isApplication: NoticeUserApplicationItem | undefined
}

export default function NoticeDetailBtn({
  noticeId,
  shopId,
  applicationId,
  isProfile,
  closed,
  userType,
  isApplication,
}: NoticeDetailBtnProps) {
  const router = useRouter()
  const [isShowActionDialog, setIsShowActionDialog] = useState<boolean>(false)
  const [isShowConfirmDialogEmployer, setIsShowConfirmDialogEmployer] =
    useState<boolean>(false)
  const [isShowConfirmDialogAuth, setIsShowConfirmDialogAuth] =
    useState<boolean>(false)
  const [isShowConfirmDialogProfile, setIsShowConfirmDialogProfile] =
    useState<boolean>(false)
  const [isShowCompleteToast, setIsShowCompleteToast] = useState<boolean>(false)
  const [isShowCancelToast, setIsShowCancelToast] = useState<boolean>(false)

  const handleClickApplication = async () => {
    const res = await registerNoticeApplication(shopId, noticeId)

    if (res instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // response 데이터 가공
      setIsShowCompleteToast(true)
      router.refresh()
    }
  }

  const handleClickCancelApplication = async () => {
    const res = await updateNoticeApplicationResult(
      shopId,
      noticeId,
      applicationId,
      'canceled',
    )

    if (res instanceof Error) {
      // 알 수 없는 에러 처리
    } else if (typeof res === 'string') {
      // 에러 메시지에 맞게 처리
    } else {
      // response 데이터 가공
      setIsShowActionDialog(false)
      setIsShowCancelToast(true)
      router.refresh()
    }
  }

  const handleClickOpenDialog = (type: string) => () => {
    if (type === 'not-auth') {
      setIsShowConfirmDialogAuth(true)
    } else if (type === 'not-profile') {
      setIsShowConfirmDialogProfile(true)
    } else if (type === 'pending') {
      setIsShowActionDialog(true)
    } else if (type === 'employer') {
      setIsShowConfirmDialogEmployer(true)
    } else if (type === 'possible') {
      handleClickApplication()
    }
  }

  return (
    <div>
      {closed && <ApplicationButton type="disabled" />}
      {!closed && userType === undefined && (
        <ApplicationButton
          type="application"
          onClickOpenDialog={handleClickOpenDialog('not-auth')}
        />
      )}
      {!closed && userType === 'employee' && !isProfile && (
        <ApplicationButton
          type="application"
          onClickOpenDialog={handleClickOpenDialog('not-profile')}
        />
      )}
      {!closed &&
        userType === 'employee' &&
        isProfile &&
        isApplication === undefined && (
          <ApplicationButton
            type="application"
            onClickOpenDialog={handleClickOpenDialog('possible')}
          />
        )}
      {!closed &&
        userType === 'employee' &&
        isProfile &&
        isApplication &&
        isApplication.item.status === 'pending' && (
          <ApplicationButton
            type="cancel"
            onClickOpenDialog={handleClickOpenDialog('pending')}
          />
        )}
      {!closed &&
        userType === 'employee' &&
        isApplication &&
        isApplication.item.status === 'rejected' && (
          <ApplicationButton
            type="application"
            onClickOpenDialog={handleClickOpenDialog('possible')}
          />
        )}
      {!closed && userType === 'employer' && (
        <ApplicationButton
          type="application"
          onClickOpenDialog={handleClickOpenDialog('employer')}
        />
      )}

      {isShowCompleteToast && (
        <AlbaToast onShow={() => setIsShowCompleteToast(false)}>
          신청 완료!
        </AlbaToast>
      )}
      {isShowCancelToast && (
        <AlbaToast onShow={() => setIsShowCancelToast(false)}>
          취소했어요
        </AlbaToast>
      )}

      {isShowConfirmDialogEmployer && (
        <ConfirmDialog
          text="사장님은 안 돼요!"
          onConfirm={() => setIsShowConfirmDialogEmployer(false)}
        />
      )}

      {isShowConfirmDialogAuth && (
        <ConfirmDialog
          text="로그인을 먼저 해주세요."
          onConfirm={() => {
            setIsShowConfirmDialogAuth(false)
            router.push('/signin')
          }}
        />
      )}

      {isShowConfirmDialogProfile && (
        <ConfirmDialog
          text="내 프로필을 먼저 등록해주세요."
          onConfirm={() => {
            setIsShowConfirmDialogProfile(false)
            router.push('/my-profile')
          }}
        />
      )}

      {isShowActionDialog && (
        <ActionDialog
          type="cancel"
          text="신청을 취소하시겠어요?"
          onAccept={handleClickCancelApplication}
          onCancel={() => {
            setIsShowActionDialog(false)
          }}
        />
      )}
    </div>
  )
}
