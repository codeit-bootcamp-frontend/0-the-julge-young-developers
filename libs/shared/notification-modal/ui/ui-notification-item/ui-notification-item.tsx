import classNames from 'classnames/bind'

import { UiNotificationItemProps } from '@/libs/shared/notification-modal/type-notification-modal'
import { utilCalcTimeDiff } from '@/libs/shared/notification-modal/util/util-calc-time-diff'

import styles from './ui-notification-item.module.scss'

const cx = classNames.bind(styles)

function UiAcceptedNotificationItem({
  id,
  name,
  duration,
  createdAt,
  onClickNotiItem,
}: UiNotificationItemProps) {
  const timeDiff = utilCalcTimeDiff(createdAt)

  return (
    <button
      type="button"
      className={cx('itemContainer')}
      onClick={() => onClickNotiItem(id)}
    >
      <div className={cx('status', 'accepted')} />
      <p className={cx('result')}>
        {name}({duration}) 공고 지원이{' '}
        <span className={cx('acceptedEmphasis')}>승인</span>되었어요.
      </p>
      <p className={cx('timeDiff')}>{timeDiff}</p>
    </button>
  )
}

function UiRejectedNotificationItem({
  id,
  name,
  duration,
  createdAt,
  onClickNotiItem,
}: UiNotificationItemProps) {
  const timeDiff = utilCalcTimeDiff(createdAt)

  return (
    <button
      type="button"
      className={cx('itemContainer')}
      onClick={() => onClickNotiItem(id)}
    >
      <div className={cx('status', 'rejected')} />
      <p className={cx('result')}>
        {name}({duration}) 공고 지원이{' '}
        <span className={cx('rejectedEmphasis')}>거절</span>되었어요.
      </p>
      <p className={cx('timeDiff')}>{timeDiff}</p>
    </button>
  )
}

export { UiAcceptedNotificationItem, UiRejectedNotificationItem }
