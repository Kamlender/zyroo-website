import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import JsonLd from '@/components/JsonLd';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  metadataBase: new URL('https://tinytoono.in'),
  title: {
    default: 'ZYROO STUDIO',
    template: '%s | ZYROO STUDIO',
  },
  description:
    'Web design studio based in India. We build websites, online stores, and web apps for small businesses and startups. Quick delivery, fair pricing.',
  keywords:
    'web design india, website development, landing page, e-commerce, portfolio website, web application, affordable web design, web design studio, startup website, small business website',
  authors: [{ name: 'ZYROO STUDIO', url: 'https://tinytoono.in' }],
  creator: 'ZYROO STUDIO',
  publisher: 'ZYROO STUDIO',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'ZYROO STUDIO',
    description:
      'We build websites that look good and actually work. Based in India. Quick delivery, fair pricing.',
    url: 'https://tinytoono.in',
    siteName: 'ZYROO STUDIO',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZYROO STUDIO',
    description:
      'We build websites that look good and actually work. Based in India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tinytoono.in',
  },
  other: {
    'application-name': 'ZYROO STUDIO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Inter (body) + Space Grotesk (headings) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Organization Schema — appears on every page */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': 'https://tinytoono.in/#organization',
            name: 'ZYROO Studio',
            alternateName: 'ZYROO',
            url: 'https://tinytoono.in',
            logo: 'https://tinytoono.in/favicon.png',
            image: 'https://tinytoono.in/favicon.png',
            description:
              'Web design studio based in Faridabad, India, building websites, online stores, and web apps for small businesses, startups, and healthcare providers.',
            email: 'jha@tinytoono.in',
            telephone: '+91-8278148729',
            priceRange: '₹5,000–₹60,000',
            areaServed: [
              { '@type': 'City', name: 'Faridabad' },
              { '@type': 'Country', name: 'India' },
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Faridabad',
              addressRegion: 'Haryana',
              addressCountry: 'IN',
            },
            founder: { '@id': 'https://tinytoono.in/about#pawash' },
            sameAs: [
              'https://www.instagram.com/zyroo.in',
              'https://www.linkedin.com/company/zyroo',
            ],
            makesOffer: services.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                url: `https://tinytoono.in/order/${s.id}`,
              },
              price: String(s.price),
              priceCurrency: 'INR',
            })),
          }}
        />
        {/* WebSite Schema */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://tinytoono.in',
            name: 'ZYROO STUDIO',
            publisher: { '@id': 'https://tinytoono.in/#organization' },
          }}
        />
      </head>
      <body>
        <Navbar />
        <main
          style={{
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
