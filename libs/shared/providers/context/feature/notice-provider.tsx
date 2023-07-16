import { ReactNode, createContext, useContext, useMemo } from 'react'

import {
  RecentNoticeItem,
  RecentNoticeList,
} from '@/libs/shared/providers/context/types/type-recent-notice'
import useLocalStorage from '@/libs/shared/shared/util/client-storage/useLocalStorage'

const STORAGE_KEY = 'RECENT_NOTICES'

interface NewRecentNoticesProps {
  getRecentNoticeList: () => RecentNoticeList | null
  setRecentNoticeItem: (notice: RecentNoticeItem) => void
  removeRecentNoticeItem: () => void
}

const NewRecentNoticesContext = createContext<NewRecentNoticesProps>({
  getRecentNoticeList: () => null,
  setRecentNoticeItem: () => {},
  removeRecentNoticeItem: () => {},
})

function NewRecentNoticesProvider({ children }: { children: ReactNode }) {
  const recentNoticesStorage = useLocalStorage<RecentNoticeList>(STORAGE_KEY)

  const contextProps: NewRecentNoticesProps = useMemo(
    () => ({
      getRecentNoticeList: () => {
        if (recentNoticesStorage) {
          return recentNoticesStorage.get()
        }
        return null
      },
      setRecentNoticeItem: (notices: RecentNoticeItem) =>
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
 * @example 
 * 
 * ```
 * const recentNotices = useNewRecentNoticesContext()

  useEffect(() => {
    recentNotices.setRecentNoticeItem({ item: { value: '데이터' } })

    const data = recentNotices.getRecentNoticeList()
    console.log(data) // { item: { value: '데이터' } }
  }, [])
 * ```
 * 
 * @returns 
 */
const useNewRecentNoticesContext = () => useContext(NewRecentNoticesContext)

export { NewRecentNoticesProvider, useNewRecentNoticesContext }
