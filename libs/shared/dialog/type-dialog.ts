interface ConfirmDialogProps {
  text: string
  onConfirm: () => void
}

type ActionTypes = 'reject' | 'accept' | 'cancel'

interface ActionDialogProps {
  type: ActionTypes
  text: string
  onCancel: () => void
  onAccept: () => void
}

interface UiActionDialogProps {
  text: string
  cancelText: string
  acceptText: string
  onCancel: () => void
  onAccept: () => void
}

interface UiConfirmDialogProps {
  text: string
  confirmText: string
  onConfirm: () => void
}

export type {
  ConfirmDialogProps,
  ActionTypes,
  ActionDialogProps,
  UiActionDialogProps,
  UiConfirmDialogProps,
}
