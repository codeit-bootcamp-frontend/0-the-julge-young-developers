'use client'

import { useEffect } from 'react'

/**
 * @param 사용 예시
 *
 * ```
 * const kebabRef = useRef<HTMLDivElement | null>(null);
 *
 * useOutsideClick(kebabRef, handleClickCloseKebab);
 * ```
 *
 * @param ref 닫고 싶은 대상 ref
 * @param callback 닫는 동작 핸들러
 */
const useOutsideClick = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  callback: () => void,
) => {
  const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', handleClick)
    }, 0)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
