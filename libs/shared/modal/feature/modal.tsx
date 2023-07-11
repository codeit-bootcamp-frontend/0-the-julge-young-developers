import { acceptTextOptions } from '../data-access/data-access-modal'
import UiActionModal from '../ui/ui-action-modal/ui-action-modal'
import UiConfirmModal from '../ui/ui-confirm-modal/ui-confirm-modal'

/**
 * @param {'confirm' | 'action'} type modal type
 * @param {string} description modal 본문 내용
 * @param {'accept' | 'reject' | 'cancel'} actionType 'action type'일 경우 action type
 * @returns 각 type에 맞는 modal 컴포넌트 리턴
 */
export default function Modal({ type, description, actionType }: ModalProps) {
  if (type === 'confirm') {
    return <UiConfirmModal description={description} confirmText="확인" />
  }
  return (
    <UiActionModal
      description={description}
      cancelText="아니오"
      acceptText={acceptTextOptions[actionType as ActionModalTypes]}
    />
  )
}
