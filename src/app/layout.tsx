import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'ZYROO — Web Design Studio',
  description:
    'Web design studio based in India. We build websites, online stores, and web apps for small businesses and startups. Quick delivery, fair pricing.',
  keywords:
    'web design india, website development, landing page, e-commerce, portfolio website, web application, affordable web design',
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
      'We build websites that look good and actually work. Based in India.',
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
