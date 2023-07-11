import { acceptTextOptions } from '@/libs/shared/modal/data-access/data-access-modal'
import UiActionModal from '@/libs/shared/modal/ui/ui-action-modal/ui-action-modal'
import UiConfirmModal from '@/libs/shared/modal/ui/ui-confirm-modal/ui-confirm-modal'

function ConfirmModal({ text, onConfirm }: ConfirmModalProps) {
  return <UiConfirmModal text={text} confirmText="확인" onConfirm={onConfirm} />
}

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
