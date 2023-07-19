export default async function NoticeDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <div id="loader-portal" />
    </>
  )
}
