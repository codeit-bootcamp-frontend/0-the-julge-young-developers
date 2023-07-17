type AnimationStatus = 'fadeIn' | 'fadeOut'

interface UiToastProps {
  status: AnimationStatus
  children: string
}

interface ToastProps {
  onShow: () => void
  children: string
}

export type { AnimationStatus, UiToastProps, ToastProps }
