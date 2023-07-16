import { useEffect, useState } from 'react'

import ClientStorage from './clientStorage'

/**
 * @description 공고 상세 페이지에서 사용하는 hook입니다.
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
