import Gnb from '@/libs/gnb/feature/gnb'

export default async function NoticeDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Gnb />
      {children}
      <div id="loader-portal" />
    </>
  )
}
