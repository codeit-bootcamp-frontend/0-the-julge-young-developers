import classNames from 'classnames/bind'

import { utilCalcTimeDiff } from '@/libs/shared/notificatoin-modal/util/util-calc-time-diff'

import styles from './ui-notification-item.module.scss'

interface UiNotificationItemProps {
  name: string
  duration: string
  createdAt: string
}

const cx = classNames.bind(styles)

export function UiAcceptedNotificationItem({
  name,
  duration,
  createdAt,
}: UiNotificationItemProps) {
  const timeDiff = utilCalcTimeDiff(createdAt)

  return (
    <div className={cx('itemContainer')}>
      <div className={cx('status', 'accepted')} />
      <p className={cx('result')}>
        {name}({duration}) 공고 지원이{' '}
        <span className={cx('acceptEmphasis')}>승인</span>되었어요.
      </p>
      <p className={cx('timeDiff')}>{timeDiff}</p>
    </div>
  )
}

export function UiRejectedNotificationItem({
  name,
  duration,
  createdAt,
}: UiNotificationItemProps) {
  const timeDiff = utilCalcTimeDiff(createdAt)

  return (
    <div className={cx('itemContainer')}>
      <div className={cx('status', 'rejected')} />
      <p className={cx('result')}>
        {name}({duration}) 공고 지원이{' '}
        <span className={cx('rejectedEmphasis')}>거절</span>되었어요.
      </p>
      <p className={cx('timeDiff')}>{timeDiff}</p>
    </div>
  )
}
