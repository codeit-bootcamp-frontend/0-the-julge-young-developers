import React from 'react'

import { OmitBtnProps } from '@/libs/shared/click-btns/types/type-click-btn.'

import UiClickBtn from '../ui/ui-click-btn'

export function ActiveOutlineBtn(props: OmitBtnProps) {
  return <UiClickBtn outline={true} status="active" {...props} />
}

export function ActiveOutlineConfirmBtn(props: OmitBtnProps) {
  return <UiClickBtn outline={true} status="active" confirm={true} {...props} />
}

export function ActiveBtn(props: OmitBtnProps) {
  return <UiClickBtn status="active" {...props} />
}

export function InactiveBtn(props: OmitBtnProps) {
  return <UiClickBtn status="inactive" {...props} />
}
