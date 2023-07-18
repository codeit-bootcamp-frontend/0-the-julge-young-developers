'use client'

import { createPortal } from 'react-dom'

interface IToastPortalWrapperProps {
  children: React.ReactNode
  id: string
}

export default function ToastPortalWrapper({
  children,
  id,
}: IToastPortalWrapperProps) {
  if (typeof window !== 'object') {
    // Check if document is finally loaded
    return
  }
  const el = document.getElementById(id) as HTMLElement
  return createPortal(children, el)
}
