import React from 'react'

import UiCommonClickBtn from '../ui/ui-common-click-btn'

export function CommonActiveOutlineBtn(props: OmitCommonBtnProps) {
  return <UiCommonClickBtn outline={true} status="active" {...props} />
}

export function CommonActiveBtn(props: OmitCommonBtnProps) {
  return <UiCommonClickBtn status="active" {...props} />
}

export function CommonInactiveBtn(props: OmitCommonBtnProps) {
  return <UiCommonClickBtn status="inactive" {...props} />
}
