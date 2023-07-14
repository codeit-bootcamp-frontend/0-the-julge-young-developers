export default async function MyProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <div id="funnel-portal" />
    </>
  )
}
