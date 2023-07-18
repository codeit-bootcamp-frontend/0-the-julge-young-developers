import Toast from '@/libs/shared/toast/feature/toast'
import ToastPortalWrapper from '@/libs/shared/toast/feature/toast-portal-wrapper'

interface ToastContainerProps {
  onShow: () => void
  children: string
}

export default function ToastContainer({
  onShow,
  children,
}: ToastContainerProps) {
  return (
    <ToastPortalWrapper id="toast-portal">
      <Toast onShow={onShow}>{children}</Toast>
    </ToastPortalWrapper>
  )
}
