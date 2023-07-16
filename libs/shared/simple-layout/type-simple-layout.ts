interface UiSimpleLayoutProps {
  title: string
  titleAlign?: 'start' | 'center'
  titleSize?: number
  subtitle?: string
  subtitleSize?: number
  gap?: number
  children: React.ReactNode
}

interface UiSimpleLayoutResponsiveProps {
  title: string
  children: React.ReactNode
}

export type { UiSimpleLayoutProps, UiSimpleLayoutResponsiveProps }
