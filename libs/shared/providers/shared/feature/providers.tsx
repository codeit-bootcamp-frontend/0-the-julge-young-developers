'use client'

import { NewRecentNoticesProvider } from '@/libs/shared/providers/context/feature/notice-provider'
import UserProvider from '@/libs/shared/providers/context/feature/user-provider'

interface IProvidersProps {
  children: React.ReactNode
}

function Providers({ children }: IProvidersProps) {
  return (
    <UserProvider>
      <NewRecentNoticesProvider>{children}</NewRecentNoticesProvider>
    </UserProvider>
  )
}

export default Providers
