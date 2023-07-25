'use client'

import { createPortal } from 'react-dom'

interface IAlbaClientLoaderWrapperProps {
  children: React.ReactNode
  id: string
}

export default function AlbaClientLoaderWrapper({
  children,
  id,
}: IAlbaClientLoaderWrapperProps) {
  if (typeof window !== 'object') {
    // Check if document is finally loaded
    return
  }
  const el = document.getElementById(id) as HTMLElement
  return createPortal(children, el)
}
