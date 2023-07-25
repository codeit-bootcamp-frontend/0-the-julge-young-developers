import { META_ROOT } from '@/app/_meta'
import '@/styles/global.scss'

import Providers from '@/libs/shared/providers/shared/feature/providers'

import { spoqaHanSansNeo } from '@/public/fonts/localfonts'

export const metadata = META_ROOT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={spoqaHanSansNeo.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
