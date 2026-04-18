import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: 'AreculateirMastery | Curated Index for Polymathic Mastery',
  description: 'A curated index of tools, systems, references, and resources for polymathic mastery. Built for builders, operators, researchers, and designers.',
  keywords: ['tools', 'directory', 'ai', 'design', 'development', 'automation', 'systems', 'research'],
  authors: [{ name: 'Areculateir' }],
  creator: 'Areculateir',
  openGraph: {
    title: 'AreculateirMastery',
    description: 'A curated index of tools, systems, references, and resources for polymathic mastery.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AreculateirMastery',
    description: 'A curated index of tools, systems, references, and resources for polymathic mastery.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
