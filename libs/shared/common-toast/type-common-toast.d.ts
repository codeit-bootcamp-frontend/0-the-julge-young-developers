type AnimationStatus = 'fadeIn' | 'fadeOut'

interface UiCommonToastProps {
  status: AnimationStatus
  children: string
}

interface CommonToastProps {
  onShow: (isShow: boolean) => void
  children: string
}
