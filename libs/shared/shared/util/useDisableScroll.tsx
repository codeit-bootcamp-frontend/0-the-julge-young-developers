import { useEffect } from 'react'

const useDisableScroll = (): void => {
  useEffect(() => {
    const disableScroll = (event: Event): void => {
      event.preventDefault()
    }

    document.addEventListener('wheel', disableScroll, { passive: false })
    document.addEventListener('touchmove', disableScroll, { passive: false })

    return () => {
      document.removeEventListener('wheel', disableScroll)
      document.removeEventListener('touchmove', disableScroll)
    }
  }, [])
}

export default useDisableScroll
