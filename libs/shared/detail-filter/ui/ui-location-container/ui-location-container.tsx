import classNames from 'classnames/bind'

import { UiLocationContainerProps } from '@/libs/shared/detail-filter/type-detail-filter'

import styles from './ui-location-container.module.scss'

const cx = classNames.bind(styles)

export default function UiLocationContainer({
  locations,
  onSelect,
}: UiLocationContainerProps) {
  return (
    <div className={cx('locationContainer')}>
      <div className={cx('locationContent')}>
        {locations.map((location) => (
          <button
            className={cx('locationItem')}
            key={location}
            type="button"
            onClick={() => onSelect(location)}
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  )
}
