export default async function MyProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <div id="funnel-portal" />
      <div id="toast-portal" />
      <div id="loader-portal" />
      <div id="btn-portal" />
    </>
  )
}
