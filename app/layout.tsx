/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css"
import { Roboto } from "@next/font/google"

const roboto = Roboto({ weight: '400' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={roboto.className}>
      <head></head>
      <body className="content">{children}</body>
    </html>
  );
}
