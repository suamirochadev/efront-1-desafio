import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Lexend_Deca } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
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
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
