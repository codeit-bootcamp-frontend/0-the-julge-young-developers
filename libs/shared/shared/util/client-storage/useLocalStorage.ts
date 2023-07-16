import { useEffect, useState } from 'react'

import ClientStorage from './clientStorage'

/**
 * @description 기존 로컬 스토리지에 예외처리를 추가한 훅입니다.
 *
 * @param key 스토리지 key
 * @param onException 예외 처리
 * @returns 스토리지 state
 */
const useLocalStorage = <T>(key: string, onException?: () => void) => {
  const [clientStorage, setClientStorage] = useState<ClientStorage<T> | null>(
    null,
  )

  useEffect(() => {
    setClientStorage(new ClientStorage<T>(key, localStorage, onException))
  }, [key, onException])

  return clientStorage
}

export default useLocalStorage
