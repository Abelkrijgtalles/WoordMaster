import { Roboto } from "next/font/google"
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./global.css"
import {Info} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

const roboto = Roboto({ weight: '400', subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={roboto.className}>
      <head><title>WoordMaster</title></head>
      <body className="m-2">
          <Alert variant="default" className="rounded-xl mb-5">
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
