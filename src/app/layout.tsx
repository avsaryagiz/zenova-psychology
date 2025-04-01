import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zenova Psikoloji",
  description: "Zenova Psikoloji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={` ${poppins.variable} ${roboto.variable} relative grid min-h-screen grid-rows-[auto_1fr_auto] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
