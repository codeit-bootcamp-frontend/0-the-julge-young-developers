import { acceptTextOptions } from '@/libs/shared/modal/data-access/data-access-modal'
import UiActionModal from '@/libs/shared/modal/ui/ui-action-modal/ui-action-modal'
import UiConfirmModal from '@/libs/shared/modal/ui/ui-confirm-modal/ui-confirm-modal'

/**
 * @param text 모달 본문 내용
 * @param onConfirm '확인' 버튼 이벤트 핸들러
 * @returns Confirm 모달 UI 리턴
 */
function ConfirmModal({ text, onConfirm }: ConfirmModalProps) {
  return <UiConfirmModal text={text} confirmText="확인" onConfirm={onConfirm} />
}

/**
 * @param type Action 모달 type - 'reject' | 'accept' | 'cancel'
 * @param text 모달 본문 내용
 * @param onCancel cancel 버튼 이벤트 핸들러
 * @param onAccept accept 버튼 이벤트 핸들러
 * @returns Action 모달 UI 리턴
 */
function ActionModal({ type, text, onCancel, onAccept }: ActionModalProps) {
  return (
    <UiActionModal
      text={text}
      cancelText="아니오"
      acceptText={acceptTextOptions[type as ActionTypes]}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  )
}

export { ConfirmModal, ActionModal }
