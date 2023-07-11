// type ModalTypes = 'confirm' | 'action'

// interface ModalProps {
//   type: ModalTypes
//   description: string
//   actionType?: ActionModalTypes
//   onClick: () => void
// }
interface ConfirmModalProps {
  text: string
  onConfirm: () => void
}

type ActionTypes = 'reject' | 'accept' | 'cancel'

interface ActionModalProps {
  type: ActionTypes
  text: string
  onCancel: () => void
  onAccept: () => void
}

interface UiActionModalProps {
  text: string
  cancelText: string
  acceptText: string
  onCancel: () => void
  onAccept: () => void
}

interface UiConfirmModalProps {
  text: string
  confirmText: string
  onConfirm: () => void
}
