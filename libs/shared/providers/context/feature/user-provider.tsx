'use client'

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react'

export const UserContext = createContext<{
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
} | null>(null)

export default function UserProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [data, setData] = useState<string>('')

  // Provider로 감싼 자식 컴포넌트가 그 상태를 사용하지 않아도 리렌더링되는 문제 방지
  const value = useMemo(
    () => ({
      userId: data,
      setUserId: setData,
    }),
    [data, setData],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const userContext = useContext(UserContext)
  if (!userContext) {
    throw new Error('context가 존재하지 않습니다.')
  }

  return userContext
}
