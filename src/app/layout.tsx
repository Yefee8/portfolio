import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Yefee trying to get scholarship...",
  description: "Hey! I'm Yavuz, I'm trying to get a scholarship with this website and I hope I will!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
