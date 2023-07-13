import { options } from '@/libs/shared/input-select-btn/data-access/mock-data'
import Input from '@/libs/shared/input-select-btn/feature/feature-input'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'

export default function Home() {
  return (
    <main>
      <Select variant="filter" options={options} defaultValue="서울시 강동구" />
      <Input
        variant="explain"
        title="후후"
        isRequired={false}
        defaultValue="기본값"
      />
    </main>
  )
}
