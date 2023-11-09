import type { Metadata } from 'next'
import { GeistSans } from "geist/font";
import './globals.css'

export const metadata: Metadata = {
  title: "Yefee ~ Yavuz Efe",
  description: "Hey! I'm Yavuz(Yefee), A front-end developer who can code node/express apps!",
  keywords: ["Yefee", "Yefee Portfolio", "Yavuz Efe", "Yavuz Efe Findikli"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
      </body>
    </html>
  )
}
