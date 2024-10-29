"use client";

import localFont from "next/font/local";
import "./globals.css";
import { HeaderNav } from "@/components/home/head-nav";
import { usePathname, useRouter } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <html lang="en">
      <title>ZeroCoderss</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {router.pathname !== "/*" && <HeaderNav />}
        <div className="mt-20">{children}</div>
      </body>
    </html>
  );
}
