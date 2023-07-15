import { useEffect, useState } from 'react'

/**
 *
 * @example 사용 예시
 * ```
 * const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1200px)')

  useEffect(() => {
    if (isMobile && isTablet) {
      console.log('모바일')
    } else if (!isMobile && isTablet) {
      console.log('태블릿')
    } else {
      console.log('데스크탑')
    }
  }, [isMobile, isTablet])
 * ```
 *
 * @param query `(max-width: ${breakpoint}px)`
 * @returns boolean
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (q: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(q).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(false)

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
