import { CardChips } from './util-calc-pay-diff'

const chipText = (chip: CardChips, rate: undefined | number) => {
  if (chip === 'red' || chip === 'orange') {
    return `기존 시급보다 ${rate}%`
  }
}

export { chipText }
