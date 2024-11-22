import { Roboto } from "next/font/google"
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./global.css"

const roboto = Roboto({ weight: '400', subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={roboto.className}>
      <head><title>Woord Master</title></head>
      <body className="content">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
