'use client'

import { createPortal } from 'react-dom'

interface IModalPortalWrapperProps {
  children: React.ReactNode
  id: string
}

const ModalPortalWrapper = ({ children, id }: IModalPortalWrapperProps) => {
  if (typeof window !== 'object') {
    // Check if document is finally loaded
    return
  }
  const el = document.getElementById(id) as HTMLElement
  return createPortal(children, el)
}

export default ModalPortalWrapper
