'use client'

import { useState } from 'react'

import AlbaClientLoader from '@/libs/alba/shared/feature/alba-client-loader'
import { ActiveOutlineBtn } from '@/libs/shared/click-btns/feature/click-btns'
import { useMediaQuery } from '@/libs/shared/shared/util/useMediaQuery'
import AlbaToast from '@/libs/shared/toast/feature/toast-container'

import RegisterModal from '../../my-profile-h/feature/register-modal'
import RegisterModalMobile from '../../my-profile-h/feature/register-modal-mobile'

interface EditBtnProps {
  name: string
  phone: string
  address: string
  bio: string
}

export default function EditBtn({ name, phone, address, bio }: EditBtnProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isTablet = useMediaQuery('(max-width: 1028px)')
  const [openView, setOpenView] = useState<
    'not-found' | 'tablet/desktop' | 'mobile'
  >('not-found')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  const [defaultName, setDefaultName] = useState<string>(name)
  const [defaultPhone, setDefaultPhone] = useState<string>(phone)
  const [defaultAddress, setDefaultAddress] = useState<string>(address)
  const [defaultBio, setDefaultBio] = useState<string>(bio)

  const [isShowToast, setIsShowToast] = useState<boolean>(false)
  const [openClientLoader, setOpenClientLoader] = useState<boolean>(false)

  const handleClickCloseModal = () => {
    setOpenModal(false)
  }

  const handleClickChangeView = () => {
    if (isMobile && isTablet) {
      setOpenModal(true)
      setDefaultName(name)
      setDefaultPhone(phone)
      setDefaultAddress(address)
      setDefaultBio(bio)
      setOpenView('mobile')
    } else {
      setOpenModal(true)
      setDefaultName(name)
      setDefaultPhone(phone)
      setDefaultAddress(address)
      setDefaultBio(bio)
      setOpenView('tablet/desktop')
    }

    setTimeout(() => {
      setShowModal(true)
    }, 500)
  }

  return (
    <div>
      <ActiveOutlineBtn
        text="편집하기"
        size="large"
        onClick={handleClickChangeView}
      />

      {openModal && !isMobile && openView === 'tablet/desktop' && (
        <RegisterModal
          showModal={showModal}
          onClickCloseModal={handleClickCloseModal}
          onClickOpenToast={() => setIsShowToast(true)}
          defaultName={defaultName}
          defaultPhone={defaultPhone}
          defaultAddress={defaultAddress}
          defaultBio={defaultBio}
          setOpenClientLoader={setOpenClientLoader}
        />
      )}
      {openModal && isMobile && openView === 'mobile' && (
        <RegisterModalMobile
          defaultName={defaultName}
          defaultPhone={defaultPhone}
          defaultAddress={defaultAddress}
          defaultBio={defaultBio}
          setDefaultName={setDefaultName}
          setDefaultPhone={setDefaultPhone}
          setDefaultAddress={setDefaultAddress}
          // setDefaultBio={setDefaultBio}
          showModal={showModal}
          onClickCloseModal={handleClickCloseModal}
          onClickOpenToast={() => setIsShowToast(true)}
          setOpenClientLoader={setOpenClientLoader}
        />
      )}

      {isShowToast && (
        <AlbaToast onShow={() => setIsShowToast(false)}>
          편집을 완료했어요
        </AlbaToast>
      )}
      {openClientLoader && <AlbaClientLoader />}
    </div>
  )
}
