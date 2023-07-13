import { options } from '@/libs/shared/input-select-btn/data-access/mock-data'
import Select from '@/libs/shared/input-select-btn/feature/feature-select'

export default function Home() {
  return (
    <main>
      <Select
        title="하이루"
        isRequired={false}
        options={options}
        defaultValueIdx={0}
      />
    </main>
  )
}
