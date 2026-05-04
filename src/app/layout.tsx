import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'ZYROO — Web Design Studio',
  description:
    'Premium web design & development studio. We craft stunning websites, e-commerce stores, and web applications that convert visitors into customers.',
  keywords:
    'web design, website development, landing page, e-commerce, portfolio website, web application, responsive design',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'ZYROO — Web Design Studio',
    description:
      'Premium web design & development studio. Stunning websites that convert.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main
          style={{
            paddingTop: 'var(--navbar-height)',
            position: 'relative',
            zIndex: 1,
            minHeight: '100vh',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
