import '@/styles/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import NavigationBar from '@/components/NavigationBar';
import { DarkModeProvider } from '../context/DarkModeContext';
import { Web3AuthProvider } from '../context/Web3AuthContext';

export const metadata: Metadata = {
  title: 'Stack',
  description: 'Investing made easy',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', type: 'image/svg+xml', url: '/images/crypto-icons/btc.svg' },
    { rel: 'apple-touch-icon', url: '/images/crypto-icons/btc-192.png' },
    {
      rel: 'apple-touch-icon',
      sizes: '192x192',
      url: '/images/crypto-icons/btc-192.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '512x512',
      url: '/images/crypto-icons/btc-512.png',
    },
  ],
  appleWebApp: {
    title: 'Your Bitcoin App',
    statusBarStyle: 'black-translucent',
    startupImage: ['/images/crypto-icons/btc-512.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 'no',
  themeColor: '#F7931A',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Stack" />
        <link
          rel="apple-touch-startup-image"
          href="/images/crypto-icons/btc.svg"
        />
      </head>
      <body>
        <Web3AuthProvider>
          <DarkModeProvider>
            <NavigationBar />
            {children}
          </DarkModeProvider>
        </Web3AuthProvider>
      </body>
    </html>
  );
}