"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showLayout = pathname !== "/login" && pathname !== "/register";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showLayout && (
          <div className="fixed w-full top-0 z-50">
            <Navbar />
          </div>
        )}

        <main className={showLayout ? "pt-20" : ""}>{children}</main>

        {showLayout && (
          <div className="pt-20">
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
