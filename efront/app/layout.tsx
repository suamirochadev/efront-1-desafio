import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import './globals.css'

const lexend = Lexend_Deca( { subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Codelandia Blog',
  description: 'Boas-vindas ao projeto Blog - Desafio 1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon.svg"
        type="image/svg"
        sizes="32x32"
      />
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
