const utilCalcChangeRate = (
  currentPay: number,
  originalPay: number,
): undefined | number => {
  if (originalPay >= currentPay) return
  return Math.floor(((currentPay - originalPay) / originalPay) * 100)
}

export { utilCalcChangeRate }
