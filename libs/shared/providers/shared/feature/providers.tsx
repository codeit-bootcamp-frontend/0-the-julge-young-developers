'use client'

import UserProvider from '@/libs/shared/providers/context/feature/user-provider'

interface IProvidersProps {
  children: React.ReactNode
}

function Providers({ children }: IProvidersProps) {
  return <UserProvider>{children}</UserProvider>
}

export default Providers
