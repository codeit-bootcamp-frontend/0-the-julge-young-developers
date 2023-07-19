'use client'

/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'

import { useRouter } from 'next/navigation'

import RegisterNoticeModal from '@/libs/my-shop/feature/my-notice/register-notice-modal'
import RegisterShopModal from '@/libs/my-shop/feature/my-shop/register-shop-modal'
import { Shop } from '@/libs/my-shop/type-my-shop'
import {
  ActiveBtn,
  ActiveOutlineBtn,
} from '@/libs/shared/click-btns/feature/click-btns'
import { ConfirmDialog } from '@/libs/shared/dialog/feature/dialog'
import ToastContainer from '@/libs/shared/toast/feature/toast-container'

import styles from './ui-my-shop-detail-button.module.scss'

const cx = classNames.bind(styles)
export default function UiMyShopDetailButton({ shop }: { shop: Shop }) {
  const [openShopModal, setOpenShopModal] = useState<boolean>(false)
  const [openNoticeModal, setOpenNoticeModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showEditToast, setShowEditToast] = useState<boolean>(false)
  const [showRegisterToast, setShowRegisterToast] = useState<boolean>(false)
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const router = useRouter()
  const handleClickShowErrorDialog = (text: string) => {
    console.log(text)
    setErrorMessage(text)
    setOpenErrorDialog(true)

    switch (text) {
      case '로그인이 필요합니다':
        router.push('/signin')
        break
      case '공고를 게시할 권한이 없습니다' || '가게를 수정할 권한이 없습니다':
        router.push('/')
        break
      case '존재하지 않는 가게입니다':
        router.push('/my-shop')
        break
      default:
        break
    }
  }

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
          onClickShowErrorDialog={handleClickShowErrorDialog}
        />
      )}
      {openNoticeModal && (
        <RegisterNoticeModal
          onClickToggelModal={handleClickToggleNoticeModal}
          showModal={showModal}
          onClickShowToast={() => setShowRegisterToast(true)}
          onClickShowErrorDialog={handleClickShowErrorDialog}
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

        {openErrorDialog && (
          <ConfirmDialog
            text={errorMessage || '요청에 실패했습니다.'}
            onConfirm={() => setOpenErrorDialog(false)}
          />
        )}
      </div>
    </>
  )
}
