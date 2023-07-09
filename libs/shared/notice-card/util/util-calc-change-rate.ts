const utilCalcChangeRate = (
  currentPay: number,
  originalPay: number,
): undefined | number => {
  if (!(currentPay - originalPay)) return
  return Math.floor(((currentPay - originalPay) / originalPay) * 100)
}

export { utilCalcChangeRate }
