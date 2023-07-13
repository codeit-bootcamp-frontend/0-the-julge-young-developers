import React from 'react'

import { OmitCommonBtnProps } from '@/libs/shared/click-btn/types/type-click-btn.'

import UiClickBtn from '../ui/ui-click-btn'

export function CommonActiveOutlineBtn(props: OmitCommonBtnProps) {
  return <UiClickBtn outline={true} status="active" {...props} />
}

export function CommonActiveOutlineConfirmBtn(props: OmitCommonBtnProps) {
  return <UiClickBtn outline={true} status="active" confirm={true} {...props} />
}

export function CommonActiveBtn(props: OmitCommonBtnProps) {
  return <UiClickBtn status="active" {...props} />
}

export function CommonInactiveBtn(props: OmitCommonBtnProps) {
  return <UiClickBtn status="inactive" {...props} />
}
