import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Varela_Round,
  Jost,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import "./style.scss";
import { WebProvider } from "../context-api/WebContext";
import LandingNavbar from "../components/navbar/LandingNavbar";
import LandingFooter from "../components/footer/LandingFooter";
import PopUpForm from "../components/pop-up/PopUpForm";
import Call from "../components/ContactButton/Call";
import { contact } from "../utils/constent";
import Whatsapp from "../components/ContactButton/WhatsApp";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela-round",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Farms by City Focus | Private Farmhouses in Gurugram & Sohna",
  description:
    "Private farmhouses in Gurugram with a pool all to yourselves. Crystal Farmhouse & Sukoon Farmhouse for 25+ guests, private pool, sprawling lawns and bonfire evenings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Jost:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${dmSans.variable} ${fraunces.variable} ${varelaRound.variable} ${cormorant.variable} ${jost.variable} ${playfair.variable} h-full antialiased`}
        suppressHydrationWarning={true}
      >
        <WebProvider>
          <LandingNavbar />
          {children}
          <LandingFooter />
          <PopUpForm />
          <Call callNumber={contact.phone[0]} />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
        </WebProvider>
      </body>
    </html>
  );
}
