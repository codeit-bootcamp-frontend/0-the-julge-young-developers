import MyJobPostingList from '@/libs/my-shop/feature/my-job-posting/my-job-posting-list'
import MyShop from '@/libs/my-shop/feature/my-shop/my-shop'

export default function MyShopPage() {
  return (
    <div>
      <MyShop />
      <MyJobPostingList />
    </div>
  )
}
