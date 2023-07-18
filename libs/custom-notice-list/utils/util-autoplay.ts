const utilAutoplaySlider = (sliderRef: React.RefObject<HTMLDivElement>) => {
  if (sliderRef.current) {
    const sliderWrapper = sliderRef.current
    const { scrollLeft } = sliderWrapper

    const totalWidth = sliderWrapper.scrollWidth
    const firstCardWidth =
      sliderWrapper.children[0]?.getBoundingClientRect().width
    const cardWidth =
      window.innerWidth > 768 ? firstCardWidth + 14 : firstCardWidth + 4

    let nextScrollLeft = scrollLeft + cardWidth

    if (nextScrollLeft > totalWidth - cardWidth * 2) {
      nextScrollLeft = 0
    }

    sliderWrapper.scrollTo({
      left: nextScrollLeft,
      behavior: 'smooth',
    })
  }
}

export default utilAutoplaySlider
