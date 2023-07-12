import classNames from 'classnames/bind'

import { UiNotificationItemProps } from '@/libs/shared/notification-modal/type-notification-modal'
import { utilCalcTimeDiff } from '@/libs/shared/notification-modal/util/util-calc-time-diff'

import styles from './ui-notification-item.module.scss'

const cx = classNames.bind(styles)

function UiAcceptedNotificationItem({
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
        <span className={cx('acceptedEmphasis')}>승인</span>되었어요.
      </p>
      <p className={cx('timeDiff')}>{timeDiff}</p>
    </div>
  )
}

function UiRejectedNotificationItem({
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

export { UiAcceptedNotificationItem, UiRejectedNotificationItem }
