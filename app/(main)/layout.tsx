import UiFooter from '@/libs/footer/ui/ui-footer/ui-footer'

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <UiFooter />
    </>
  )
}
