import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yefee ~ Yavuz Efe",
  description:
    "Hey! I'm Yavuz(Yefee), A front-end developer who can code node/express apps!",
  keywords: [
    "Yefee",
    "Yefee Portfolio",
    "Yavuz Efe",
    "Yavuz Efe Findikli",
    "Yefee8 Portfolio",
    "Yefee's Portfolio",
    "Yefee github",
    "Yefee8",
    "Yefee Portfolio",
    "Portfolio",
    "Yefee8-portfolio",
    "Portfolio Yefee8",
    "Portfolio",
    "vercel",
    "portfolio-yefee8",
    "app",
    "portfolio-yefee8.vercel.app"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
      </body>
      <Analytics />
    </html>
  );
}
