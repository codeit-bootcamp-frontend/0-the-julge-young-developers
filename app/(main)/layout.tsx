import UiFooter from '@/libs/footer/ui/ui-footer/ui-footer'
import Gnb from '@/libs/gnb/feature/gnb'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Gnb />
      {children}
      <UiFooter />
    </>
  )
}
