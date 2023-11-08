import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "700"] })

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
      <body className={poppins.className}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
      </body>
    </html>
  )
}
