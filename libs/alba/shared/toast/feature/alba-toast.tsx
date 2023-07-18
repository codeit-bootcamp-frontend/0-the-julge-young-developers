import ToastPortalWrapper from '@/libs/alba/shared/toast/feature/toast-portal-wrapper'
import Toast from '@/libs/shared/toast/feature/toast'

interface AlbaToastProps {
  onShow: () => void
  children: string
}

export default function AlbaToast({ onShow, children }: AlbaToastProps) {
  return (
    <ToastPortalWrapper id="toast-portal">
      <Toast onShow={onShow}>{children}</Toast>
    </ToastPortalWrapper>
  )
}
