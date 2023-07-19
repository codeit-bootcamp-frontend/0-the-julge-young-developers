import classNames from 'classnames/bind'

import styles from './domain-loader.module.scss'

const cx = classNames.bind(styles)

interface AlbaDomainLoaderProps {
  text: string
  title: string
  subtitle?: string
  subtitleSize?: number
}

export default function CommonDomainLoader({
  text,
  title,
  subtitle,
  subtitleSize = 16,
}: AlbaDomainLoaderProps) {
  return (
    <div className={cx('container')}>
      {subtitle && (
        <h2 className={cx('subtitle')} style={{ fontSize: subtitleSize }}>
          {subtitle}
        </h2>
      )}
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('wrapper')}>
        <p className={cx('text')}>{text}</p>
        <div className={cx('loaderContainer')}>
          <div className={cx('ldsDefault')}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}
