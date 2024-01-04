import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'],weight: ["400", "500", "600", "700"]})

export const metadata: Metadata = {
  title: 'Krishi Mitra App',
  description: 'Application for farmer and yield-person.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
