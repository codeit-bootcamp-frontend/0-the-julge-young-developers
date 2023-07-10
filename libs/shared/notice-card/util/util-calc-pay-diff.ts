const CARD_CHIPS = {
  Red: 'red',
  Orange: 'orange',
  Hide: 'hide',
} as const
export type CardChips = (typeof CARD_CHIPS)[keyof typeof CARD_CHIPS]

const utilCalcPayDiff = (
  currentPay: number,
  originalPay: number,
): CardChips => {
  const payDiff = currentPay - originalPay
  if (payDiff >= originalPay) {
    return 'red'
  }
  if (payDiff > 0) {
    return 'orange'
  }
  return 'hide'
}

export { utilCalcPayDiff }
