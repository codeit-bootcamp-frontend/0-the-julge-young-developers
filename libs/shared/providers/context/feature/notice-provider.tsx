import { ReactNode, createContext, useContext, useMemo } from 'react'

import { AllNoticesData } from '@/libs/shared/api/types/type-notice'
import useLocalStorage from '@/libs/shared/shared/util/client-storage/use-localstorage'

const STORAGE_KEY = 'RECENT_NOTICES'

interface NewRecentNoticesProps {
  getRecentNoticeList: () => AllNoticesData[] | null
  setRecentNoticeList: (notices: AllNoticesData[]) => void
  removeRecentNoticeItem: () => void
}

const NewRecentNoticesContext = createContext<NewRecentNoticesProps>({
  getRecentNoticeList: () => null,
  setRecentNoticeList: () => {},
  removeRecentNoticeItem: () => {},
})

function NewRecentNoticesProvider({ children }: { children: ReactNode }) {
  const recentNoticesStorage = useLocalStorage<AllNoticesData[]>(STORAGE_KEY)

  const contextProps: NewRecentNoticesProps = useMemo(
    () => ({
      getRecentNoticeList: () => {
        if (recentNoticesStorage) {
          return recentNoticesStorage.get()
        }
        return null
      },
      setRecentNoticeList: (notices: AllNoticesData[]) =>
        recentNoticesStorage?.set(notices),
      removeRecentNoticeItem: () => recentNoticesStorage?.remove(),
    }),
    [recentNoticesStorage],
  )

  return (
    <NewRecentNoticesContext.Provider value={contextProps}>
      {children}
    </NewRecentNoticesContext.Provider>
  )
}

/**
 * 
 * @example 사용 예시 
 * 
 * ```
 * const recentNotices = useNewRecentNoticesContext()

  useEffect(() => {
    recentNotices.setRecentNoticeItem({ item: { value: '데이터' } })

    const data = recentNotices.getRecentNoticeList()
    console.log(data) // { item: { value: '데이터' } }
  }, [recentNotices])
 * ```
 * 
 * @returns 
 */
const useNewRecentNoticesContext = () => useContext(NewRecentNoticesContext)

export { NewRecentNoticesProvider, useNewRecentNoticesContext }
