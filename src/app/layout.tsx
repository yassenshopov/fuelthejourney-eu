import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Custom fonts
const octupleMax = localFont({
  src: "../../public/fonts/Octuple-max-demo.ttf",
  variable: "--font-octuple-max",
  display: "swap",
});

const bebasNeue = localFont({
  src: [
    {
      path: "../../public/fonts/BebasNeue-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/BebasNeue-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BebasNeue-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BebasNeue-Book.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BebasNeue-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuel The Journey - ADC*E",
  description: "Fuel The Journey - ADC*E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${octupleMax.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
