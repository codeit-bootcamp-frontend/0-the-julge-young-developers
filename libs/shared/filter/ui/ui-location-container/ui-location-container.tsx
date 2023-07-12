import classNames from 'classnames/bind'

import styles from './ui-location-container.module.scss'

const cx = classNames.bind(styles)

export default function UiLocationContainer({
  locations,
}: {
  locations: string[]
}) {
  return (
    <div className={cx('locationContainer')}>
      <div className={cx('locationContent')}>
        {locations.map((location) => (
          <button className={cx('locationItem')} key={location} type="button">
            {location}
          </button>
        ))}
      </div>
    </div>
  )
}
