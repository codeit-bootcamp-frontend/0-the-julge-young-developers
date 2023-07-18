import ToastPortalWrapper from '@/libs/alba/shared/toast/feature/toast-portal-wrapper'
import { acceptTextOptions } from '@/libs/shared/dialog/data-access/data-access-dialog'
import {
  ActionDialogProps,
  ActionTypes,
  ConfirmDialogProps,
} from '@/libs/shared/dialog/type-dialog'
import UiActionDialog from '@/libs/shared/dialog/ui/ui-action-dialog/ui-action-dialog'
import UiConfirmDialog from '@/libs/shared/dialog/ui/ui-confirm-dialog/ui-confirm-dialog'

import ModalLayout from './dialog-wrapper'

/**
 * @param text 다이얼로그 본문 내용
 * @param onConfirm '확인' 버튼 이벤트 핸들러
 * @returns Confirm 다이얼로그 리턴
 */
function ConfirmDialog({ text, onConfirm }: ConfirmDialogProps) {
  return (
    <ToastPortalWrapper id="btn-portal">
      <ModalLayout>
        <UiConfirmDialog text={text} confirmText="확인" onConfirm={onConfirm} />
      </ModalLayout>
    </ToastPortalWrapper>
  )
}

/**
 * @param type Action 다이얼로그 type - 'reject' | 'accept' | 'cancel'
 * @param text 다이얼로그 본문 내용
 * @param onCancel cancel 버튼 이벤트 핸들러
 * @param onAccept accept 버튼 이벤트 핸들러
 * @returns Action 다이얼로그 리턴
 */
function ActionDialog({ type, text, onCancel, onAccept }: ActionDialogProps) {
  return (
    <ToastPortalWrapper id="btn-portal">
      <ModalLayout>
        <UiActionDialog
          text={text}
          cancelText="아니오"
          acceptText={acceptTextOptions[type as ActionTypes]}
          onCancel={onCancel}
          onAccept={onAccept}
        />
      </ModalLayout>
    </ToastPortalWrapper>
  )
}

export { ConfirmDialog, ActionDialog }
