import GnbServer from '@/libs/gnb/feature/gnb-server'

export default async function NoticeDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GnbServer />
      {children}
      <div id="loader-portal" />
      <div id="btn-portal" />
    </>
  )
}
