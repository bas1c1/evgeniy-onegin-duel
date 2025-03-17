import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Евгений Онегин',
  description: 'Смысл дуэли Онегина и Ленского'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
