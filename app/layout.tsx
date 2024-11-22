import {Funnel_Display, Noto_Sans} from "next/font/google"
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./global.css"
import {Info} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

const fallback_font = Noto_Sans({weight: '400', subsets: ["greek"] })
const font = Funnel_Display({ weight: '400', subsets: ["latin"],  fallback: ["arial"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={font.className}>
      <head><title>WoordMaster</title></head>
      <body className="m-2 bg-ivory dark:bg-sage">
          <Alert variant="default" className="rounded-xl mb-5 shadow">
              <Info className="h-4 w-4" />
              <AlertTitle>Er wordt nog aan de site gewerkt.</AlertTitle>
              <AlertDescription>
                  Verwacht bugs, rare dingen en algemene onstabiliteit van de site.
              </AlertDescription>
          </Alert>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
