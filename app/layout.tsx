import { META_ROOT } from "@/app/_meta";
import { spoqaHanSansNeo } from "@/public/fonts/localfonts";
import "@/styles/global.scss";

export const metadata = META_ROOT;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={spoqaHanSansNeo.className}>
      <body>{children}</body>
    </html>
  );
}
