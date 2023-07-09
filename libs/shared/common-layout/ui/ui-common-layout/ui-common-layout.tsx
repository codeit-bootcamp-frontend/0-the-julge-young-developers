import classNames from 'classnames/bind'

import styles from './ui-common-layout.module.scss'

interface UiCommonLayoutProps {
  title: string
  titleAlign?: 'start' | 'center'
  titleSize?: number
  gap?: number
  children: React.ReactNode
}

const cx = classNames.bind(styles)

/**
 * @param title 레이아웃 title
 * @param titleAlign 레이아웃 title 정렬
 * @param titleSize 레이아웃 title 폰트 사이즈
 * @param gap 레이아웃 title과 content 간격
 * @param children 레이아웃 content
 * @returns title과 content를 결합한 기본 레이아웃
 */
export default function UiCommonLayoutTest({
  title,
  titleAlign = 'start',
  titleSize = 28,
  gap = 0,
  children,
}: UiCommonLayoutProps) {
  return (
    <>
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
    </>
  )
}
