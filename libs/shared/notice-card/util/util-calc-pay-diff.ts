import { CardChips } from '@/libs/shared/notice-card/type-notice-card'

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
