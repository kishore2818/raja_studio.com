import type { Metadata } from 'next';
import './globals.css';
import { MobileFloatingBar } from '../components/MobileFloatingBar';

export const metadata: Metadata = {
  title: 'RAJA DIGITAL STUDIO | Srivaikuntam | Wedding Cinematography & Photography',
  description:
    'Raja Digital Studio is Srivaikuntam’s premier creative wedding cinematography, candid photography, and digital photo lab studio. Located opposite Taluk Office, Arasalvar Kovil St. Contact: 9443486821.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  keywords: [
    'Raja Digital Studio',
    'Raja Studio Srivaikuntam',
    'rajastudiosrivi.in',
    'Wedding Photography Srivaikuntam',
    'Thoothukudi Wedding Cinematography',
    'Traditional Tamil Wedding Photography',
    'Digital Photo Lab Srivaikuntam',
    '4K Drone Shoot Thoothukudi',
    '9443486821'
  ],
  authors: [{ name: 'Raja Digital Studio' }],
  metadataBase: new URL('https://rajastudiosrivi.in'),
  openGraph: {
    title: 'RAJA DIGITAL STUDIO — Cinematic Vision • Timeless Moments',
    description:
      'Premier wedding cinematography, candid photography, and digital photo lab in Srivaikuntam, Tamil Nadu.',
    url: 'https://rajastudiosrivi.in',
    siteName: 'Raja Digital Studio',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#08080A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=JetBrains+Mono:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-studio-pitch text-studio-cream selection:bg-studio-gold selection:text-studio-pitch antialiased overflow-x-hidden min-h-screen">
        {/* Subtle organic film grain texture overlay */}
        <div className="film-grain" aria-hidden="true" />
        
        {children}

        {/* Floating Action Bar tailored specifically for mobile phone users */}
        <MobileFloatingBar />
      </body>
    </html>
  );
}
