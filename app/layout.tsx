/* eslint-disable @next/next/no-head-element */
import { Roboto } from "@next/font/google"
import Footer from "./Footer";
import NavBar from "./NavBar";

const roboto = Roboto({ weight: '400' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={roboto.className}>
      <head></head>
      <body className="content">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
