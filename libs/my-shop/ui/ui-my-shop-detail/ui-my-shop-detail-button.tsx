'use client'

/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import classNames from 'classnames/bind'

import { Shop } from '@/libs/my-shop/type-my-shop'
import {
  ActiveBtn,
  ActiveOutlineBtn,
} from '@/libs/shared/click-btns/feature/click-btns'

import styles from './ui-my-shop-detail-button.module.scss'

const cx = classNames.bind(styles)
export default function UiMyShopDetailButton({ shop }: { shop: Shop }) {
  const [shownShopModal, setShownShopModal] = useState(false)
  const [shownNoticeModal, setShownNoticeModal] = useState(false)

  return (
    <div className={cx('wrapper')}>
      <ActiveOutlineBtn
        size="large"
        text="편집하기"
        onClick={() => setShownShopModal(true)}
      />
      <ActiveBtn
        size="large"
        text="공고 등록하기"
        onClick={() => setShownNoticeModal(true)}
      />
    </div>
    // {shownShopModal && <Modal shop={shop} />}
    // {shownNoticeModal && <Modal ... />}
  )
}
