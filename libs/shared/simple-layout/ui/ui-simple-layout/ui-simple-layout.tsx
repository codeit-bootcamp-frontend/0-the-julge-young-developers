import classNames from 'classnames/bind'

import { UiSimpleLayoutProps } from '@/libs/shared/simple-layout/type-simple-layout'

import styles from './ui-simple-layout.module.scss'

const cx = classNames.bind(styles)

/**
 * @param title 레이아웃 title
 * @param titleAlign 레이아웃 title 정렬
 * @param titleSize 레이아웃 title 폰트 사이즈
 * @param gap 레이아웃 title과 content 간격
 * @param children 레이아웃 content
 * @returns title과 content를 결합한 기본 레이아웃
 */
export default function UiSimpleLayout({
  title,
  titleAlign = 'start',
  titleSize = 28,
  subtitle,
  subtitleSize = 16,
  gap = 0,
  children,
}: UiSimpleLayoutProps) {
  return (
    <div className={cx('container')}>
      {subtitle && (
        <h2 className={cx('subtitle')} style={{ fontSize: subtitleSize }}>
          {subtitle}
        </h2>
      )}
      <h1
        className={cx('title')}
        style={{
          textAlign: titleAlign,
          fontSize: titleSize,
          marginBottom: gap,
        }}
      >
        {title}
      </h1>
      {children}
    </div>
  )
}
