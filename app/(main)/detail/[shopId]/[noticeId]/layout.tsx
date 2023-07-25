export default async function NoticeDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <div id="btn-portal" />
      <div id="toast-portal" />
      <div id="loader-portal" />
    </>
  )
}
