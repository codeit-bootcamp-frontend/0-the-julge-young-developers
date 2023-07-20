import { CardChips } from '@/libs/shared/notice-card/type-notice-card'

const chipText = (chip: CardChips, rate: undefined | number) => {
  if (chip === 'red' || chip === 'orange') {
    return `기존 시급보다 ${rate?.toLocaleString()}%`
  }
}

export { chipText }
