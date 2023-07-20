import UiFooter from '@/libs/footer/ui/ui-footer/ui-footer'
import GnbServer from '@/libs/gnb/feature/gnb-server'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GnbServer />
      {children}
      <div id="btn-portal" />
      <div id="loader-portal" />
      <UiFooter />
    </>
  )
}
