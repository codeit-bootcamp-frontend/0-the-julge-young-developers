import { useEffect } from 'react'

const useEnableToBack = (onClickCloseModal: () => void) => {
  useEffect(() => {
    const handlePopstateBackward = () => {
      window.history.pushState(null, document.title, window.location.href)
      onClickCloseModal()
    }

    window.history.pushState(null, document.title, window.location.href)
    window.addEventListener('popstate', handlePopstateBackward)

    return () => {
      window.removeEventListener('popstate', handlePopstateBackward)
    }
  }, [onClickCloseModal])
}

export default useEnableToBack
