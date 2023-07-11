type ModalTypes = 'confirm' | 'action'

interface ModalProps {
  type: ModalTypes
  description: string
  actionType?: ActionModalTypes
}

type ActionModalTypes = 'reject' | 'accept' | 'cancel'

interface ActionModalProps {
  type: ActionModalTypes
  description: string
}

interface UiActionModalProps {
  description: string
  cancelText: string
  acceptText: string
}

interface UiConfirmModalProps {
  description: string
  confirmText: string
}
