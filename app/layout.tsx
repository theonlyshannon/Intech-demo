import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InTech",
  description: "Generated by create next app",
  icons: {
    icon: '../public/Logo InTech.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="font-poppins">
        <Navbar />
        <main className="overflow-hidden" >
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
