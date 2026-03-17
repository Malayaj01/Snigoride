import type { Metadata } from 'next'
import { DM_Serif_Display, Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/lib/ThemeProvider'
import './globals.css'

// Elegant serif for headings — matches Zypp Electric aesthetic
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-clash-display',
  display: 'swap',
})

// Clean, modern sans-serif for body text — highly readable
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-satoshi',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://Snigoride.com'),
  title: 'Snigoride — Electric Vehicle Logistics & Delivery',
  description:
    'EV rentals, last-mile delivery, EV advertising and franchise partnerships. Powering green mobility across India.',
  keywords: [
    'EV ride',
    'electric vehicle delivery',
    'EV rental India',
    'last-mile delivery EV',
    'EV franchise India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Snigoride — EV Logistics & Delivery',
    description: 'Powering green last-mile delivery across India.',
    url: 'https://Snigoride.com',
    siteName: 'Snigoride',
    type: 'website',
    images: [
      {
        url: '/assets/images/og/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Snigoride',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snigoride — EV Logistics & Delivery',
    description: 'Powering green last-mile delivery across India.',
    images: ['/assets/images/og/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('snigo-theme');if(t){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Snigoride',
              url: 'https://Snigoride.com',
              logo: 'https://Snigoride.com/assets/images/logo/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-98765-43210',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: 'English',
              },
              sameAs: [
                'https://linkedin.com/company/Snigoride',
                'https://instagram.com/Snigoride',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <a href="#main-content" className="sr-only sr-only-focusable">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
