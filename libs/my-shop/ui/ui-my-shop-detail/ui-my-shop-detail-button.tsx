'use client'

/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import classNames from 'classnames/bind'

import RegisterNoticeModal from '@/libs/my-shop/feature/my-notice/register-notice-modal'
import RegisterShopModal from '@/libs/my-shop/feature/my-shop/register-shop-modal'
import { Shop } from '@/libs/my-shop/type-my-shop'
import {
  ActiveBtn,
  ActiveOutlineBtn,
} from '@/libs/shared/click-btns/feature/click-btns'

import styles from './ui-my-shop-detail-button.module.scss'

const cx = classNames.bind(styles)
export default function UiMyShopDetailButton({ shop }: { shop: Shop }) {
  const [openShopModal, setOpenShopModal] = useState<boolean>(false)
  const [openNoiceModal, setOpenNoticeModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const handleClickToggleShopModal = () => {
    setOpenShopModal(!openShopModal)

    setTimeout(() => {
      setShowModal(!showModal)
    }, 500)
  }

  const handleClickToggleNoticeModal = () => {
    setOpenNoticeModal(!openNoiceModal)
    if (showModal) {
      setShowModal(!showModal)
      return
    }
    setTimeout(() => {
      setShowModal(!showModal)
    }, 500)
  }
  return (
    <>
      <div className={cx('wrapper')}>
        <ActiveOutlineBtn
          size="large"
          text="편집하기"
          onClick={handleClickToggleShopModal}
        />
        <ActiveBtn
          size="large"
          text="공고 등록하기"
          onClick={handleClickToggleNoticeModal}
        />
      </div>
      {openShopModal && (
        <RegisterShopModal
          onClickToggelModal={handleClickToggleShopModal}
          shop={shop}
        />
      )}
      {openNoiceModal && (
        <RegisterNoticeModal
          onClickToggelModal={handleClickToggleNoticeModal}
          showModal={showModal}
        />
      )}
    </>
  )
}
