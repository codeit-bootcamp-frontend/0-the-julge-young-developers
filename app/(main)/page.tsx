import CustomNoticeList from '@/libs/custom-notice-list/feature/custom-notice-list'
import NoticeList from '@/libs/notice-list/feature/notice-list'

export default function Home() {
  return (
    <main>
      <CustomNoticeList />
      <NoticeList />
    </main>
  )
}
