'use client'

/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import RegisterNoticeModal from '@/libs/my-shop/feature/my-notice/register-notice-modal'
import RegisterShopModal from '@/libs/my-shop/feature/my-shop/register-shop-modal'
import { Shop } from '@/libs/my-shop/type-my-shop'
import {
  ActiveBtn,
  ActiveOutlineBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import styles from './ui-my-shop-detail-button.module.scss'

const cx = classNames.bind(styles)
export default function UiMyShopDetailButton({ shop }: { shop: Shop }) {
  const [openShopModal, setOpenShopModal] = useState<boolean>(false)
  const [openNoticeModal, setOpenNoticeModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showEditToast, setShowEditToast] = useState<boolean>(false)
  const [showRegisterToast, setShowRegisterToast] = useState<boolean>(false)

  useEffect(() => {
    console.log(showEditToast)
  }, [showEditToast])
  const handleClickToggleShopModal = () => {
    setOpenShopModal(!openShopModal)
  }

  const handleClickToggleNoticeModal = () => {
    setOpenNoticeModal(!openNoticeModal)
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
          onClickShowToast={() =>
            shop ? setShowEditToast(true) : setShowRegisterToast(true)
          }
        />
      )}
      {openNoticeModal && (
        <RegisterNoticeModal
          onClickToggelModal={handleClickToggleNoticeModal}
          showModal={showModal}
          onClickShowToast={() => setShowRegisterToast(true)}
        />
      )}
      <div>
        {showEditToast && (
          <ToastContainer onShow={() => setShowEditToast(false)}>
            편집을 완료했어요
          </ToastContainer>
        )}
        {showRegisterToast && (
          <ToastContainer onShow={() => setShowRegisterToast(false)}>
            등록을 완료했어요
          </ToastContainer>
        )}
      </div>
    </>
  )
}
