import React from 'react'

export default function MyShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <div id="funnel-portal-notice" />
      <div id="funnel-portal" />
    </div>
  )
}
