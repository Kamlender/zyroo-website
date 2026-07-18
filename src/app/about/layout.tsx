import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'ZYROO is a web design studio based in Faridabad, India. We build websites, online stores, and web apps for small businesses, startups, and healthcare providers.',
  alternates: {
    canonical: 'https://tinytoono.in/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Person Schema — Founder */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://tinytoono.in/about#pawash',
          name: 'Pawash',
          jobTitle: 'Founder, ZYROO Studio',
          worksFor: { '@id': 'https://tinytoono.in/#organization' },
          url: 'https://tinytoono.in/about',
          description:
            'Founder of ZYROO Studio — a web design studio based in Faridabad, India. Has delivered 47+ projects for small businesses, startups, and healthcare providers across India.',
        }}
      />
      {/* BreadcrumbList */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tinytoono.in' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://tinytoono.in/about' },
          ],
        }}
      />
      {children}
    </>
  );
}
