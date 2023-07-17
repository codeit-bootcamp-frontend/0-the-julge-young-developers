'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
import { useState } from 'react'

import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { NoticeDetail } from '@/libs/shared/notice-card/type-notice-card'

export default function MyShopNoticeEditButton({
  shopId,
  noticeId,
  data,
}: {
  shopId: string
  noticeId: string
  data: NoticeDetail
}) {
  const [shownEditModal, setShownEditModal] = useState(false)
  const handleClickButton = () => {
    setShownEditModal(true)
  }

  return (
    <>
      <ActiveOutlineBtn
        text="공고 편집하기"
        size="large"
        onClick={handleClickButton}
      />
      {shownEditModal && <div>공고 편집 모달 들어갈 자리</div>}
    </>
  )
}
